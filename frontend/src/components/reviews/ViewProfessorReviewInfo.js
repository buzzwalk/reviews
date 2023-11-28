import { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import db from "../../firebase";
import Navbar from "../navbar";
import { fetchDormReviews, getPreviewCardsInfo } from "../helpers";
import { useLocation } from 'react-router-dom';

export default function ViewProfessorReviewInfo({ prof }) { 
    const [previewCardsInfo, setPreviewCardsInfo] = useState([]);
    const location = useLocation();
    const [profData, setProfData] = useState([]);
    const profLoc = location.state.prof;
    
    useEffect(() => {
        
        const fetchProfData = async () => {
            
            try {
                const currProfRef = doc(db, "Professors", profLoc);
                const docSnap = await getDoc(currProfRef);
                if (docSnap.exists()) {
                    setProfData(docSnap);
                
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching prof data: ", error);
            }
        };
        fetchProfData();

        const profRef = collection(db, "Professors", profLoc, "Reviews");
        fetchDormReviews(profRef, setPreviewCardsInfo)

        console.log(profData.id)
    }, [prof]);

    return (
        <>
            <Navbar />
            <div className="reviewoverview" style={{padding: "2em"}}>
                <h1>{profData.id}</h1>
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
