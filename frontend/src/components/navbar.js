import { Box, Flex, HStack, Input, InputGroup, InputRightElement, InputLeftElement, Select, VStack, FormControl, position } from "@chakra-ui/react"
import "../style/navbar.css"
import { SearchIcon, StarIcon } from "@chakra-ui/icons"
import { VscAccount } from "react-icons/vsc";
import { CiBookmark } from "react-icons/ci";
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
  } from "@choc-ui/chakra-autocomplete";
import { useEffect, useState } from "react";
import algoliasearch from 'algoliasearch/lite';
const searchClient = algoliasearch('N39JIC33WP', 'de58da0111cf638279244fc3374b674a');

export default function Navbar() {
    
    const [search, setSearch] = useState(' ');
    
    const [suggested, setSuggested] = useState(null)
    const [reviewable, setReviewable] = useState('classes');
   
    
    useEffect(() => {
        let index = 0;
        searchClient.initIndex(reviewable).search(search).then(({hits}) =>{
            setSuggested(hits)
        })
    }, [search, reviewable])

    
    return(
        <Flex style={{position:"relative", zIndex:"10"}} justifyContent="space-between" alignItems="center"  bg="#333333" marginLeft="20px" marginRight="20px" marginTop={"15px"} height="50px" borderRadius="20px" paddingLeft={"15px"} paddingRight={"15px"}>
            <StarIcon color="#959595"></StarIcon> {/*placeholder */}

            <HStack width="50%" maxWidth={"500px"}>
                <InputGroup width="100%">
                    
                    <AutoComplete >
                        <AutoCompleteInput variant="filled" onChange={(e)=>setSearch(e.target.value)}/>
                        <AutoCompleteList style={{position: "relative", zIndex:"10", background: "#333333"}}>
                            {suggested != null && suggested.map((hit, cid) => (
                            <AutoCompleteItem 
                                value={hit.objectID}
                                textTransform="capitalize">
                                {hit.name != null ? hit.name : hit.objectID }
                            </AutoCompleteItem>
                            ))}
                        </AutoCompleteList>
                    </AutoComplete>
                    <InputRightElement width={"fit-content"}>
                            <Select onChange={(e)=>(setReviewable(e.target.value))} width="fit-content" background="#222222" color="#959595" variant="filled" height={"30px"} marginRight={"9px"}>
                                <option value="classes" style={{background: "#333333"}}>CLASSES</option>
                                <option value="dining" style={{background: "#333333"}}>DINING</option>
                                <option value="dorms" style={{background: "#333333"}}>HOUSING</option>
                                <option value="professors" style={{background: "#333333"}}>PROFS</option>
                            </Select>
                        </InputRightElement>
                </InputGroup>
            </HStack>
            <HStack>
                <CiBookmark size={"30px"}></CiBookmark>
                <VscAccount size={"26px"}/>
            
            </HStack>

        </Flex>
    )
}