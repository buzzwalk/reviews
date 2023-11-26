import "../../style/ReviewOverview.css"
import { useState, useEffect } from "react";
import PreviewCard from "../PreviewCard"
import data from "../../sampleProfData"
import ApartmentFilter from "../filters/ApartmentFilter"
import { collection } from "firebase/firestore";
import db from "../../firebase";
import Navbar from "../navbar";
import { getPreviewCards, fetchData, fetchOverview} from "../helpers";
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

    const [options, setOptions] = useState({
        ratingCategory: "overall",
        ratingRange: [0, 5],
        beds: [0, 10],
        baths: [0, 10],
        priceRange: [0, 10000],
        amenities: []
    });
    
    return (
        <>
            <Navbar />   
            <div className="reviewoverview">
                <h1>Apartments</h1>
                <div className="main">
                    <ApartmentFilter options={ options } setOptions={ setOptions } />
                    <div className="previews">
                        {getPreviewCards(previewCards, handleDormSelect)}
                    </div>
                </div>
                
            </div>
        </>
        
    );
}

