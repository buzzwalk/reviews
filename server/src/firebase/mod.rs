use crate::scraper::scrape_course_catalog;
use axum::Json;
use serde::{Deserialize, Serialize};
use serde_json::{json, Value};

// GET DOCUMENT
// GET "https://firestore.googleapis.com/v1/projects/test-gt-reviews/databases/(default)/documents/Classes/CLASS_ID"
//
// CREATE DOCUMENT
// POST "https://firestore.googleapis.com/v1/projects/test-gt-reviews/databases/(default)/documents/Classes?documentId="NEW_CLASS""

const FIREBASE_URL: &str = "https://firestore.googleapis.com/v1/projects/test-gt-reviews/databases/(default)/documents/Classes";

#[derive(Debug, Serialize, Deserialize)]
struct Class {
    name: String,
    title: String,
    desc: String,
    ch: f64,
}

pub async fn push_classes_to_firebase() -> Result<(), Box<dyn std::error::Error>> {
    let client = reqwest::Client::new();
    client
        .post(format!(
            "{}?documentId={}",
            FIREBASE_URL, "NEWCLASSFROMRUST"
        ))
        .json(&json!(
            {
                "fields": {
                    "test_field": {
                        "stringValue": "asdfasdf"
                    }
                }
            }
        ))
        .send()
        .await?;
    let scraped_courses = scrape_course_catalog().await?;
    if let Json(Value::Array(course_list)) = scraped_courses {
        for course in course_list {
            if let Value::Object(course) = course {
                let name = course.get("course_id").unwrap().as_str().unwrap();
                let title = course.get("course_title").unwrap().as_str().unwrap();
                let desc = course.get("course_desc").unwrap().as_str().unwrap();
                let ch = course.get("course_ch").unwrap().as_f64().unwrap();
                client
                    .post(format!("{}?documentId={}", FIREBASE_URL, name))
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
    Ok(())
}
