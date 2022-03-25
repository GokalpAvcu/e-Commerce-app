import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className="logo">
          <Link to="/">eCommerce</Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <Button colorScheme="pink">Register</Button>
        <Button colorScheme='pink'>Button</Button>
      </div>
    </nav>
  );
}

export default Navbar;
