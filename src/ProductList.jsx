import { array } from 'prop-types';
import ProductItem from './ProductItem';

const ProductList = ({ products })  => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
}

ProductList.propTypes = {
    products: array.isRequired,
};

export default ProductList;