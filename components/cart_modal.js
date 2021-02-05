import React from "react";

export default function CartModal(props) {
  return (
    <div className="cnn_cart-container">
      <div className="cart_main">
        <div className="cart_main-title borderd">Cart</div>
        <div className="cart_main-contents">
          <div className="cart_main-emptystate">
            <div className="cart_main-title">Shopping Cart</div>
            <div className="cart_main-text">
              Your cart us empty: <a>Continue Shopping!</a>
            </div>
          </div>
        </div>
      </div>
      <div className="cart_footer">
        <div className="cart_footer-info">
          <p>Subtotal:</p>
          <p>FREE</p>
        </div>
        <button className="cart_footer-btn">Checkout</button>
      </div>
    </div>
  );
}
