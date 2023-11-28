import React from "react";
import PropTypes from "prop-types";

import { Card, CardBody, Select, RangeSlider, RangeSliderFilledTrack, RangeSliderTrack, 
    RangeSliderThumb, FormControl, FormLabel, Heading, Box } from "@chakra-ui/react";

export default function ClassProfessorFilter({ options, setOptions }) {
    
    function handleDepartmentChange(event) {
        setOptions((currOptions) => {
            return {
                ...currOptions,
                department: event.target.value,
            }
        });
    }

    function handleRatingCategoryChange(event) {
        setOptions((currOptions) => {
            return {
                ...currOptions,
                ratingCategory: event.target.value,
            }
        });
    }

    function handleRatingRangeChange(event) {
        setOptions((currOptions) => {
            return {
                ...currOptions,
                ratingRange: event.target.value,
            }
        });
    }

        function handleAverageGpaChange(event) {
        setOptions((currOptions) => {
            return {
                ...currOptions,
                averageGpa: event.target.value,
            }
        });
    }

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
            <Heading as="h2" size="lg" noOfLines={1}>Filters</Heading>
            <FormControl>
                <FormLabel>Department</FormLabel>
                <Select placeholder="Department" onChange={(e) => handleDepartmentChange(e)}>
                    <option value="all">All</option>
                    <option value="computerScience">Computer Science</option>
                    <option value="other">Need to get other departments for dropdown</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Average GPA</FormLabel>
                <RangeSlider defaultValue={[0, 4]} min={0} max={4} step={.1} colorScheme="pink">
                    <RangeSliderTrack bg='red.100'>
                        <RangeSliderFilledTrack bg='orange' />
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={6} index={0} />
                    <RangeSliderThumb boxSize={6} index={1} />
                </RangeSlider>
            </FormControl>
            <FormControl>
                <FormLabel>Rating Category</FormLabel>
                <Select placeholder="Rating Category" onChange={(e) => handleRatingCategoryChange(e)}>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Rating Range</FormLabel>
                <RangeSlider defaultValue={[0, 5]} min={0} max={5} step={1} colorScheme="pink">
                    <RangeSliderTrack bg='red.100'>
                        <RangeSliderFilledTrack bg='tomato' />
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={6} index={0} />
                    <RangeSliderThumb boxSize={6} index={1} />
                </RangeSlider>
            </FormControl>
        </Box>
    );

}

ClassProfessorFilter.propTypes = {
    options: PropTypes.shape({
        department: PropTypes.string,
        ratingCategory: PropTypes.string,
        ratingRange: PropTypes.arrayOf(PropTypes.number),
        averageGpa: PropTypes.arrayOf(PropTypes.number)
    }),
    setOptions: PropTypes.func
}