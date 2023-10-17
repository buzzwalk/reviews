import React from 'react'
import "./Textbox.css"
import logo from "./Gt-seal.png"
const CommentComponent = () => {
    return (
        <>
        {Comment /* <img className = "buzzlogo" src = "https://news.gatech.edu/sites/default/files/hg_media/tower_green.jpg"/> */}
        <center> <h1 className = "header"> BUZZPORT COMMENTS </h1> </center>
        {/*Comment <img className = "logo" src = {logo} />*/}

        <div className = "division">
            <form>
                <textarea rows = "4" cols = "50" placeholder = "Enter Your Comment...">
                </textarea>
            </form>    
        </div>

        <div className = "division">
            <form action = "#" method = "post">  
            <label>
                <input className = "submit" value= "Submit"/>
            </label>  
            </form>
        </div>

        <div className = "division">
            <img className = "logo" src = {logo} />
            {/*<img className = "buzzlogo" src = "https://ramblinwreck.com/imgproxy/wEpLPwno24G0Klmjfv9DNLGJIKhXoFgc24UbKDjmXb0/fit/2500/2500/ce/0/aHR0cHM6Ly9yYW1ibGlud3JlY2suY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIzLzA1L0J1enpPbldoaXRlLmpwZw.jpg" /> */}
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

export default CommentComponent