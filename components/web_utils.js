import { useState } from "react";

const webUtils = () => {
  // State managers

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    if (!isMenuOpen) {
      const nav = document.querySelector(".logo_container-nav");
      const body = document.querySelector("body");
      setIsMenuOpen(true);
      nav.classList.add("menuIsToggled");
      body.classList.add("menuIsToggled");
    } else {
      const nav = document.querySelector(".logo_container-nav");
      const body = document.querySelector("body");
      setIsMenuOpen(false);
      nav.classList.remove("menuIsToggled");
      body.classList.remove("menuIsToggled");
    }
  };

  return {
    isMenuOpen,
    handleOpenMenu,
  };
};

export default webUtils;
