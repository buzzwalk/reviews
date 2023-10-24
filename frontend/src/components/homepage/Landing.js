import SearchBar from "./SearchBar"
import "./landing.css"
export default function Landing() {
    return(
        <div className="Landing">
            <h1 >
                GT Reviews
            </h1>
            <div id="searchbar">
            <SearchBar />
            </div>
           
        </div>
        
    )
}