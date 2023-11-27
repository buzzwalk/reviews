import { Box, Flex, HStack, Input, InputGroup, InputRightElement, InputLeftElement, Select, VStack, FormControl } from "@chakra-ui/react"
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
import { useState } from "react";


export default function Navbar() {
    
    const [suggested, setSuggested] = useState(['nigeria', 'korea', 'Japan'])
    const [reviewable, setReviewable] = useState('DiningHalls');
    console.log(reviewable);
    return(
        <Flex justifyContent="space-between" alignItems="center"  bg="#333333" marginLeft="20px" marginRight="20px" marginTop={"15px"} height="50px" borderRadius="20px" paddingLeft={"15px"} paddingRight={"15px"}>
            <StarIcon color="#959595"></StarIcon> {/*placeholder */}
            {/* <InputGroup width={"40%"} >
                <InputLeftElement>
                    <SearchIcon color="gray.300" ></SearchIcon>
                </InputLeftElement>
                <Input outline={"solid 1px #54585A"} background="#333333" borderColor="#333333" type="text" ></Input>
                <InputRightElement width={"fit-content"}>
                    <Select  background="#222222" color="#959595" variant="filled" height={"30px"} marginRight={"10px"}>
                        <option style={{background: "#333333"}}>DINING</option>
                        <option style={{background: "#333333"}}>HOUSING</option>
                        <option style={{background: "#333333"}}>PROFS</option>
                        <option style={{background: "#333333"}}>CLASSES</option>
                    </Select>
                </InputRightElement>
            </InputGroup> */}
            <HStack width="50%" maxWidth={"500px"}>
                <InputGroup width="100%">
                    {/* <InputLeftElement>
                        <SearchIcon color="gray.300" ></SearchIcon>
                    </InputLeftElement> */}
                    <AutoComplete >
                    
                        <AutoCompleteInput variant="filled"/>
                        <AutoCompleteList>
                            {suggested.map((country, cid) => (
                                <AutoCompleteItem
                                key={'option-${cid}'}
                                value={country}
                                textTransform="capitalize"
                                onSelect={()=>{console.log("test")}}
                                width={"50"}
                                >
                                    {country}
                                </AutoCompleteItem>
                            ))}
                        </AutoCompleteList>
                    </AutoComplete>
                    <InputRightElement width={"fit-content"}>
                            <Select onChange={(e)=>(setReviewable(e.target.value))} width="fit-content" background="#222222" color="#959595" variant="filled" height={"30px"} marginRight={"9px"}>
                                <option value="DiningHalls" style={{background: "#333333"}}>DINING</option>
                                <option value="Dorms" style={{background: "#333333"}}>HOUSING</option>
                                <option value="Professors" style={{background: "#333333"}}>PROFS</option>
                                <option value="Classes" style={{background: "#333333"}}>CLASSES</option>
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