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
//ProductItem component to display product details in a card like format with an image and table of details
import { object } from "prop-types";

const ProductItem = ({product}) => {
    return (
        <div className="product-item" id={"product-" + product.id}>
            <div className="product-image">
                {/* Product image with alt text as product name */}
                <img src={product.image} alt={product.name} />
            </div>
            <div className="product-details">
                {/* Product details table with product name as the title */}
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

//default props for the ProductItem component to display a placeholder product if no product is passed as props
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

//prop types for the ProductItem component to validate the product object passed as props
ProductItem.propTypes = {
    product: object
};

export default ProductItem;