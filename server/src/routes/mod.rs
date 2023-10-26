// Routes
// TODO: refactor to use reqwest::Client using axum::extract::State

use axum::{http::StatusCode, response::Json};
use serde_json::{json, Value};

pub async fn get_course_gpa(Json(payload): Json<Value>) -> (StatusCode, Json<Value>) {
    let mut course_gpas = Value::Null;
    let mut status_code = StatusCode::OK;
    if let Value::Object(payload_fields) = payload {
        if let Value::String(course_id) = payload_fields.get("course_id").unwrap() {
            course_gpas = json! {
                reqwest::get(
                    format!("https://c4citk6s9k.execute-api.us-east-1.amazonaws.com/test/data/course?courseID={}", course_id)
                )
                .await.unwrap()
                .json::<Value>()
                .await.unwrap()
            };
        } else {
            status_code = StatusCode::NOT_FOUND;
        }
    }
    (status_code, Json(course_gpas))
}

pub async fn get_professor_gpa(Json(payload): Json<Value>) -> (StatusCode, Json<Value>) {
    let mut professor_gpas = Value::Null;
    let mut status_code = StatusCode::OK;
    if let Value::Object(payload_fields) = payload {
        if let Value::String(professor_name) = payload_fields.get("professor_id").unwrap() {
            professor_gpas = json! {
                reqwest::get(
                    format!("https://c4citk6s9k.execute-api.us-east-1.amazonaws.com/test/data/prof?profID={}&by=section", professor_name)
                )
                .await.unwrap()
                .json::<Value>()
                .await.unwrap()
            };
        } else {
            status_code = StatusCode::NOT_FOUND;
        }
    }
    (status_code, Json(professor_gpas))
}

pub async fn get_professor_or_course(Json(payload): Json<Value>) -> (StatusCode, Json<Value>) {
    let mut response = Value::Null;
    let mut status_code = StatusCode::NOT_FOUND;
    if let Value::Object(payload_fields) = payload {
        if let Value::String(query) = payload_fields.get("query").unwrap() {
            response = json! {
                reqwest::get(
                    format!("https://c4citk6s9k.execute-api.us-east-1.amazonaws.com/test/elastic?q={}", query)
                )
                .await.unwrap()
                .json::<Value>()
                .await.unwrap()
            };
        } else {
            status_code = StatusCode::NOT_FOUND;
        }
    }
    (status_code, Json(response))
}
