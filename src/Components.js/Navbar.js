import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" style={{color: props.mode==='dark'?'white':'black'}} href="/">
            {props.title} 
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <a
              className="nav-link active" style={{color: props.mode==='dark'?'white':'black'}} aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about"style={{color: props.mode==='dark'?'white':'black'}}>
                  {props.AboutText}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{color: props.mode==='dark'?'white':'black'}}
                >
                  More Info
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">Disabled</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
            

          </div>  
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  AboutText: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set the title",
  aboutText: "About the text",
};
