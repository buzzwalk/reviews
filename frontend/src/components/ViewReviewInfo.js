import { useState, useEffect } from "react";
import { collection } from "firebase/firestore";
import db from "../firebase";
import Navbar from "./navbar";
import { fetchDiningHallReviews, getPreviewCardsInfo } from "./helpers";
import { useLocation } from 'react-router-dom';

export default function ViewReviewInfo({ diningHall }) {
    const [previewCardsInfo, setPreviewCardsInfo] = useState([]);
    const location = useLocation();
    const diningHallLoc = location.state.diningHall;
    
    function formatDiningHall(diningHallLoc) {
        if (diningHallLoc == "Brittain Dining Hall") {
            return "Brittain"
        } else if (diningHallLoc == "North Avenue Dining Hall") {
            return "Nav"
        } else if (diningHallLoc == "West Village") {
            return "Willage"
        } 
    }

    useEffect(() => {
        const diningHallsRef = collection(db, "DiningHalls", formatDiningHall(diningHallLoc), "Reviews");
        fetchDiningHallReviews(diningHallsRef, setPreviewCardsInfo)
    }, [diningHall]);

    return (
        <>
            <Navbar />
            <div className="reviewoverview">
                <h1>Reviews</h1>
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
