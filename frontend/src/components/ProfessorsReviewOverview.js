import "../style/ReviewOverview.css"
import Navbar from "./navbar.js"
import { useEffect, useState } from "react"
import PreviewCard from "./PreviewCard"
import data from "../sampleProfData"
import ClassProfessorFilter from "./ClassProfessorFilter"

export default function ProffessorsReviewOverview() {
    const [ department, setDepartment ] = useState();
    const [ ratingCategory, setRatingCategory ] = useState();
    const [ ratingRange, setRatingRange ] = useState();

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
                <h1>Proffessors</h1>
                <div className="main">
                    <ClassProfessorFilter 
                        setDepartment={setDepartment} 
                        setRatingCategory={setRatingCategory} 
                        setRatingRange={setRatingRange} 
                    />
                    <div className="previews">
                        {getPreviewCards()}  
                    </div>
                </div>
            </div>
        </>
        
    );
}