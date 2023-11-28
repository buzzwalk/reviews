import { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import {db} from "../../firebase";
import Navbar from "../navbar";
import { fetchDormReviews, getPreviewCardsInfo } from "../helpers";
import { useLocation } from 'react-router-dom';

import { Box, Spinner, Text, Heading, Flex} from "@chakra-ui/react"

export default function ViewClassesReviewInfo({ classes }) { //singular classes but "class" is reserved word
    const [previewCardsInfo, setPreviewCardsInfo] = useState([]);
    const location = useLocation();
    const [classData, setClassData] = useState([]);
    const classLoc = location.state.classes;

    const [loaded, setLoaded] = useState(false)
    const [desc, setDesc] = useState('');
    useEffect(() => {
        
        const fetchClassData = async () => {
            
            try {
                const currClassRef = doc(db, "Classes", classLoc);
                const docSnap = await getDoc(currClassRef);
                if (docSnap.exists()) {
                    setClassData(docSnap);
                    setDesc(docSnap.data().desc)
                } else {
                    console.log("No such document!");
                }
            } catch (error) {
                console.error("Error fetching class data: ", error);
            }
        };
        fetchClassData();

        const classRef = collection(db, "Classes", classLoc, "Reviews");
        fetchDormReviews(classRef, setPreviewCardsInfo).then(() => {
            setLoaded(true)
        })

        console.log(previewCardsInfo)

        console.log(classData.id)
    }, [classes]);

    const [averageRating, setAverageRating] = useState(5);
    
    useEffect(() => {
        let total = 0
        for (const review of previewCardsInfo) {
            total += review.rating
        }
        total /= previewCardsInfo.length

        setAverageRating(Math.round(total*100)/100)
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
                        padding: "2em",
                        height: "80vh",
                        width: "35%"
                    }}>
                        <Heading size="3xl" as="h1">{classData.id}</Heading>
                        <Text style={{
                            marginTop: "2em",
                            color: "#959595"
                        }}>{desc}</Text>
                        <Text style={{
                            marginTop: "2em",
                            color: "#959595"
                        }}>Average rating: {averageRating ? averageRating : "n/a"}</Text>
                        
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
