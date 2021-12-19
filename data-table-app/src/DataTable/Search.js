import "./style.css";

const Search = (props) => {
    return (
        <div className="cmp__search">
            <input
                type="text"
                name="search"
                autoComplete="off"
                placeholder="Search"
                onChange={(e) => props.setSearchTerm(e.target.value)}
            ></input>
        </div>
    );
};

export default Search;
