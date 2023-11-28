import { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import {db} from "../../firebase";
import Navbar from "../navbar";
import { fetchDormReviews, getPreviewCardsInfo } from "../helpers";
import { useLocation } from 'react-router-dom';

import {Spinner, Text, Flex, Box, Heading} from "@chakra-ui/react"

export default function ViewDormReviewInfo({ dorm }) {
    const [previewCardsInfo, setPreviewCardsInfo] = useState([]);
    const location = useLocation();
    const [dormData, setDormData] = useState([]);
    const dormLoc = location.state.dorm;

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        const fetchDormData = async () => {
            try {
                const currDormRef = doc(db, "Dorms", dormLoc);
                const docSnap = await getDoc(currDormRef);
                if (docSnap.exists()) {
                    setDormData(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching dorm data: ", error);
            }
        };
        fetchDormData();

        const dormsRef = collection(db, "Dorms", dormLoc, "Reviews");
        fetchDormReviews(dormsRef, setPreviewCardsInfo).then(() => {
            setLoaded(true)
        })
    }, [dorm]);

    console.log(dormData)
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
                        <Heading size="3xl" as="h1">{dormData.name}</Heading>
                        
                        
                        <Text style={{
                            marginTop: "2em",
                            color: "#959595"
                        }}>{dormData.address}</Text>

                        <Text style={{
                            marginTop: "1em",
                            color: "#959595"
                        }}>Bathrooms: {dormData.bathrooms}</Text>

                        <Text style={{
                            marginTop: "1em",
                            color: "#959595"
                        }}>Elevators: {dormData.elevator === "true" ? "Yes" : "No"}</Text>

                        <Text style={{
                            marginTop: "1em",
                            color: "#959595"
                        }}>Square footage: {dormData.squareFootage}</Text>
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
