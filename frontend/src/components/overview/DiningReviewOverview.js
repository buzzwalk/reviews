import { useState, useEffect } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import {db} from "../../firebase";
import Navbar from "../navbar";
import { getPreviewCards, fetchOverview } from "../helpers";
import { useNavigate } from "react-router-dom";
import DiningFilter from "../filters/DiningFilter";

import {Box} from "@chakra-ui/react"

const diningHallsRef = collection(db, "DiningHalls");

export default function DiningHallReviewOverview() {
    const [previewCards, setPreviewCards] = useState([]);
    const navigate = useNavigate();
    const [options, setOptions] = useState({
        filter: "name",
        ratingRange: [1, 5],
    });

    useEffect(() => {
        queryDorms();
    }, [options]);

    async function queryDorms() {
        var q;
        if (options.filter == "overallRating") {
            console.log("hereasdgggggg")
            q = query(diningHallsRef, orderBy("overallRating", "desc"));
        } else if (options.filter == "overallRatingdesc") {
            q = query(diningHallsRef, orderBy("overallRating"));
        } else {
            console.log("hereasd")
            q = query(diningHallsRef, orderBy("name"));
        }
        
        const querySnapshot = await getDocs(q)
        console.log(q)
        const reviews = querySnapshot.docs.map((doc) => ({
            name: doc.data().name == null ? doc.id : doc.data().name,
            address: doc.data().address,
            overallRating: doc.data().overallRating,
            desc: doc.data().desc
        }));
        setPreviewCards(reviews)
    }

    const handleDiningHallSelect = (diningHall) => {
        navigate('/dininghallreviews', { state: { diningHall }});
    };

    return (
        <>
            <Navbar />
            <Box className="reviewoverview" style={{padding: "2em"}}>
                <h1 className="overview-header">Dining Halls</h1>
                <div className="main" style={{marginTop: "2em"}}>
                    <DiningFilter options={ options } setOptions={ setOptions } />
                    <div className="previews">
                        {getPreviewCards(previewCards, handleDiningHallSelect)}
                    </div>
                </div>
            </Box>
        </>
    );
}
