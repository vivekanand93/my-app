import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default function Navbar(props) {
  return (
   <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to='/about'>{props.aboutText}</Link>
        </li>
                  <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Customize Themes
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {" "}
                    <div
                      className={`dropdown-item form-check form-switch text-${
                        props.mode === "light" ? "dark" : "light"
                      } mx-4`}
                      style={{ width: "inherit" }}
                    >
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        Change theme
                      </label>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onClick={() => {
                          props.toggleMode(null);
                        }}
                        role="switch"
                        aria-checked="true"
                        id="flexSwitchCheckDefault"
                      />
                    </div>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" to="/">
                  Thank you for your visit
                </Link>
              </li>
      </ul>
        </div>
    </div>
  </div>
</nav>
   </>
  )
}

Navbar.prototype = {title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired};
Navbar.defaultProps = {title:'set your title', aboutText:'enter about here'};
