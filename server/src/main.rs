use axum::{routing::get, routing::post, Router};

mod routes;

use routes::{get_course_gpa, get_professor_gpa, get_professor_or_course};

#[tokio::main]
async fn main() {
    let app = Router::new()
        // Wrappers around Course Critique (critique.gatech.edu) API.
        .route("/critique/course", post(get_course_gpa))
        .route("/critique/professor", post(get_professor_gpa))
        .route("/critique/search", post(get_professor_or_course));

    axum::Server::bind(&"127.0.0.1:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}

