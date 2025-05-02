import './ProductStyles.css'
import { useState } from 'react';
import ProductList from './ProductList';

/* Product data organization
{
  id: 1,
  name: "Product 1",
  description: "Description of Product 1",
  price: 19.99,
  image: "https://via.placeholder.com/150",
  category: "Category 1"
  }
*/

function App() {
  const [showProductList, setShowProductList] = useState([
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 19.99, image: 'https://picsum.photos/200', category: 'Category 1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 21.99, image: 'https://picsum.photos/250', category: 'Category 2' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 39.99, image: 'https://picsum.photos/300', category: 'Category 3' },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 29.99, image: 'https://picsum.photos/350', category: 'Category 2' },
    { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 32.49, image: 'https://picsum.photos/400', category: 'Category 1' },
    { id: 6, name: 'Product 6', description: 'Description of Product 6', price: 69.99, image: 'https://picsum.photos/450', category: 'Category 3' },
  ]);

  return (
    <div className="product-container">
      <h1>E-Commerce Store</h1>
      <ProductList products={showProductList} />
      
    </div>
  );
};

export default App
