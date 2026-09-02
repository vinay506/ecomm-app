import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Cart = () => {
    const cartItems = useSelector((state) => state.cartData);
    const amount = cartItems.length > 0 ? cartItems.map(item => item.price ).reduce((prev, next) => prev + next, 0   ) : 0;
  return (
    <div>
        <Link to="/">Go back to products page</Link>
        <h2>Cart Page</h2>
        <div className="cart-page-container">
          {/* Cart content will go here */}
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Color</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.color}</td>
                  <td>{item.price}</td>
                  <td>{item.brand}</td>
                  <td>{item.category}</td>
                </tr>
              ))}
            </tbody>
          </table>
         <div className="price-details">
              <div className="adjust-price">
                <span>Amount:</span>
                <span>{amount}</span>
              </div>
              <div className="adjust-price">
                <span>Discount:</span>
                <span>000</span>
              </div>
              <div className="adjust-price">
                <span>Tax:</span>
                <span>000</span>
              </div>
               
              <div className="adjust-price">
                <span>Total</span>
                <span>000</span>
              </div>
         </div>
        </div>
    </div>
  );
};

export default Cart;