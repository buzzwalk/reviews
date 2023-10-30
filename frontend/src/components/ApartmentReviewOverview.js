import "../style/ReviewOverview.css"
import Navbar from "./navbar.js"
import { useEffect } from "react"
import PreviewCard from "./PreviewCard"
import data from "../sampleProfData"
import ApartmentFilter from "./ApartmentFilter"
export default function ApartmentReviewOverview() {

    function getPreviewCards() {
        const dataArr = data.data;
        return dataArr.map((e) =>
            <PreviewCard key={e.name} name={e.name} subheading={e.college} rating={e.rating}/>
        );
    }
    
    return (
        <>
            <Navbar />   
            <div className="reviewoverview">
                <h1>Apartments</h1>
                <div className="main">
                    <ApartmentFilter />
                    <div className="previews">
                        {getPreviewCards()}  
                    </div>
                </div>
                
            </div>
        </>
        
    );
}