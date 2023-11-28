import { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import {db} from "../../firebase";
import Navbar from "../navbar";
import { fetchDormReviews, getPreviewCardsInfo } from "../helpers";
import { useLocation } from 'react-router-dom';

import {
    Box,
    Text,
    Flex,
    Spinner
} from "@chakra-ui/react"

export default function ViewProfessorReviewInfo({ prof }) { 
    const [previewCardsInfo, setPreviewCardsInfo] = useState([]);
    const location = useLocation();
    const [profData, setProfData] = useState([]);
    const profLoc = location.state.prof;

    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        
        const fetchProfData = async () => {
            
            try {
                const currProfRef = doc(db, "Professors", profLoc);
                const docSnap = await getDoc(currProfRef);
                if (docSnap.exists()) {
                    setProfData(docSnap);
                
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching prof data: ", error);
            }
        };
        fetchProfData();

        const profRef = collection(db, "Professors", profLoc, "Reviews");
        fetchDormReviews(profRef, setPreviewCardsInfo).then(() => {
            setLoaded(true)
        })

    }, [prof]);

    const [averageRating, setAverageRating] = useState(5);
    
    useEffect(() => {
        if (previewCardsInfo.length == 0) {
            return;
        }

        let total = 0
        for (const review of previewCardsInfo) {
            total += review.rating
        }
        total /= previewCardsInfo.length

        setAverageRating(total)
    }, [previewCardsInfo])


    return (
        <>
            <Navbar />
            <Box className="reviewoverview" style={{padding: "2em"}}>
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
                        padding: "1em 5em",
                        height: "80vh",
                        width: "50%"
                    }}>
                        <h1>{profData.id}</h1>
                        <Text style={{
                            marginTop: "2em"
                        }}>Average rating: {averageRating}</Text>
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
            </Box>

        </>
    );
}
