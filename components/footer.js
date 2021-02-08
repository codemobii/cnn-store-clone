import React from "react";

export default function Footer() {
  return (
    <footer className="web_footer-container">
      <div className="web_major-container">
        <div className="web_footer-items">
          <div className="footer_item-one">
            <div className="footer_item-title">Sign up &amp; get 10% off</div>
            <div className="web_sub-form">
              <input type="email" placeholder="Email" />
              <button className="sub_form-btn">Sign up</button>
            </div>
            <p className="sub_info">
              *New customers only. Offer lasts 30 days. See Terms. This site is
              protected by reCAPTCHA and the Google Privacy Policy and Terms of
              Service apply.
            </p>
            <p className="footer_text slant">
              *MSRP is the retailer price recommended by the
              manufacturer/provider and may not be the prevailing market price.
            </p>
          </div>
          <div className="footer_item-rest">
            <div className="footer_item-title">My Account</div>
            <ul className="footer_item-list">
              <li>
                <a href="#" className="footer_text">
                  Profile
                </a>
              </li>
              <li>
                <a href="#" className="footer_text">
                  Account
                </a>
              </li>
              <li>
                <a href="#" className="footer_text">
                  Purchases
                </a>
              </li>
              <li>
                <a href="#" className="footer_text">
                  Credits
                </a>
              </li>
              <li>
                <a href="#" className="footer_text">
                  Preferences
                </a>
              </li>
              <li>
                <a href="#" className="footer_text">
                  Do Not Sell My Personal Information
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_item-rest">
            <div className="footer_item-title">Support</div>
            <ul className="footer_item-list">
              <li>
                <a href="#" className="footer_text">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="footer_text">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="footer_text">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="footer_text">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="footer_text">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="footer_text">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="footer_text">
                  Accessiblilty
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_item-rest">
            <div className="footer_item-title">Are you a vendor?</div>
            <p className="footer_text sm_margin">
              Get exclusive coverage to the world's top publisher sites through
              the StackCommerce network.
            </p>
            <a href="#" className="footer_link-bold">
              Learn More
            </a>
            <div className="web_authority">
              <p className="footer_text">Powered by:</p>
              <img
                src="https://shops1.stackassets.com/assets/core/logo-light-be04c77da6de1475cb2c1c82cf75120f338265aa36dfd6ed8a6404a720c28431.svg"
                alt=""
                className="web_footer-img"
              />
              <p className="footer_text">
                Copyright © 2021 StackCommerce. All Rights Reserved.
              </p>
              <img
                src="https://seal-sanjose.bbb.org/logo/sehzbus/stackcommerce-1013267.png"
                alt=""
                className="web_auto-img"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
