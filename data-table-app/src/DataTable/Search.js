const Search = (props) => {
    return (
        <div>
            <input
                type="text"
                name="search"
                autoComplete="off"
                placeholder="search"
                onChange={(e) => props.setSearchTerm(e.target.value)}
            ></input>
        </div>
    );
};

export default Search;
