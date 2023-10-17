import React from 'react'
import "./Textbox.css"
import logo from "./Gt-seal.png"
export default function CommentComponent() {
    return (
        <>
            <div className='troll'>
                <h1 className = "header"> BUZZPORT COMMENTS </h1> 
            </div>
            

            <div className = "division">
                <form>
                    <textarea rows = "4" cols = "50" placeholder = "Enter Your Comment..."></textarea>
                    <br></br>
                    <button className = "submit"> Submit </button>
                </form>    
            </div>

            <div className = "division">
                <img className = "logo" src = {logo} />
            </div>

            <div>
                <footer id = "footer"> 
                All information submitted can and will be used against you in a court of law. 
                God Bless the Georgia Institute of Technology.
                </footer>
            </div>

        </>
    );
}