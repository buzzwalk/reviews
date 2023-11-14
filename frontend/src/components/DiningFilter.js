import React from "react";
import PropTypes from "prop-types";
import FilterSlider from "./FilterSlider";

import { Card, CardBody, Select, RangeSlider, RangeSliderFilledTrack, RangeSliderTrack, 
    RangeSliderThumb, RangeSliderMark, FormControl, FormLabel, Heading, Checkbox, CheckboxGroup } from "@chakra-ui/react";

import "../style/filter.css";
export default function DiningFilter({ options, setOptions }) {

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

        function handleFoodServedChange(values) {
        setOptions((currOptions) => {
            return {
                ...currOptions,
                foodServed: values
            }
        });
    }

    return (
        <div className="filter-wrapper">
            <Heading as="h2" size="lg" noOfLines={1}>Filters</Heading>
            <FormControl>
                <FormLabel>Rating Category</FormLabel>
                <Select placeholder="Rating Category" onChange={handleRatingCategoryChange}>
                    <option value="all">All</option>
                    <option value="quality">Quality</option>
                    <option value="price">Price</option>
                    <option value="allergyFriendly">Allergy Friendly</option>
                    <option value="variety">Variety</option>
                    <option value="taste">Taste</option>
                    <option value="seasoning">Seasoned</option>
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
                <FormLabel>Food Served</FormLabel>
                <CheckboxGroup onChange={handleFoodServedChange}>
                    <div className="checkbox-grid">
                        <Checkbox value="eggs">Eggs</Checkbox>
                        <Checkbox value="sausage">Sausage</Checkbox>
                        <Checkbox value="bacon">Bacon</Checkbox>
                        <Checkbox value="potatoes">Potatoes</Checkbox>
                        <Checkbox value="fruit">Fruit</Checkbox>
                        <Checkbox value="yoghurt">Yoghurt</Checkbox>
                        <Checkbox value="vegetables">Vegetables</Checkbox>
                        <Checkbox value="coffee">Coffee</Checkbox>
                        <Checkbox value="fruit juice">Fruit Juice</Checkbox>
                        <Checkbox value="ice cream">Ice Cream</Checkbox>
                        <Checkbox value="dessert">Dessert</Checkbox>
                        <Checkbox value="milk">Milk</Checkbox>
                        <Checkbox value="soda">Soda</Checkbox>
                        <Checkbox value="chicken">Chicken</Checkbox>
                        <Checkbox value="pork">Pork</Checkbox>
                        <Checkbox value="beef">Beef</Checkbox>
                        <Checkbox value="pizza">Pizza</Checkbox>
                        <Checkbox value="friedChicken">Fried Chicken</Checkbox>
                    </div>
                </CheckboxGroup>
            </FormControl>
        </div>
    );

}

DiningFilter.propTypes = {
    options: PropTypes.shape({
        ratingCategory: PropTypes.string,
        ratingRange: PropTypes.arrayOf(PropTypes.number),
        foodServed: PropTypes.arrayOf(PropTypes.string)
    }),
    setOptions: PropTypes.func
}