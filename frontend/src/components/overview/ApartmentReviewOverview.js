import "../../style/ReviewOverview.css"
import { useState, useEffect } from "react";
import PreviewCard from "../PreviewCard"
import data from "../../sampleProfData"
import ApartmentFilter from "../filters/ApartmentFilter"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import {db} from "../../firebase";
import Navbar from "../navbar";
import { getPreviewCards, fetchData, fetchOverview} from "../helpers";
import { useNavigate } from "react-router-dom";

import {
    Box
} from "@chakra-ui/react"


const dormsRef = collection(db, "Dorms");

export default function ApartmentReviewOverview() {
    const [previewCards, setPreviewCards] = useState([]);
    const [options, setOptions] = useState({
        filter: "name",
        ratingRange: [1, 5],
        beds: [0, 10],
        baths: [0, 10],
        priceRange: [0, 10000],
        amenities: []
    });
    const navigate = useNavigate();
    async function queryDorms() {
        var q;
        if (options.filter == "overallRating") {
            console.log("hereasdgggggg")
            q = query(dormsRef, orderBy("overallRating", "desc"), where("overallRating", ">=", `${options.ratingRange[0]}`), where("overallRating", "<=", `${options.ratingRange[1]}`));
        } else if (options.filter == "overallRatingdesc") {
            q = query(dormsRef, orderBy("overallRating"), where("overallRating", ">=", `${options.ratingRange[0]}`), where("overallRating", "<=", `${options.ratingRange[1]}`));
        } else {
            console.log("hereasd")
            q = query(dormsRef, orderBy("name"));
        }
        
        const querySnapshot = await getDocs(q)
        const reviews = querySnapshot.docs.map((doc) => ({
            name: doc.data().name == null ? doc.id : doc.data().name,
            address: doc.data().address,
            overallRating: doc.data().overallRating,
            desc: doc.data().desc
        }));
        setPreviewCards(reviews)
    }
    
    useEffect(() => {
        queryDorms();
        
    }, [options]);

    const handleDormSelect = (dorm) => {
        navigate('/dormreviews', { state: { dorm }});
    };

    
    
    return (
        <>
            <Navbar />   
            <Box className="reviewoverview" style={{padding: "2em"}}>
                <h1>Housing</h1>
                <div className="main" style={{marginTop: "1em"}}>
                    <ApartmentFilter options={ options } setOptions={ setOptions } />
                    <div className="previews">
                        {getPreviewCards(previewCards, handleDormSelect)}
                    </div>
                </div>
                
            </Box>
        </>
        
    );
}

