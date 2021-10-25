import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return(
    <div className="navbar">
      <div><Link to="/">
        Esileht
      </Link></div>
     <div><Link to="add-item">
        Lisa ese
      </Link></div>     
      <div><Link to="add-category">
        Lisa kategooria
      </Link></div>     
      <div><Link to="cart">
        Ostukorv
      </Link></div>    
    </div>
  );
}

// alumine tehke ise

export default Navbar;