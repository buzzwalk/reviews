import React from "react";
import PropTypes from "prop-types";

import { RangeSlider, RangeSliderFilledTrack, RangeSliderTrack, RangeSliderThumb, RangeSliderMark } from "@chakra-ui/react";
import "../style/filter.css";

export default function FilterSlider({ min, max, step, changeFn, property }) {
    return (
        <RangeSlider 
            defaultValue={[min, max]} 
            min={min} 
            max={max} 
            step={step} 
            onChange={changeFn}
        >
            <RangeSliderMark 
                value={property[0]}
                textAlign="center"
                mt="4"
                ml="-5"
                w="10"
                style={{fontSize: ".85em"}}
            >{property[0]}
            </RangeSliderMark>
            <RangeSliderMark 
                value={property[1]}
                textAlign="center"
                mt="4"
                ml="-5"
                w="10"
                style={{fontSize: ".85em"}}
            >{property[1]}
            </RangeSliderMark>
            <RangeSliderTrack>
                <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={6} index={0} />
            <RangeSliderThumb boxSize={6} index={1} />
        </RangeSlider>
    );
}

FilterSlider.propTypes = {
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    changeFn: PropTypes.func,
    property: PropTypes.any
};