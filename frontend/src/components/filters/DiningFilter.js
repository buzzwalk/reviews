import React from "react";
import PropTypes from "prop-types";

import { Card, CardBody, Select, RangeSlider, RangeSliderFilledTrack, RangeSliderTrack, 
    RangeSliderThumb, FormControl, FormLabel, Heading, Checkbox, CheckboxGroup, Box } from "@chakra-ui/react";

export default function DiningFilter({ options, setOptions }) {
    
    function handleChange(event) {
        const {name, value} = event.target
        setOptions(prev => {
            return{
                ...prev,
                [name]: value
            }
        })
        console.log(name)
    }
    console.log(options)
    return (
        <Box style={{border: "1px solid #959595",
                            width: "250px",
                            height: "80vh",
                            display:"flex",
                            flexDirection: "column",
                            borderRadius: "10px",
                            flexShrink: "0",
                            padding: "10px",}}>
                                <Heading fontWeight={400} fontFamily={"'Inter', sans-serif"}>Filters</Heading>
                                
            <FormControl >
                <FormLabel>Sort by</FormLabel>
                <Select name="filter"  onChange={(e)=>handleChange(e)}>
                    <option style={{ background: "#333333"}} value="name">Alphabetically</option>
                    <option style={{ background: "#333333"}} value="overallRating">Best Rated</option>
                    <option style={{ background: "#333333"}} value="overallRatingdesc">Worst Rated</option>
                </Select>
            </FormControl >
            {options.filter != "name" && <FormControl name="ratingRange"  marginLeft={"10px"} marginRight={"10px"} width={"200px"}>
                <FormLabel>Rating Range</FormLabel>
                <RangeSlider  colorScheme='brand'
                    defaultValue={[1, 5]} 
                    min={1} 
                    max={5} 
                    step={1} 
                    
                    name="ratingRange"
                    onChangeEnd={(val)=>{
                        setOptions(prev => {
                            return{
                                ...prev,
                                ratingRange: val
                            }
                        })
                    }}
                >
                    <RangeSliderTrack bg={"#333333"}>
                        <RangeSliderFilledTrack bg={"#E8D79A"} />
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={6} index={0} />
                    <RangeSliderThumb boxSize={6} index={1} />
                </RangeSlider>
            </FormControl>}
            
                            
        </Box>
            
       
    );
}

DiningFilter.propTypes = {
    options: PropTypes.shape({
        ratingCategory: PropTypes.string,
        ratingRange: PropTypes.arrayOf(PropTypes.number),
        beds: PropTypes.arrayOf(PropTypes.number),
        baths: PropTypes.arrayOf(PropTypes.number),
        priceRange: PropTypes.arrayOf(PropTypes.number),
        amenities: PropTypes.arrayOf(PropTypes.string),
    }),
    setOptions: PropTypes.func
};