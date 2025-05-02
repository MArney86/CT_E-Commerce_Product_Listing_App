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

import { object } from "prop-types";

const ProductItem = ({product}) => {
    return (
        <div className="product-item">
            <div className="product-image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
                <table className="product-table">
                    <thead>
                        <tr>
                            <th colSpan="2">{product.name}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">Description:</th>
                            <td>{product.description}</td>
                        </tr>
                        <tr>
                            <th scope="row">Price:</th>
                            <td>${product.price.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <th scope="row">Category:</th>
                            <td>{product.category}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

ProductItem.defaultProps = {
    product: {
        id: 0,
        name: "Placeholder",
        description: "Description of Placeholder",
        price: 19.99,
        image: "https://picsum.photos/200",
        category: "Category 1"
    }
};

ProductItem.propTypes = {
    product: object
};

export default ProductItem;