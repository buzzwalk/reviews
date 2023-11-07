import "../style/ReviewOverview.css"
import Navbar from "./navbar.js"
import { useEffect, useState } from "react"
import PreviewCard from "./PreviewCard"
import data from "../sampleClassData"
export default function ClassesReviewOverview() {
    const [ options, setOptions ] = setState({
        department: "all",
        ratingCategory: "overall",
        ratingRange: [0, 5],
        averageGpa: [0, 4]
    });

    function getPreviewCards() {
        const dataArr = data.data;
        return dataArr.map((e) =>
            <PreviewCard name={e.name} subheading={e.fullname} rating={e.rating}/>
        );
    }

    /* 
        ratingCategory -> dropdown
        ratingRange -> slider
        foodServed -> checkbox group
    */
    
    return (
        <>
            <Navbar />   
            <div className="reviewoverview">
                <h1>Classes</h1>
                <div className="main">
                    <ClassProfessorFilter options={options} setOptions={setOptions} />
                    <div className="previews">
                        {getPreviewCards()}  
                    </div>
                </div> 
            </div>
        </>
    );
}