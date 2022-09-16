const ProductsTableRow = ({product}) => {
    return <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
    </tr>
}

export const ProductsTable = (productCategory) => {
    return <table>
        <thead>
            <tr>
                <th>{productCategory[0].category}</th>
            </tr>
        </thead>
        <tbody>
            {productCategory.map(p => <ProductsTableRow product={p}/>)}
        </tbody>
    </table>
}