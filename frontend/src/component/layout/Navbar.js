import Person from "@material-ui/icons/Person";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {
    const { isAuthenticated, user } = useSelector((state) => state.user);

    return (
        <nav className="navbar navbar-fixed navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">ECOMMERCE</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                <div className="form-inline my-2 my-lg-0">
                    <div className='nav-item'>
                        <Link className="nav-link" to="/cart"> <ShoppingCart /> </Link>
                    </div>
                    {!isAuthenticated && <div className='nav-item'>
                        <Link className="nav-link" to="/login"> LOGIN </Link>
                    </div>}
                </div>
            </div>
        </nav>
    )
}

export default Navbar