import './App.css';
import { ProductsHeader } from './components/productsHeader'
import { SearchBar } from './components/searchBar'
import { ProductsGridContainer } from './components/productsGridContainer';
import { useState } from 'react'

const products = [
  {category: "Electronics", name: "Air Pod", price: "$299", stock: "20"},
  {category: "Electronics", name: "Mac Book Pro", price: "$2999", stock: "6"},
  {category: "Electronics", name: "Mac Book Air", price: "$1299", stock: "0"},
  {category: "Electronics", name: "Mighty Mouse", price: "$49", stock: "12"},
  {category: "Drink", name: "Coca-cola", price: "$1.5", stock: "20"},
  {category: "Drink", name: "Pepsi Max", price: "$1.4", stock: "6"},
  {category: "Drink", name: "Apple juice", price: "$2", stock: "3"},
  {category: "Drink", name: "Mineral water", price: "$2.3", stock: "0"},
  {category: "Snack", name: "Fruit Candy", price: "$3", stock: "200"},
  {category: "Snack", name: "Lollipop", price: "$1", stock: "60"},
  {category: "Snack", name: "Carrot", price: "$1.5", stock: "30"},
  {category: "Snack", name: "Banana", price: "$1.3", stock: "120"},
  {category: "Snack", name: "Apple", price: "$2", stock: "42"},
  {category: "Meal", name: "Meatballs", price: "$12", stock: "0"},
  {category: "Meal", name: "Spaghetti", price: "$8", stock: "6"},
  {category: "Meal", name: "Mifu veggies", price: "$7", stock: "0"},
  {category: "Meal", name: "Carrot noodles", price: "$6", stock: "12"},
]

function App() {
  const [searchTerm, updateSearchTerm] = useState('')
  const [onlyInStock, changeOnlyInStock] = useState(false)

  return (
    <div className="App">
      <ProductsHeader />
      <SearchBar onlyInStock={onlyInStock} searchTerm={searchTerm}/>
      <ProductsGridContainer onlyInStock={onlyInStock} products={products} searchTerm={searchTerm}/>
    </div>
  );
}

export default App;
