import React from 'react'
import "./Textbox.css"
import logo from "../images/Gt-seal.png"
import { useState } from "react"
import db from "../firebase"
import { setDoc, doc } from "firebase/firestore"; 

function CommentComponent() {

    const [formData, setFormData] = useState({
        comment: '',

    });
    
    function handleSubmit(e) {
        e.preventDefault()

        const docRef = setDoc(doc(db, "DiningHalls", "Willage", "Reviews", "Comment"), {
            comment: formData.comment
        });
    }
    
    return (
        <>
        <center> <h1 className = "header"> BUZZWALK COMMENTS </h1> </center>

        <div className = "division">
            <form>
                <textarea rows = "4" cols = "50" placeholder = "Enter Your Comment..." onChange={(e) => setFormData({ comment: e.target.value })}>
                </textarea>
                <label>
                    <button className = "submit" onClick={(e) => handleSubmit(e)}>Submit</button>
                </label> 
            </form>    
        </div>

        <div className = "division">
            <form>  
                 
            </form>
        </div>

        <div className = "division">
            <img className = "logo" src = {logo} />
        </div>

        </>
    )
}

export default CommentComponent