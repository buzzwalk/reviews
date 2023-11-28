import "../style/PreviewCard.css"
import star from "../images/Star.png"
import { Box } from "@chakra-ui/react"
export default function PreviewCard(props) {
    let rating = props.rating != null ? (Math.round(props.rating * 10) /10).toFixed(1) : "NA";
    return (
        // <a href={"/" + props.name.replace(/\s/g, '')}>
            <Box style={{border: "1px solid #54585A",
            backgroundColor: "#333333",
            borderRadius: "10px",
            width: "450px",
            height: "250px",
            paddingBottom: "2em",
            display:"flex",
            justifyContent: "space-between",
            margin:"7px",
        ...props.style}}
            onClick={props.onClick}
            className="PreviewCard">
                    <div className="TextWrapper">
                        <h2>{props.name}</h2>
                        <h3>{props.subheading}</h3>
                        <h3 className="text">{props.text}</h3>
                    </div>
                    <div className="ScoreWrapper">
                        <img src={star}/>
                        <p>{rating}</p>
                    </div>
            </Box>
        // </a>
    )
}