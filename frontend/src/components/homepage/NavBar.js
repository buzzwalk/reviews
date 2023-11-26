import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Image } from "@chakra-ui/react";

export default function NavBar() {
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "2em" }}>
            <NavLink name="Classes" route="/classes" imgSrc="https://placehold.co/50" />
            <NavLink name="Professors" route="/professors" imgSrc="https://placehold.co/50" />
            <NavLink name="Apartments" route="/apartments" imgSrc="https://placehold.co/50" />
        </div>
    );
}

function NavLink({ name, route, imgSrc }) {
    return (
        <Link to={ route } style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Image src={ imgSrc } alt={name + " Icon"} />
            { name }
        </Link>
    );
}

NavLink.propTypes = {
    name: PropTypes.string,
    route: PropTypes.string,
    imgSrc: PropTypes.string
}