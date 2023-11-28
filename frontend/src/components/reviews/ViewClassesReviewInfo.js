import { useState, useEffect } from "react";
import { collection, doc, getDoc } from "firebase/firestore";
import {db} from "../../firebase";
import Navbar from "../navbar";
import { fetchDormReviews, getPreviewCardsInfo } from "../helpers";
import { useLocation } from 'react-router-dom';

import { Box, Spinner } from "@chakra-ui/react"

export default function ViewClassesReviewInfo({ classes }) { //singular classes but "class" is reserved word
    const [previewCardsInfo, setPreviewCardsInfo] = useState([]);
    const location = useLocation();
    const [classData, setClassData] = useState([]);
    const classLoc = location.state.classes;

    const [loaded, setLoaded] = useState(false)
    
    useEffect(() => {
        
        const fetchClassData = async () => {
            
            try {
                const currClassRef = doc(db, "Classes", classLoc);
                const docSnap = await getDoc(currClassRef);
                if (docSnap.exists()) {
                    setClassData(docSnap);
                
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
                    <>
                    <h1>{classData.id}</h1>
                    <div className="main">
                        <div className="filters">
                            <h3>Filters</h3>
                            <p>filters here</p>
                        </div>
                        {previewCardsInfo.length != 0 && <div className="previews">
                            {getPreviewCardsInfo(previewCardsInfo)}
                            </div>
                        }
    
                        {previewCardsInfo.length == 0 && 
                            <Box padding="2">
                                No reviews yet.
                            </Box>
                        }
                    </div>
                    </>
                )
                }
            </Box>
        </>
    );
}
