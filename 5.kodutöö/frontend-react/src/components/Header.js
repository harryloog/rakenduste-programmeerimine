import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return(
      <div className="header">
        <div><Link to="/">
          Home
        </Link></div>
       <div><Link to="/login">
          Login
        </Link></div>     
        <div><Link to="/register">
          Register
        </Link></div>     
        <div><Link to="/posts">
          Posts
        </Link></div>    
      </div>
    );
  }

export default Header;