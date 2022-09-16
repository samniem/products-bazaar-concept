
export const SearchBar = ({changeOnlyInStock, onlyInStock, searchTerm, updateSearchTerm}) => {

    return <div>
        <input type="text" placeholder="Search..." value={searchTerm} onChange={e => updateSearchTerm(e.target.value)}></input>
        <p>
            <input type="checkbox" value={onlyInStock} onClick={() => changeOnlyInStock(!onlyInStock)}></input>
            <span>Only show in-stock products</span>
        </p>
    </div>
}