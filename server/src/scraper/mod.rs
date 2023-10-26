use axum::{http::StatusCode, response::Json};
use serde_json::{json, Map, Number, Value};
use thirtyfour::prelude::*;

pub async fn scrape_course_catalog() -> WebDriverResult<Json<Value>> {
    let mut course_data_vec: Vec<Value> = vec![];
    let caps = DesiredCapabilities::firefox();
    let driver = WebDriver::new("http://localhost:4444", caps).await?;

    driver.goto("https://catalog.gatech.edu/coursesaz/").await?;
    let a_to_z_index = driver.find(By::Id("atozindex")).await?;

    let department_pages = a_to_z_index.query(By::Tag("a")).all().await?;
    let mut page_links: Vec<Option<String>> = vec![];

    for page in department_pages {
        page_links.push(page.attr("href").await?);
    }

    for page_link in page_links {
        // let page_link = page.attr("href").await?;
        if let Some(link) = page_link {
            driver.goto(link).await?;
            let course_descs = driver.find(By::ClassName("sc_sccoursedescs")).await;
            let course_descs = match course_descs {
                Ok(e) => e,
                Err(_) => continue, 
            };
            let department_courses = course_descs
                .query(By::ClassName("courseblock"))
                .all()
                .await?;
            for course in department_courses {
                let mut course_map = Map::new();
                let title = course
                    .query(By::ClassName("courseblocktitle"))
                    .first()
                    .await?;

                let title_text = title.text().await?;
                let mut title_fields = title_text.split('.').collect::<Vec<&str>>();
                title_fields.pop();
                // println!("{:?}", title_fields);

                course_map.insert(
                    String::from("course_id"),
                    Value::String(title_fields[0].to_string()),
                );
                course_map.insert(
                    String::from("course_title"),
                    Value::String(title_fields[1..(title_fields.len() - 1)].join("")[1..].to_string()),
                );
                // println!("{}", title_fields.pop().unwrap());
                course_map.insert(
                    String::from("course_ch"),
                    Value::Number(Number::from(
                        u8::from_str_radix(title_fields.pop().unwrap().get(1..2).unwrap(), 10)
                            .unwrap(),
                    )),
                );

                let desc = course
                    .query(By::ClassName("courseblockdesc"))
                    .first()
                    .await?;
                course_map.insert(
                    String::from("course_desc"),
                    Value::String(desc.text().await?),
                );

                println!("{:?}", course_map);
                course_data_vec.push(Value::Object(course_map));
            }
            driver.back().await?;
            // break;
        }
    }

    // println!("{:?}", department_pages);

    // Always explicitly close the browser.
    driver.quit().await?;

    Ok(Json(Value::Array(course_data_vec)))
}
