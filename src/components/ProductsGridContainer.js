import * as R from 'ramda'
import { ProductsTable } from './productsTable'


export const ProductsGridContainer = ({onlyInStock, products, searchTerm}) => {
    let renderableProducts = []

    if(searchTerm !== '' && onlyInStock) {
        renderableProducts = products.filter(p => p.name.includes(searchTerm) && p.stock > 0)
    } else if (searchTerm !== '') {
        renderableProducts = products.filter(p => p.name.includes(searchTerm))
    } else if (onlyInStock) {
        renderableProducts = products.filter(p => Number(p.stock) > 0)
    } else renderableProducts = [...products]

    renderableProducts = R.groupBy(p => p.category, renderableProducts)

    return <div>
        <h2 className="products-header">
            <span className="products-header-span">Product</span>
            <span className="products-header-span">Price</span>
            <span className="products-header-span">Stock</span>
        </h2>
        <div className="grid-container">
            {R.compose(R.values, R.map(p => ProductsTable(p)))(renderableProducts)}
        </div>
    </div>
}