import { useState, useEffect } from "react";
import { collection } from "firebase/firestore";
import db from "../firebase";
import Navbar from "./navbar";
import { getPreviewCards, fetchData } from "./helpers";
import DiningFilter from "./DiningFilter";

const diningHallsRef = collection(db, "DiningHalls");

export default function DiningHallReviewOverview() {
    const [previewCards, setPreviewCards] = useState([]);

    const [ options, setOptions ] = useState({
        ratingCategory: "overall",
        ratingRange: [0, 5],
        foodServed: []
    })
    
    useEffect(() => {
        fetchData(diningHallsRef, setPreviewCards);
    }, []);

    return (
        <>
            <Navbar />
            <div className="reviewoverview">
                <h1>Dining Halls</h1>
                <div className="main">
                    <DiningFilter options={options} setOptions={setOptions} />
                    <div className="previews">
                        {getPreviewCards(previewCards)}
                    </div>
                </div>
            </div>
        </>
    );
}
