import React from "react";
import PropTypes from "prop-types";
import FilterSlider from "./FilterSlider";

import { Card, CardBody, Select, RangeSlider, RangeSliderFilledTrack, RangeSliderTrack, 
    RangeSliderThumb, RangeSliderMark, FormControl, FormLabel, Heading, Checkbox, CheckboxGroup } from "@chakra-ui/react";

import "../style/filter.css";

export default function ApartmentFilter({ options, setOptions }) {
    
    function handleRatingCategoryChange(event) {
        setOptions((currOptions) => { 
            return {
                ...currOptions,
                ratingCategory: event.target.value
            };
        });
    }

    function handleRatingRangeChange(values) {
        setOptions((currOptions) => { 
            return {
                ...currOptions,
                ratingRange: values
            };
        });
    }

    function handleBedsChange(values) {
        setOptions((currOptions) => { 
            return {
                ...currOptions,
                beds: values
            };
        });
    }

    function handleBathsChange(values) {
        setOptions((currOptions) => { 
            return {
                ...currOptions,
                baths: values
            };
        });
    }

    function handlePriceRangeChange(values) {
        setOptions((currOptions) => { 
            return {
                ...currOptions,
                priceRange: values
            };
        });
    }
        
    function handleAmenitiesChange(values) {
        setOptions((currOptions) => { 
            return {
                ...currOptions,
                amenities: values
            };
        });
    }

    return (
        <div className="filter-wrapper">
            <Heading as="h2" size="lg" noOfLines={1}>Filters</Heading>
            <FormControl>
                <FormLabel>Rating Category</FormLabel>
                <Select placeholder="Rating Category" onChange={handleRatingCategoryChange}>
                    <option value="overall">Overall</option>
                    <option value="quietness">Quietness</option>
                    <option value="upkeep">Upkeep</option>
                    <option value="landlord">Landlord</option>
                    <option value="spaciousness">Spaciousness</option>
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
            <FormControl>
                <FormLabel>Beds</FormLabel>
                <FilterSlider 
                    min={0} 
                    max={10} 
                    step={1} 
                    changeFn={handleBedsChange} 
                    property={options.beds} 
                />
            </FormControl>
            <FormControl>
                <FormLabel>Baths</FormLabel>
                <FilterSlider 
                    min={0} 
                    max={10} 
                    step={1} 
                    changeFn={handleBathsChange} 
                    property={options.baths} 
                />
            </FormControl>
            <FormControl>
                <FormLabel>Price Range</FormLabel>
                <FilterSlider 
                    min={0} 
                    max={10000} 
                    step={500} 
                    changeFn={handlePriceRangeChange} 
                    property={options.priceRange} 
                />
            </FormControl>
            <FormControl>
                <FormLabel>Amenities</FormLabel>
                <CheckboxGroup onChange={handleAmenitiesChange}>
                    <div className="checkbox-grid">
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
                    </div>
                </CheckboxGroup>
            </FormControl>
        </div>
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