import { useState } from "react";

import HamburgerBox from "./HamburgerBox/HamburgerBox";

interface MenuItems {
  name: string;
  link: string;
}

const MENU_ITEMS_PRIMARY = [
  {
    name: 'About <span class="item-text">/></span>',
    link: "",
  },
  {
    name: 'Experience <span class="item-text">/></span>',
    link: "",
  },
  {
    name: 'Work <span class="item-text">/></span>',
    link: "",
  },
  {
    name: 'Contact <span class="item-text">/></span>',
    link: "",
  },
];

const MENU_ITEMS_SECONDARY = [];

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleHamburgerBoxClick = () => {
    setIsMenuOpen((prevState): boolean => !prevState);
  };

  return (
    <nav className="menu">
      <HamburgerBox onClick={handleHamburgerBoxClick} />
      <ul className={`menu__list ${isMenuOpen ? "menu__list--open" : ""}`}>
        {MENU_ITEMS_PRIMARY.map(({ name, link }: MenuItems) => (
          <li key={name} className="menu__list--item">
            <a href={link} dangerouslySetInnerHTML={{ __html: name }} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
