import { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import Navbar from "../navbar";
import { fetchDormReviews, getPreviewCardsInfo } from "../helpers";
import { useLocation } from 'react-router-dom';

export default function ViewClassesReviewInfo({ classes }) { //singular classes but "class" is reserved word
    const [previewCardsInfo, setPreviewCardsInfo] = useState([]);
    const location = useLocation();
    const [classData, setClassData] = useState([]);
    const classLoc = location.state.classes;
    
    useEffect(() => {
        
        const fetchClassData = async () => {
            
            try {
                const currClassRef = doc(db, "Classes", classLoc);
                const docSnap = await getDoc(currClassRef);
                if (docSnap.exists()) {
                    setClassData(docSnap);
                
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching class data: ", error);
            }
        };
        fetchClassData();

        const classRef = collection(db, "Classes", classLoc, "Reviews");
        fetchDormReviews(classRef, setPreviewCardsInfo)

        console.log(classData.id)
    }, [classes]);

    return (
        <>
            <Navbar />
            <div className="reviewoverview">
                <h1>{classData.id}</h1>
                {/* <h1>{dormData.address}</h1>
                <h1>{dormData.bathrooms}</h1>
                <h1>{dormData.elevator}</h1>
                <h1>{dormData.laundry}</h1>
                <h1>{dormData.numReviews}</h1>
                <h1>{dormData.overallRating}</h1>
                <h1>{dormData.squareFootage}</h1> */}
                <div className="main">
                    <div className="filters">
                        <h3>Filters</h3>
                        <p>filters here</p>
                    </div>
                    <div className="previews">
                        {getPreviewCardsInfo(previewCardsInfo)}
                    </div>
                </div>
            </div>
        </>
    );
}
