import "../../style/ReviewOverview.css"
import Navbar from "../navbar.js"
import { useEffect, useState } from "react"
import PreviewCard from "../PreviewCard.js"
import data from "../../sampleProfData.js"
import ClassProfessorFilter from "../filters/ClassProfessorFilter.js"

export default function ProfessorsReviewOverview() {

    const [ options, setOptions ] = useState({
        department: "all",
        ratingCategory: "overall",
        ratingRange: [0, 5]
    })

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
                <h1>Professors</h1>
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