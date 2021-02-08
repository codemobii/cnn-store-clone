import { useEffect, useState } from "react";

const webUtils = () => {
  // State managers

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Open the menu bar

  const handleOpenMenu = () => {
    const nav = document.querySelector(".logo_container-nav");
    const body = document.querySelector("body");
    const menu = document.querySelector(".web_header-nav_container");
    setIsMenuOpen(true);
    nav.classList.add("menuIsToggled");
    body.classList.add("menuIsToggled");
    menu.classList.add("menu_active");
  };

  // Close the menu bar

  const handleCloseMenu = () => {
    const nav = document.querySelector(".logo_container-nav");
    const body = document.querySelector("body");
    const menu = document.querySelector(".web_header-nav_container");
    setIsMenuOpen(false);
    nav.classList.remove("menuIsToggled");
    body.classList.remove("menuIsToggled");
    menu.classList.remove("menu_active");
  };

  // Open the cart

  const handleOpenCart = () => {
    const cart = document.querySelector(".web_cart-container");
    cart.classList.add("open_cart");
    setIsMenuOpen(true);
  };

  const handleCloseCart = () => {
    const cart = document.querySelector(".web_cart-container");
    cart.classList.remove("open_cart");
    setIsMenuOpen(false);
  };

  return {
    isMenuOpen,
    handleOpenMenu,
    handleCloseMenu,
    handleOpenCart,
    handleCloseCart,
  };
};

export default webUtils;
