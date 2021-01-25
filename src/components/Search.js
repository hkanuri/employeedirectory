function Search(props){
    return(
        <input
        type ="text"
        value = {props.Search}
        onChange = {(e)=> props.setSearch(e.target.value)}
        />
    );
}

export default Search;