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
  return (
    <nav className="menu">
      <HamburgerBox />
      <ul className="menu__list">
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
