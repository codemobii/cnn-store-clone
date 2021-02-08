import React from "react";

export default function CartModal({ handleCloseCart }) {
  return (
    <div className="web_cart-container">
      <div
        className="web_menu-togger close_btn"
        style={{ zIndex: 100 }}
        onClick={handleCloseCart}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
        </svg>
      </div>
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
