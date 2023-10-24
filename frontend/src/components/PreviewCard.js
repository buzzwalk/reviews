import "../style/PreviewCard.css"
import star from "../images/Star.png"
export default function PreviewCard(props) {
    return (
        <a href={"/" + props.name.replace(/\s/g, '')}>
            <div className="PreviewCard">
                
                    <div className="TextWrapper">
                        <h2>{props.name}</h2>
                        <h3>{props.college}</h3>
                    </div>
                    <div className="ScoreWrapper">
                        <img src={star}/>
                        <p>{props.rating}</p>
                    </div>
                
                
            </div>
        </a>
    )
}