import { useState, useEffect } from "react";
import { collection } from "firebase/firestore";
import db from "../../firebase";
import Navbar from "../navbar";
import { getPreviewCards, fetchOverview } from "../helpers";
import { useNavigate } from "react-router-dom";

const diningHallsRef = collection(db, "DiningHalls");

export default function DiningHallReviewOverview() {
    const [previewCards, setPreviewCards] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchOverview(diningHallsRef, setPreviewCards);
    }, []);

    const handleDiningHallSelect = (diningHall) => {
        navigate('/dininghallreviews', { state: { diningHall }});
    };

    return (
        <>
            <Navbar />
            <div className="reviewoverview">
                <h1>Dining Halls</h1>
                <div className="main">
                    <div className="filters">
                        <h3>Filters</h3>
                        <p>filters here</p>
                    </div>
                    <div className="previews">
                        {getPreviewCards(previewCards, handleDiningHallSelect)}
                    </div>
                </div>
            </div>
        </>
    );
}
