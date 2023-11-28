import { Box, Flex, HStack, Input, InputGroup, InputRightElement, InputLeftElement, Select, VStack, FormControl, position } from "@chakra-ui/react"
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
  } from "@choc-ui/chakra-autocomplete";
import { useEffect, useState } from "react";
import algoliasearch from 'algoliasearch/lite';
import { useNavigate } from "react-router-dom";

import {
Menu,
MenuButton,
MenuList,
MenuItem,
MenuItemOption,
MenuGroup,
MenuOptionGroup,
MenuDivider,
Button,
} from '@chakra-ui/react'

import {
    ChevronDownIcon
} from '@chakra-ui/icons'

const searchClient = algoliasearch('N39JIC33WP', 'de58da0111cf638279244fc3374b674a');

const reviewableMaps = {
    "classes": "Classes",
    "dining": "Dining",
    "dorms": "Housing",
    "professors": "Professors"
}

export default function CoolSearchBar() {
    
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
        
        navigate(0)
    }
    
    return(
        <InputGroup width="100%">
            <AutoComplete >
                <AutoCompleteInput  variant="filled" onChange={(e)=>setSearch(e.target.value)}/>
                <AutoCompleteList style={{position: "relative", zIndex:"10", background: "#333333"}}>
                    {suggested != null && suggested.map((hit, cid) => (
                    <AutoCompleteItem 
                        value={hit.objectID}
                        
                        onClick={(e)=>{
                            
                            console.log(hit.objectID)
                            handleSubmit(hit.objectID)  
                        }}
                        >
                        {hit.objectID }
                    </AutoCompleteItem>
                    ))}
                </AutoCompleteList>
            </AutoComplete>
            
            <InputRightElement width={"fit-content"}>
                <Menu width="10em">
                    <MenuButton
                    width="10em"
                    as={Button} rightIcon={<ChevronDownIcon />}>
                        {reviewableMaps[reviewable]}
                    </MenuButton>
                    <MenuList bg="#353535" width="1">
                        <MenuItem bg="#353535" _hover={{bg: "#4a4a4a"}} onClick={()=>(setReviewable("classes"))}>Classes</MenuItem>
                        <MenuItem bg="#353535" _hover={{bg: "#4a4a4a"}} onClick={()=>(setReviewable("dining"))}>Dining</MenuItem>
                        <MenuItem bg="#353535" _hover={{bg: "#4a4a4a"}} onClick={()=>(setReviewable("dorms"))}>Housing</MenuItem>
                        <MenuItem bg="#353535" _hover={{bg: "#4a4a4a"}} onClick={()=>(setReviewable("professors"))}>Professors</MenuItem>
                    </MenuList>
                </Menu>
                </InputRightElement>
        </InputGroup>

    )
}