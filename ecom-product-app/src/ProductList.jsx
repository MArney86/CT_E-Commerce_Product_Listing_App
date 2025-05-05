import { array } from 'prop-types';
import ProductItem from './ProductItem';

// ProductList component to display a list of products using the ProductItem component for each product in the passed array prop using the map function
const ProductList = ({ products })  => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

//prop types for the ProductList component to validate the products array passed as props
ProductList.propTypes = {
    products: array.isRequired,
};

export default ProductList;