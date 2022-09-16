import * as R from 'ramda'
import { ProductsTable } from './productsTable'


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