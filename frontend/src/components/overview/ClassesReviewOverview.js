import { useState, useEffect } from "react";
import { collection, getDocs, limit, query } from "firebase/firestore";
import {db} from "../../firebase";
import Navbar from "../navbar";
import { getPreviewCards, fetchOverview } from "../helpers";
import { useNavigate } from "react-router-dom";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import "./searchstyles.css"

const classesRef = collection(db, "Classes");
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';
import PreviewCard from "../PreviewCard";

const searchClient = algoliasearch('N39JIC33WP', 'de58da0111cf638279244fc3374b674a');

export default function ClassReviewOverview() {
    const [previewCards, setPreviewCards] = useState([]);
    const [numLoad, setNumLoad] = useState(12);
    const navigate = useNavigate();
    
    async function queryClasses() {
        const q = query(classesRef, limit(numLoad));
        const querySnapshot = await getDocs(q)
        const reviews = querySnapshot.docs.map((doc) => ({
            name: doc.data().name == null ? doc.id : doc.data().name,
            address: doc.data().address,
            overallRating: doc.data().overallRating,
            desc: doc.data().desc
        }));
        setPreviewCards(reviews)
    }
    console.log(numLoad)
    useEffect(() => {
        // queryClasses();
        
    }, [numLoad]);

    const handleDiningHallSelect = (classes) => {
        navigate('/reviews/classreviews', { state: { classes }});
    };

    return (
        <>
            <Navbar />
            <div className="reviewoverview" style={{padding: "2em"}}>
                <h1 >Classes</h1>
                <div className="main" style={{
                    marginTop: "2em"
                }}>
                    <InstantSearch searchClient={searchClient} indexName="classes" >
                        {/* <Box style={{border: "1px solid #959595",
                            width: "250px",
                            height: "80vh",
                            display:"flex",
                            flexDirection: "column",
                            borderRadius: "10px",
                            flexShrink: "0",
                            padding: "10px",}}>
                                <Heading fontWeight={400} fontFamily={"'Inter', sans-serif"}>Filters</Heading>
                            <SearchBox placeholder="Search for Classes" submitIconComponent={"null"} resetIconComponent={"null"}></SearchBox>
                        </Box> */}
                        <Flex direction="column">
                            <SearchBox placeholder="Search for Classes" submitIconComponent={"null"} resetIconComponent={"null"}></SearchBox>
                            <Flex direction={"column"} alignItems={"left"} width="fit-content" >
                                <div className="previews" style={{marginLeft: -7, marginTop: "2em"}}>
                                
                                    <Hits classNames={{
                                        root: "previewFix",
                                        list: "previews"
                                    }} hitComponent={Hit} />
                                </div>
                                {/* <Button onClick={()=>setNumLoad((prev)=> {return prev + 12})} marginTop="5px" marginBottom={"20px"}  width={"10vw"}>Load more</Button> */}
                            </Flex>
                        </Flex>
                    </InstantSearch>
                    
                </div>
                
            </div>
        </>
    );
    function Hit({ hit }) {
        return (
            <div onClick={() => handleDiningHallSelect(hit.objectID)}>
            <PreviewCard
                name={hit.objectID}
                subheading={hit.desc}
                rating={hit.overallRating}
                
            />
        </div>
          
        );
      }
}
