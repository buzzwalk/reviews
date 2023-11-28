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
const searchClient = algoliasearch('N39JIC33WP', 'de58da0111cf638279244fc3374b674a');

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
            navigate('/dininghallreviews', { state: {diningHall: location} });
        } else if (reviewable === "dorms") {
            navigate('/dormreviews', { state: { dorm: location }});
        } else if (reviewable === "classes") {
            navigate('/classreviews', { state: {classes: location}})
        } else if (reviewable === "professors") {
            navigate('/profreviews', { state: {prof: location}})
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
                    <Select onChange={(e)=>(setReviewable(e.target.value))} width="fit-content" background="#222222" color="#959595" variant="filled" height={"30px"} marginRight={"9px"}>
                        <option value="classes" style={{background: "#333333"}}>CLASSES</option>
                        <option value="dining" style={{background: "#333333"}}>DINING</option>
                        <option value="dorms" style={{background: "#333333"}}>HOUSING</option>
                        <option value="professors" style={{background: "#333333"}}>PROFS</option>
                    </Select>
                </InputRightElement>
        </InputGroup>

    )
}