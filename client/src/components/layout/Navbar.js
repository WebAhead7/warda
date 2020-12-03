import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
const Navbar = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => logout();

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/posts">Posts</Link>
      </li>

      <li>
        <Link to="/postform">Add Post</Link>
      </li>

      <li>
        <a onClick={onLogout} href="#!">
          log out
        </a>
      </li>
      <li className="black-text">Hello {user && user.name}</li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/login">Log In</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </Fragment>
  );

  return (
    <nav>
      <div className="nav-wrapper " style={{ padding: '0 10px' }}>
        <Link className="brand-logo" to="/">
          Warda
        </Link>

        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
