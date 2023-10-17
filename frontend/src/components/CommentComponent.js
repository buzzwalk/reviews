import React from 'react'
import "./Textbox.css"
import logo from "./Gt-seal.png"
import { useState } from "react"
function CommentComponent() {
    const [formData, setFormData] = useState("")
    
    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData);
    }
    return (
        <>
        <center> <h1 className = "header"> BUZZWALK COMMENTS </h1> </center>
        {/*Comment <img className = "logo" src = {logo} />*/}

        <div className = "division">
            <form>
                <textarea rows = "4" cols = "50" placeholder = "Enter Your Comment..." onChange={(e) => setFormData(e.target.value)}>
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