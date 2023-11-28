import "../../style/ReviewOverview.css"
import Navbar from "../navbar.js"
import { useEffect, useState } from "react"
import data from "../../sampleProfData.js"
import ClassProfessorFilter from "../filters/ClassProfessorFilter.js"

import { Box, Flex, Heading, Spinner } from "@chakra-ui/react"
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';
import PreviewCard from "../PreviewCard";
import { useNavigate } from "react-router-dom"
const searchClient = algoliasearch('N39JIC33WP', 'de58da0111cf638279244fc3374b674a');

export default function ProfessorsReviewOverview() {
    const navigate = useNavigate();
    const [ options, setOptions ] = useState({
        department: "all",
        ratingCategory: "overall",
        ratingRange: [0, 5]
    })

    function getPreviewCards() {
        const dataArr = data.data;
        return dataArr.map((e) =>(
        <div>
            <PreviewCard key={e.name} name={e.name} subheading={e.college} rating={e.rating}/>
        </div>
        )
        );
    }
    const handleDiningHallSelect = (prof) => {
        navigate('/profreviews', { state: { prof }});
    };

    return (
        <>
            <Navbar />
            <div className="reviewoverview" style={{padding: "2em"}}>
                <h1 className="overview-header">Professors</h1>
                <div className="main"style={{
                    marginTop: "2em"
                }}>
                    <InstantSearch searchClient={searchClient} indexName="professors" >
                        {/* <Box style={{border: "1px solid #959595",
                            width: "250px",
                            height: "80vh",
                            display:"flex",
                            flexDirection: "column",
                            borderRadius: "10px",
                            flexShrink: "0",
                            padding: "10px",}}>
                                <Heading fontWeight={400} fontFamily={"'Inter', sans-serif"}>Filters</Heading>
                            <SearchBox placeholder="Search for Professors" submitIconComponent={"null"} resetIconComponent={"null"}></SearchBox>
                            
                        </Box> */}
                        <Flex direction="column">
                            <SearchBox placeholder="Search for Professors" submitIconComponent={"null"} resetIconComponent={"null"}></SearchBox>
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
                subheading={hit.college}
                rating={hit.overallRating}
                
            />
        </div>
          
        );
      }

    
}