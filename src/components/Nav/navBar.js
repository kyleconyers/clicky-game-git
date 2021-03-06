import React from "react";

const NavBar = (props) =>
      (<div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>Clicky Game
          </a>
          <ul className="nav navbar-nav navbar-right text-info">
            <li>Score: {props.currentScore}</li>
            <li>Top Score: {props.highScore}</li>
          </ul>
        </nav>
      </div>)
    
  


export default NavBar;
