import "../style/ReviewOverview.css"
import Navbar from "./navbar.js"
import { useEffect, useState } from "react"
import PreviewCard from "./PreviewCard"
import data from "../sampleDiningData"
import ClassProfessorFilter from "./ClassProfessorFilter"

export default function DiningReviewOverview() {
    const [ department, setDepartment ] = useState();
    const [ ratingCategory, setRatingCategory ] = useState();
    const [ ratingRange, setRatingRange ] = useState();

    function getPreviewCards() {
        const dataArr = data.data;
        return dataArr.map((e) => (<PreviewCard key={e.name} name={e.name} subheading={e.address} rating={e.rating}/>));
    }

    return (
        <>
            <Navbar />   
            <div className="reviewoverview">
                <h1>Dining Halls</h1>
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