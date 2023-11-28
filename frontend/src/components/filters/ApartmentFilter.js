import React from "react";
import PropTypes from "prop-types";

import { Card, CardBody, Select, RangeSlider, RangeSliderFilledTrack, RangeSliderTrack, 
    RangeSliderThumb, FormControl, FormLabel, Heading, Checkbox, CheckboxGroup, Box } from "@chakra-ui/react";

export default function ApartmentFilter({ options, setOptions }) {
    
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
            <FormControl marginLeft={"10px"} marginRight={"10px"} width={"200px"}>
                <FormLabel>Beds</FormLabel>
                <RangeSlider 
                    defaultValue={[0, 10]} 
                    min={0} 
                    max={10} 
                    step={1} 
                    colorScheme="pink" 
                    onChangeEnd={(val)=>{
                        setOptions(prev => {
                            return{
                                ...prev,
                                beds: val
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
            </FormControl>
            <FormControl marginLeft={"10px"} marginRight={"10px"} width={"200px"}>
                <FormLabel>Baths</FormLabel>
                <RangeSlider 
                    defaultValue={[0, 10]} 
                    min={0} 
                    max={10} 
                    step={1} 
                    colorScheme="pink" 
                    onChangeEnd={(val)=>{
                        setOptions(prev => {
                            return{
                                ...prev,
                                baths: val
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
            </FormControl>
            <FormControl marginLeft={"10px"} marginRight={"10px"} width={"200px"}>
                <FormLabel>Price Range</FormLabel>
                <RangeSlider 
                    defaultValue={[0, 10000]} 
                    min={0} 
                    max={10000} 
                    step={500} 
                    colorScheme="pink"  
                    onChangeEnd={(val)=>{
                        setOptions(prev => {
                            return{
                                ...prev,
                                priceRange: val
                            }
                        })
                    }}
                >
                    <RangeSliderTrack bg={"#333333"}>
                        <RangeSliderFilledTrack bg={"#E8D79A"}/>
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={6} index={0} />
                    <RangeSliderThumb boxSize={6} index={1} />
                </RangeSlider>
            </FormControl>
            {/* <FormControl>
                <FormLabel>Amenities</FormLabel>
                <CheckboxGroup onChange={(e)=>handleChange(e)}>
                    <Checkbox value="cats">Cats</Checkbox>
                    <Checkbox value="cooling">Cooling</Checkbox>
                    <Checkbox value="dogs">Dogs</Checkbox>
                    <Checkbox value="electricity">Electricity</Checkbox>
                    <Checkbox value="furnished">Furnished</Checkbox>
                    <Checkbox value="gas">Gas</Checkbox>
                    <Checkbox value="gym">Gym</Checkbox>
                    <Checkbox value="internet">Internet</Checkbox>
                    <Checkbox value="jacuzzi">Jacuzzi</Checkbox>
                    <Checkbox value="laundry">Laundry</Checkbox>
                    <Checkbox value="nearBusStops">Near bus stops</Checkbox>
                    <Checkbox value="nearCampus">Near campus</Checkbox>
                    <Checkbox value="onsiteLandlord">Onsite landlord</Checkbox>
                    <Checkbox value="parking">Parking</Checkbox>
                    <Checkbox value="pool">Pool</Checkbox>
                    <Checkbox value="smallAnimals">Small animals</Checkbox>
                    <Checkbox value="trash">Trash</Checkbox>
                    <Checkbox value="water">Water</Checkbox>
                </CheckboxGroup>
            </FormControl> */}
                            
        </Box>
            
       
    );
}

ApartmentFilter.propTypes = {
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