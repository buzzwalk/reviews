use axum::{response::Json, routing::get, Router};

use serde_json::{json, Value};

#[tokio::main]
async fn main() {
    let app = Router::new()
        .route("/course", get(get_course_gpa))
        .route("/professor", get(get_professor_gpa));

    axum::Server::bind(&"127.0.0.1:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}

async fn get_course_gpa(Json(payload): Json<Value>) -> Json<Value> {
    let mut course_gpas = Value::Null;
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
            course_gpas = json!({ "data": 1 });
        }
    }
    Json(course_gpas)
}

async fn get_professor_gpa(Json(payload): Json<Value>) -> Json<Value> {
    let mut professor_gpas = Value::Null;
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
            professor_gpas = json!({ "data": 1 });
        }
    }
    Json(professor_gpas)
}
