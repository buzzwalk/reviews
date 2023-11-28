import { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import {db} from "../../firebase";
import Navbar from "../navbar";
import { fetchDiningHallReviews, getPreviewCardsInfo } from "../helpers";
import { useLocation } from 'react-router-dom';

import { Spinner, Flex, Box, Text, Heading } from "@chakra-ui/react"

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

    const [averageRating, setAverageRating] = useState(5);
    
    useEffect(() => {
        let total = 0
        for (const review of previewCardsInfo) {
            total += review.rating
        }
        total /= previewCardsInfo.length

        setAverageRating(Math.round(total*100)/100)
    }, [previewCardsInfo])

    console.log(diningHallData)

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
                <Flex
                    flexDirection="row"
                    style={{
                    }}
                >
                    <Box style={{
                        border: "1px solid #54585A",
                        backgroundColor: "#333333",
                        borderRadius: "10px",
                        padding: "2em",
                        height: "80vh",
                        width: "35%"
                    }}>
                        <Heading size="3xl" as="h1">{diningHallData.name}</Heading>
                        <Text style={{
                            marginTop: "2em",
                            color: "#959595"
                        }}>Average rating: {averageRating}</Text>

                        <Text style={{
                            marginTop: "1em",
                            color: "#959595"
                        }}>Number of chairs: {diningHallData.numberChairs}</Text>

                        <Text style={{
                            marginTop: "1em",
                            color: "#959595"
                        }}>Square footage: {diningHallData.squareFootage}</Text>
                    </Box>
                    <Box style={{paddingLeft: "2em"}}>
                        {previewCardsInfo.length == 0 && <Text>
                            No reviews yet
                        </Text>}
                        {previewCardsInfo.length != 0 &&
                        <div className="previews" style={{marginLeft: "-7px"}}>
                            {getPreviewCardsInfo(previewCardsInfo)}
                        </div>
                        }
                    </Box>
                </Flex>
                )}
            </div>
        </>
    );
}
