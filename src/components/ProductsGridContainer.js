import * as R from 'ramda'

const ProductsTable = (productCategory) => {
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

const ProductsTableRow = ({product}) => {
    return <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.stock}</td>
    </tr>
}

export const ProductsGridContainer = ({products}) => {
    const groupedProducts = R.groupBy(p => p.category, products)
    return <div>
        <h2 className="products-header">
            <span className="products-header-span">Product</span>
            <span className="products-header-span">Price</span>
            <span className="products-header-span">Stock</span>
        </h2>
        <div className="grid-container">
            {R.compose(R.values, R.map(p => ProductsTable(p)))(groupedProducts)}
        </div>
    </div>
}