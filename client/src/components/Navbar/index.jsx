import styles from "./styles.module.css"
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className={styles.nav}>
   <div className="left">
   <div className="logo">
       <Link to="/">eCommerce</Link>
   </div>

   <ul className="menu">
       <li>
           <Link to="/">Products</Link>
       </li>
   </ul>
   

   </div>
   <div className="right">right</div>
  </nav>
  )
}

export default Navbar