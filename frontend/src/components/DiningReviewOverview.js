import { useState, useEffect } from "react";
import { collection } from "firebase/firestore";
import db from "../firebase";
import Navbar from "./navbar";
import { getPreviewCards, fetchData } from "./helpers";

const diningHallsRef = collection(db, "DiningHalls");

export default function DiningHallReviewOverview() {
    const [previewCards, setPreviewCards] = useState([]);
    
    useEffect(() => {
        fetchData(diningHallsRef, setPreviewCards);
    }, []);

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
                        {getPreviewCards(previewCards)}
                    </div>
                </div>
            </div>
        </>
    );
}
