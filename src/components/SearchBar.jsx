export default function SearchBar(){
    return(
        <div className="search-bar">
                <input type="text" name="location" id="location" placeholder="SEARCH" />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
        </div>
    )
}