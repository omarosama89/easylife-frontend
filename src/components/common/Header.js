import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (
    <>
      <div className="sidebar content-box">
        <ul className="nav">
          <li className="current col-md-12">
            <NavLink activeStyle={activeStyle} to="/logout">
              <i className="glyphicon glyphicon-log-in"></i> Logout
              </NavLink>
          </li>
        </ul>
      </div >
      <div className="sidebar content-box">
        <ul className="nav">
          <li className="current col-md-12">
            <NavLink activeStyle={activeStyle} to="/advertisements" exact>
              <i className="glyphicon glyphicon-star"></i> Advertisements
          </NavLink>
          </li>
          <li className="current col-md-12">
            <NavLink activeStyle={activeStyle} to="/shops">
              <i className="glyphicon glyphicon-new-window"></i> Shops
          </NavLink>
          </li>
          <li className="current col-md-12">
            <NavLink activeStyle={activeStyle} to="/offers">
              <i className="glyphicon glyphicon-inbox"></i> Offers
          </NavLink>
          </li>
          <li className="current col-md-12">
            <NavLink activeStyle={activeStyle} to="/events">
              <i className="glyphicon glyphicon-screenshot"></i> Events
          </NavLink>
          </li>
          <li className="current col-md-12">
            <NavLink activeStyle={activeStyle} to="/news">
              <i className="glyphicon glyphicon-film"></i> News
          </NavLink>
          </li>
          <li className="current col-md-12">
            <NavLink activeStyle={activeStyle} to="/services">
              <i className="glyphicon glyphicon-inbox"></i> Services
          </NavLink>
          </li>
        </ul>
      </div >
    </>
  );
}

export default Header;

