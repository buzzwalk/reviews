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
                    <option value="computerScience">Computer Science</option>
                    <option value="other">Need to get other departments for dropdown</option>
                </Select>
            </FormControl>
            <FormControl>
                <FormLabel>Rating Category</FormLabel>
                <Select placeholder="Rating Category" onChange={(e) => handleRatingCategoryChange(e)}>
                    <option value="overall">Overall</option>
                    <option value="easiness">Easiness</option>
                    <option value="clarity">Clarity</option>
                    <option value="workload">Workload</option>
                    <option value="helpfulness">Helpfulness</option>
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
    setDepartment: PropTypes.func,
    setRatingCategory: PropTypes.func,
    setRatingRange: PropTypes.func
}