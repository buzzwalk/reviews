export default function ReviewCard(props){
    return (    
        <div className="ReviewCard">
            
                <div className="TextWrapper">
                    <h2>{props.name}</h2>
                    <h3>{props.subheading}</h3>
                </div>
                <div className="ScoreWrapper">
                    <img src={star}/>
                    <p>{props.rating}</p>
                </div>
        </div>
    )
}