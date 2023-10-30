import "../style/ReviewOverview.css"
import Navbar from "./navbar.js"
import { useEffect, useState } from "react"
import PreviewCard from "./PreviewCard"
import data from "../sampleClassData"
export default function ClassesReviewOverview() {
    const [ department, setDepartment ] = useState();
    const [ ratingCategory, setRatingCategory ] = useState();
    const [ ratingRange, setRatingRange ] = useState();

    function getPreviewCards() {
        const dataArr = data.data;
        return dataArr.map((e) =>
            <PreviewCard name={e.name} subheading={e.fullname} rating={e.rating}/>
        );
    }
    
    return (
        <>
            <Navbar />   
            <div className="reviewoverview">
                <h1>Classes</h1>
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