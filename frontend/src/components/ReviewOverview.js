import "../style/ReviewOverview.css"
import Navbar from "./navbar.js"
import data from "../sampleProfData"
import { useEffect } from "react"
import PreviewCard from "./PreviewCard"
export default function ReviewOverview({name}) {

    function getPreviewCards(){
        const dataArr = data.data;
        return dataArr.map((e) =>
        <PreviewCard name={e.name} college={e.college} rating={e.rating}/>
        )
    }
    return(
        <>
        <Navbar />   
        <div className="reviewoverview">
            <h1>{name}</h1>
            <div className="main">
                
                <div className="filters">
                    <h3>Filters</h3>
                    <p>filters here</p>
                </div>
                <div className="previews">
                    {getPreviewCards()}  
                </div>
            </div>
            
        </div>
        </>
        
    )
}