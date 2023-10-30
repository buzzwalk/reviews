import React from "react";
import PropTypes from "prop-types";

import { Card, CardBody, Select, RangeSlider, RangeSliderFilledTrack, RangeSliderTrack, 
    RangeSliderThumb, FormControl, FormLabel, Heading } from "@chakra-ui/react";

export default function ClassProfessorFilter({ setDepartment, setRatingCategory, setRatingRange }) {
    
    function handleDepartmentChange(event) {
        setDepartment(event.value);
    }

    function handleRatingCategoryChange(event) {
        setRatingCategory(event.value);
    }

    function handleRatingRangeChange(event) {
        setRatingRange(event.value)
    }

    return (
        <div>
            <Heading as="h2" size="lg" noOfLines={1}>Filters</Heading>
            <FormControl>
                <FormLabel>Department</FormLabel>
                <Select placeholder="Department" onChange={(e) => handleDepartmentChange(e)}>
                    <option value="Computer Science">Computer Science</option>
                    <option value="Other">Need to get other departments for dropdown</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Rating Category</FormLabel>
                <Select placeholder="Rating Category" onChange={(e) => handleRatingCategoryChange(e)}>
                    <option value="Overall">Overall</option>
                    <option value="Easiness">Easiness</option>
                    <option value="Clarity">Clarity</option>
                    <option value="Workload">Workload</option>
                    <option value="Helpfulness">Helpfulness</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Rating Range</FormLabel>
                <RangeSlider defaultValue={[120, 240]} min={0} max={300} step={30} colorScheme="pink">
                    <RangeSliderTrack bg='red.100'>
                        <RangeSliderFilledTrack bg='tomato' />
                    </RangeSliderTrack>
                    <RangeSliderThumb boxSize={6} index={0} />
                    <RangeSliderThumb boxSize={6} index={1} />
                </RangeSlider>
            </FormControl>
        </div>
    );

}

ClassProfessorFilter.propTypes = {
    name: PropTypes.func,
    route: PropTypes.func,
    imgSrc: PropTypes.func
}