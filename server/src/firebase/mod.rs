use crate::scraper::{scrape_course_catalog, scrape_professor_names};
use axum::Json;
use serde_json::{json, Value};

// GET DOCUMENT
// GET "https://firestore.googleapis.com/v1/projects/test-gt-reviews/databases/(default)/documents/Classes/CLASS_ID"
//
// CREATE DOCUMENT
// POST "https://firestore.googleapis.com/v1/projects/test-gt-reviews/databases/(default)/documents/Classes?documentId="NEW_CLASS""


pub async fn push_classes_and_professors_to_firebase() -> Result<(), Box<dyn std::error::Error>> {
    let firebase_url = std::env::var("FIREBASE_URL").unwrap();
    let client = reqwest::Client::new();
    let scraped_courses = scrape_course_catalog().await?;
    if let Json(Value::Array(course_list)) = scraped_courses {
        for course in course_list {
            if let Value::Object(course) = course {
                let name = course.get("course_id").unwrap().as_str().unwrap();
                let title = course.get("course_title").unwrap().as_str().unwrap();
                let desc = course.get("course_desc").unwrap().as_str().unwrap();
                let ch = course.get("course_ch").unwrap().as_f64().unwrap();
                client
                    .post(format!("{}/documents/Classes?documentId={}", firebase_url, name))
                    .json(&json!(
                        {
                            "fields": {
                                "title": {
                                    "stringValue": title,
                                },
                                "desc": {
                                    "stringValue": desc,
                                },
                                "ch": {
                                    "doubleValue": ch,
                                },
                            }
                        }
                    ))
                    .send()
                    .await?;
            }
        }
    }
    let scraped_professors = scrape_professor_names().await?;
    if let Json(Value::Array(professors_list)) = scraped_professors {
        for professor in professors_list {
            if let Value::String(professor_name) = professor {
                client
                    .post(format!("{}/documents/Professors?documentId={}", firebase_url, professor_name))
                    .json(&json!(
                        {
                            "fields": {
                                "name": {
                                    "stringValue": professor_name,
                                },
                            }
                        }
                    ))
                    .send()
                    .await?;
            }
        }
    }
    Ok(())
}
