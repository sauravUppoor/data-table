const Search = (props) => {
    return (
        <div>
            <input
                type="text"
                name="search"
                autoComplete="off"
                placeholder="search"
                onChange={props.setSearchTerm}
            ></input>
        </div>
    );
};

export default Search;
