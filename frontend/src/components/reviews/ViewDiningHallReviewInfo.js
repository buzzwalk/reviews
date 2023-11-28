import { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import {db} from "../../firebase";
import Navbar from "../navbar";
import { fetchDiningHallReviews, getPreviewCardsInfo } from "../helpers";
import { useLocation } from 'react-router-dom';

import { Spinner } from "@chakra-ui/react"

export default function ViewDiningHallReviewInfo({ diningHall }) {
    const [previewCardsInfo, setPreviewCardsInfo] = useState([]);
    const location = useLocation();
    const [diningHallData, setDiningHallData] = useState([]);
    const diningHallLoc = location.state.diningHall;
    
    const [loaded, setLoaded] = useState(false)
    
    function formatDiningHall(diningHallLoc) {
        if (diningHallLoc == "Brittain Dining Hall") {
            return "Brittain"
        } else if (diningHallLoc == "North Avenue Dining Hall") {
            return "Nav"
        } else if (diningHallLoc == "West Village") {
            return "Willage"
        } else {
            console.log(diningHallLoc)
            return diningHallLoc
        }
    }

    useEffect(() => {
        const fetchDiningHallData = async () => {
            try {
                const currDiningHallRef = doc(db, "DiningHalls", formatDiningHall(diningHallLoc));
                const docSnap = await getDoc(currDiningHallRef);
                if (docSnap.exists()) {
                    setDiningHallData(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching dorm data: ", error);
            }
        };
        fetchDiningHallData();

        const diningHallsRef = collection(db, "DiningHalls", formatDiningHall(diningHallLoc), "Reviews");
        fetchDiningHallReviews(diningHallsRef, setPreviewCardsInfo).then(() => {
            setLoaded(true)
        })
    }, [diningHall]);

    return (
        <>
            <Navbar />
            <div className="reviewoverview" style={{padding: "2em"}}>
                
                {!loaded && <div style={{
                    width: "100%",
                    textAlign: "center"
                }}>
                    <Spinner/>
                </div>}

                {loaded && (
                    <>
                        <h1>{diningHallData.name}</h1>
                        {/* <h1>{diningHallData.address}</h1>
                        <h1>{diningHallData.numberChairs}</h1>
                        <h1>{diningHallData.numberReviews}</h1>
                        <h1>{diningHallData.overallRating}</h1>
                        <h1>{diningHallData.squareFootage}</h1> */}
                        <div className="main">
                            <div className="previews">
                                {getPreviewCardsInfo(previewCardsInfo)}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
