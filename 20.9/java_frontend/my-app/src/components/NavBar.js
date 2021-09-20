import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <div className="navbar">
            <Link to="/cart">
                <img className="" src="../../public/shopping-cart.svg" alt=""/>
            </Link>
            <img className="" src="../../public/carts.svg" alt=""/>
        </div>
    );
}

export default NavBar;