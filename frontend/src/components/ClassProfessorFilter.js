import React from "react";
import PropTypes from "prop-types";
import FilterSlider from "./FilterSlider";

import { Card, CardBody, Select, RangeSlider, RangeSliderFilledTrack, RangeSliderTrack, 
    RangeSliderThumb, FormControl, FormLabel, Heading } from "@chakra-ui/react";

import "../style/filter.css";

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

    function handleRatingRangeChange(values) {
        setOptions((currOptions) => {
            return {
                ...currOptions,
                ratingRange: values,
            }
        });
    }

        function handleAverageGpaChange(values) {
        setOptions((currOptions) => {
            return {
                ...currOptions,
                averageGpa: values,
            }
        });
    }

    return (
        <div className="filter-wrapper">
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
                <FilterSlider 
                    min={0} 
                    max={4} 
                    step={.1} 
                    changeFn={handleAverageGpaChange} 
                    property={options.averageGpa} 
                />
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
                <FilterSlider 
                    min={0} 
                    max={5} 
                    step={1} 
                    changeFn={handleRatingRangeChange} 
                    property={options.ratingRange} 
                />
            </FormControl>
        </div>
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