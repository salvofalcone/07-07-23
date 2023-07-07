import { useState } from "react";

import styles from "./Header.module.scss";
import {
  RiArrowDownSLine,
  RiSearchLine,
  RiUserLine,
  RiShoppingBagLine,
} from "react-icons/ri";

const Header = () => {
  const [openMenu, setOpenMenu] = useState();

  const menuItems = [
    {
      id: 1,
      label: "Home",
      items: [
        { id: 1, label: "Home 1" },
        { id: 2, label: "Home 2" },
        { id: 3, label: "Home 3" },
      ],
    },

    {
      id: 2,
      label: "Shop",
      items: [
        { id: 1, label: "Shop 1" },
        { id: 2, label: "Shop 2" },
        { id: 3, label: "Shop 3" },
      ],
    },

    {
      id: 3,
      label: "Product",
      items: [
        { id: 1, label: "Product 1" },
        { id: 2, label: "Product 2" },
        { id: 3, label: "Product 3" },
      ],
    },
  ];

  const handleOpenMenu = (item) => {
    if (item === openMenu) {
      // per verificare se è già aperto, se lo è viene chiuso
      setOpenMenu(false);
    } else {
      setOpenMenu(item);
    }

    // setOpenMenu(item);
  };

  return (
    <header className={styles.Header}>
      <div className={styles.HeaderContainer}>
        <a href="https://edgemony.com/">
          <img
            src="https://edgemony.com/wp-content/uploads/2023/05/logofooteredgemony.png"
            alt="logo"
            className={styles.Logo}
          />
        </a>

        <div className={styles.Menu}>
          <ul className={styles.MenuItem}>
            {menuItems.map((item) => (
              <li onClick={() => handleOpenMenu(item.id)} key={item.id}>
                <span className={styles.MenuItem__label}>{item?.label}</span>
                <span>
                  <RiArrowDownSLine />
                </span>
                <div
                  className={`${styles.MenuItem__dropdown}
                  ${
                    openMenu && openMenu === item?.id ? styles.open : ""
                  }`}>
                  <ul>
                    {item?.items?.map((subitem) => (
                      <li className={styles.MenuItem__subitem} key={subitem.id}>
                        {subitem?.label}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.Actions}>
          <RiSearchLine className="pippo" />
          <RiUserLine />
          <RiShoppingBagLine />
        </div>
      </div>
    </header>
  );
};

export default Header;
