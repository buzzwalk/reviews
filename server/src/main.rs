use axum::{routing::post, Router};

mod firebase;
mod routes;
mod scraper;

use routes::{get_course_gpa, get_professor_gpa, get_professor_or_course};

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    // load env vars
    dotenv::dotenv().ok();
    // let scraped_courses = scrape_course_catalog().await?;
    firebase::push_classes_and_professors_to_firebase().await?;
    let app = Router::new()
        // Wrappers around Course Critique (critique.gatech.edu) API.
        .route("/critique/course", post(get_course_gpa))
        .route("/critique/professor", post(get_professor_gpa))
        .route("/critique/search", post(get_professor_or_course));

    axum::Server::bind(&"127.0.0.1:3000".parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
    Ok(())
}
