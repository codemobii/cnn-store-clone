import React, { useState } from "react";
import CartModal from "./cart_modal";
import webUtils from "../components/web_utils";

export default function Header({ isHome }) {
  const { isMenuOpen, handleOpenMenu } = webUtils();

  return (
    <header className="cnn_header">
      {/* The top black bar */}
      <div className="cnn_header-top">
        <div className="cnn_major-container">
          <ul className="top-links">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M10.828 12l4.95 4.95-1.414 1.414L8 12l6.364-6.364 1.414 1.414z" />
                </svg>
                back to www.cnn.com
              </a>
            </li>
            <li>
              <a href="#">
                Save An Extra 15% Off Sitewide With Promo Code VDAY2021
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">Give $10, Get $10</a>
            </li>
          </ul>
        </div>
      </div>
      {/* The logo container */}
      <div className="cnn_header-logo_container">
        <div className="cnn_major-container">
          <div className="logo_container-nav">
            <div className="cnn_menu-togger" onClick={handleOpenMenu}>
              {!isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M3 4h18v2H3V4zm0 7h18v2H3v-2zm0 7h18v2H3v-2z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
                </svg>
              )}
            </div>
            <a href="#" className="cnn_collapsable-logo">
              <img
                src="https://cdnp1.stackassets.com/1450f611cc059fb1ebda9139f7935006d9e824b2/store/37fddedd9f94546d4d5a6bfefb15dcea22eefb43fff4d26df3bcdef6942c/286_logo-desktop.png"
                alt="CNN - Store"
              />
            </a>
            <div className="cnn_icon-set">
              <div className="cnn_menu-togger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
                </svg>
              </div>
              <div className="cnn_menu-togger">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* The navigation bar */}
      <div className="cnn_major-container">
        <div
          className={`cnn_header-nav_container ${isMenuOpen && "menu_active"}`}
        >
          <form action className="cnn_header-searchbar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" />
            </svg>
            <input type="search" name="h" id="h" placeholder="Search . . ." />
          </form>
          <ul className="cnn_navbar-list">
            <li>
              <a href="#">Online Courses</a>
            </li>
            <li className="with_sublinks">
              <a href="#">Gear + Gedgets</a>
              <ul className="navbar_sublinks">
                <div className="sublinks-gather">
                  <li>
                    <a href="#">All</a>
                  </li>
                  <li>
                    <a href="#">Hmmm</a>
                  </li>
                  <li>
                    <a href="#">Hmmm</a>
                  </li>
                </div>
              </ul>
            </li>
            <li className="with_sublinks">
              <a href="#">Lifestyle</a>
              <ul className="navbar_sublinks">
                <li>
                  <a href="#">Hmmm</a>
                </li>
              </ul>
            </li>
            <li className="with_sublinks">
              <a href="#">Apps + Software</a>
              <ul className="navbar_sublinks">
                <div className="sublinks-gather">
                  <li>
                    <a href="#">All</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                  <li>
                    <a href="#">Everyday Carry</a>
                  </li>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Travel</a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
          <ul className="cnn_navbar-icons">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM6 7v6h11.512l1.8-6H6zm-.5 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
      {isHome && (
        <div className="cnn_hero-intro">
          <div className="cnn_major-container">
            <div className="hero_intro-cont">
              <div>
                <h1>Welcome To The CNN Store</h1>
                <h4>
                  Discover &amp; Save On Exclusive Gadgets, Online Courses,
                  Apps, &amp; More
                </h4>
                <a href="#" className="cnn_button-border">
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
      <CartModal />
    </header>
  );
}
