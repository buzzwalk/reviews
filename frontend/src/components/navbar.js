import { Box, Flex, HStack, Input, InputGroup, InputRightElement, InputLeftElement, Select, VStack, FormControl, position, Image } from "@chakra-ui/react"
import "../style/navbar.css"
import { AddIcon, SearchIcon, StarIcon } from "@chakra-ui/icons"
import { VscAccount } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import gtlogo from "../images/gtlogo.png"
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
  } from "@choc-ui/chakra-autocomplete";
import { useEffect, useState } from "react";
import algoliasearch from 'algoliasearch/lite';
import { Link, useNavigate } from "react-router-dom";
import CoolSearchBar from "./CoolSearchbar";
const searchClient = algoliasearch('N39JIC33WP', 'de58da0111cf638279244fc3374b674a');

export default function Navbar() {
    
    const [search, setSearch] = useState(' ');
    
    const [suggested, setSuggested] = useState(null)
    const [reviewable, setReviewable] = useState('classes');
    const navigate = useNavigate();
    
    useEffect(() => {
        let index = 0;
        searchClient.initIndex(reviewable).search(search).then(({hits}) =>{
            setSuggested(hits)
        })
    }, [search, reviewable])

    function handleSubmit(location){
        if(reviewable === "dining") {
            navigate('/reviews/dininghallreviews', { state: {diningHall: location} });
        } else if (reviewable === "dorms") {
            navigate('/reviews/dormreviews', { state: { dorm: location }});
        } else if (reviewable === "classes") {
            navigate('/reviews/classreviews', { state: {classes: location}})
        } else if (reviewable === "professors") {
            navigate('/reviews/profreviews', { state: {prof: location}})
        }
        
        window.location.reload()
    }
    
    return(
        <Flex style={{position:"relative", zIndex:"10"}} justifyContent="space-between" alignItems="center"  bg="#333333" marginLeft="20px" marginRight="20px" marginTop={"15px"} height="50px" borderRadius="20px" paddingLeft={"15px"} paddingRight={"15px"}>
            <a href="/"><Image width="40px" src={gtlogo}></Image></a>
            

            <HStack width="50%" maxWidth={"500px"}>
                <CoolSearchBar />
            </HStack>
            <HStack>
                <Link to="/review" size={"30px"}>
                    <AddIcon ></AddIcon>
                </Link>
                <VscAccount size={"26px"}/>
            
            </HStack>

        </Flex>
    )
}