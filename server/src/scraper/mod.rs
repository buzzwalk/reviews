use axum::response::Json;
use serde_json::{Map, Number, Value};
use thirtyfour::prelude::*;

pub async fn scrape_professor_names() -> WebDriverResult<Json<Value>> {
    let mut professor_names_vec: Vec<Value> = vec![];

    let caps = DesiredCapabilities::firefox();
    let driver = WebDriver::new("http://localhost:4444", caps).await?;

    // driver.goto("https://lite.gatech.edu/lite_script/dashboards/grade_distribution.html").await?;
    driver.goto("https://tableau.gatech.edu/t/GT/views/GradeDistributionDashboard_16075598538440/GradeDistributionPublic?iframeSizedToWindow=true&%3Aembed=y&%3Aembed=y&%3Adisplay_count=no&%3AshowAppBanner=false&%3Atoolbar=top&%3Aorigin=viz_share_link&%3AshowVizHome=no&%3AshowVizHome=n&%3Arender=false&%3Atabs=n&%3AapiID=host0#navType=1&navSrc=Parse").await?;
    println!("{}", driver.source().await?);
    std::thread::sleep(std::time::Duration::from_secs(5));

    println!("{}", driver.source().await?);
    let professors_dropdown = driver.find_all(By::ClassName("tabComboBoxNameContainer")).await?;
    professors_dropdown[6].click().await?;
    let professor_names = driver.find_all(By::ClassName("FIText")).await?;
    for prof in professor_names { 
        let prof_name = prof.text().await?;
        if prof_name != "(All)" {
            professor_names_vec.push(Value::String(prof.text().await?));
        }
    }
    println!("{:?}", professor_names_vec);
    Ok(Json(Value::Array(professor_names_vec)))
}

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
                let mut title_fields = title_text.split(". ").collect::<Vec<&str>>();
                // println!("{:?}", title_fields);

                course_map.insert(
                    String::from("course_id"),
                    Value::String(title_fields[0].to_string()),
                );
                course_map.insert(
                    String::from("course_title"),
                    Value::String(
                        title_fields[1..(title_fields.len() - 1)]
                            .join("")
                            .to_string(),
                    ),
                );
                course_map.insert(
                    String::from("course_ch"),
                    Value::Number(Number::from(
                        u8::from_str_radix(title_fields.pop().unwrap().get(0..1).unwrap(), 10)
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

                // println!("{:?}", course_map);
                course_data_vec.push(Value::Object(course_map));
            }
        }
    }

    // println!("{:?}", department_pages);

    // Always explicitly close the browser.
    driver.quit().await?;

    Ok(Json(Value::Array(course_data_vec)))
}
