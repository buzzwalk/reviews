# Server
Server for GT Reviews.

## Setup
1. Install [geckodriver](https://github.com/mozilla/geckodriver); then start it
2. Create a `.env` file; inside it, set `FIREBASE_URL` to the URL of the database; for example,
    ```sh
    FIREBASE_URL="https://firestore.googleapis.com/v1/projects/test-gt-reviews/databases/(default)"
    ```
3. `cargo r` to push all professors to `Professors` collection and all courses to `Classes` collection, as well as run the server that provides wrappers to Course Critique APIs
