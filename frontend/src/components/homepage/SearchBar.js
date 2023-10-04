import React, { useState } from "react";

export default function SearchBar() {
    const [ value, setValue ] = useState("");

    return (
        <form action="/" method="POST">
            <div>
                <input 
                    type="text" 
                    id="search" 
                    name="search" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)} 
                />
            </div>
        </form>
    );
}