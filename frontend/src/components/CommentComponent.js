import React, { useState } from 'react';
import "./Textbox.css";
import logo from "../images/Gt-seal.png";
import { doc, setDoc } from "firebase/firestore";
import db from "../firebase";

function CommentComponent() {
    const [formData, setFormData] = useState({
        comment: ''
    });

    function handleSubmit(e) {
        e.preventDefault();

        const docRef = setDoc(doc(db, "DiningHalls", "Willage", "Reviews", "Comment"), {
            comment: formData.comment
        })
            .then(() => {
                console.log("Comment successfully added to Firebase!");
            })
            .catch((error) => {
                console.error("Error adding comment to Firebase: ", error);
            });
    }

    return (
        <>
            <center> <h1 className="header"> BUZZWALK COMMENTS </h1> </center>

            <div className="division">
                <form>
                    <textarea
                        rows="4"
                        cols="50"
                        placeholder="Enter Your Comment..."
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    />
                    <label>
                        <button className="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
                    </label>
                </form>
            </div>

            <div className="division">
                <form>

                </form>
            </div>

            <div className="division">
                <img className="logo" src={logo} alt="Logo" />
            </div>
        </>
    );
}

export default CommentComponent;
