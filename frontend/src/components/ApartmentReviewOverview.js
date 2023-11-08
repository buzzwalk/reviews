import { useState, useEffect } from "react";
import { collection } from "firebase/firestore";
import db from "../firebase";
import Navbar from "./navbar";
import { getPreviewCards, fetchOverview } from "./helpers";
import { useNavigate } from "react-router-dom";

const dormsRef = collection(db, "Dorms");

export default function ApartmentReviewOverview() {
    const [previewCards, setPreviewCards] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {
        fetchOverview(dormsRef, setPreviewCards);
    }, []);

    const handleDormSelect = (dorm) => {
        navigate('/dormreviews', { state: { dorm }});
    };

    return (
        <>
            <Navbar />
            <div className="reviewoverview">
                <h1>Apartments</h1>
                <div className="main">
                    <div className="filters">
                        <h3>Filters</h3>
                        <p>filters here</p>
                    </div>
                    <div className="previews">
                        {getPreviewCards(previewCards, handleDormSelect)}
                    </div>
                </div>
            </div>
        </>
    );
}

