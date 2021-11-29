import Link from "next/link";
import styles from "../styles/Header.module.scss";
const Header = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about-pizzas">
            <a>About pizzas</a>
          </Link>
        </li>
        <li>
          <Link href="/cart">
            <a>Cart</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
