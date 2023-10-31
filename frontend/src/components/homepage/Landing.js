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
            <div className="linksWrapper">
                <a href='/classes'>Classes</a>
                <a href='/professors'>Professors</a>
                <a href='/apartments'>Apartments</a>
                <a href='/dininghalls'>Dining halls</a>
            </div>
            
        </div>
        
    )
}