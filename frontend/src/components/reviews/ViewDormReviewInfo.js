import { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import {db} from "../../firebase";
import Navbar from "../navbar";
import { fetchDormReviews, getPreviewCardsInfo } from "../helpers";
import { useLocation } from 'react-router-dom';

export default function ViewDormReviewInfo({ dorm }) {
    const [previewCardsInfo, setPreviewCardsInfo] = useState([]);
    const location = useLocation();
    const [dormData, setDormData] = useState([]);
    const dormLoc = location.state.dorm;

    useEffect(() => {
        const fetchDormData = async () => {
            try {
                const currDormRef = doc(db, "Dorms", dormLoc);
                const docSnap = await getDoc(currDormRef);
                if (docSnap.exists()) {
                    setDormData(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching dorm data: ", error);
            }
        };
        fetchDormData();

        const dormsRef = collection(db, "Dorms", dormLoc, "Reviews");
        fetchDormReviews(dormsRef, setPreviewCardsInfo)
    }, [dorm]);

    return (
        <>
            <Navbar />
            <div className="reviewoverview" style={{padding: "2em"}}>
                <h1>{dormData.name}</h1>
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
