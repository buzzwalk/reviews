import React from 'react'
import "./Textbox.css"
import logo from "./Gt-seal.png"
function CommentComponent() {

    
    return (
        <>
        <center> <h1 className = "header"> BUZZWALK COMMENTS </h1> </center>
        {/*Comment <img className = "logo" src = {logo} />*/}

        <div className = "division">
            <form>
                <textarea rows = "4" cols = "50" placeholder = "Enter Your Comment...">
                </textarea>
            </form>    
        </div>

        <div className = "division">
            <form>  
                <label>
                    <button className = "submit" >Submit</button>
                </label>  
            </form>
        </div>

        <div className = "division">
            <img className = "logo" src = {logo} />
        </div>

        </>
    )
}

export default CommentComponent