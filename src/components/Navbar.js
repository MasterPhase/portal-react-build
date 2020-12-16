import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";

export default class Navbar extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
            <Link to="/">
                
            </Link>
        </div>
            <nav className="header__links">
                <ul>
                    <li><Link to="/Dashboard">Dashboard</Link></li>
                    <li><Link to="/new-ticket">New Ticket</Link></li>
                    <li><Link to="/my-tickets">My Tickets</Link></li>
                    <li><Link to="/our-connections">Our Connections</Link></li>
                    <li><Link to="/team">Team</Link></li>
                    <li><Link to="/customers">Customers</Link></li>
                    <li><Link to="/account">Account</Link></li>
                </ul>
            </nav>
        
    </header>
    );
  }
}
