import "../style/ReviewOverview.css"
import Navbar from "./navbar.js"
import { useEffect } from "react"
import PreviewCard from "./PreviewCard"
import data from "../sampleDiningData"
export default function DiningReviewOverview() {

    function getPreviewCards() {
        const dataArr = data.data;
        
        return dataArr.map((e) =>
            <PreviewCard key={e.name} name={e.name} subheading={e.address} rating={e.rating}/>
        );
    }

    return (
        <>
            <Navbar />   
            <div className="reviewoverview">
                <h1>Dining Halls</h1>
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
    );
}