
export const SearchBar = ({onlyInStock, searchTerm}) => {

    return <div>
        <input type="text" placeholder="Search..." value={searchTerm}></input>
        <p>
            <input type="checkbox" value={onlyInStock}></input>
            <span>Only show in-stock products</span>
        </p>
    </div>
}