import React from 'react'
import { Link } from "react-router-dom";

function Sidebar() {

    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
    dropdownContent.style.display = "none";
    } else {
    dropdownContent.style.display = "block";
    }
    });
    }

    return (
        <div className="sidenav">
            <Link to="/" target="_blank">
                <img src="https://www.gtaf.org.za/wp-content/uploads/2016/12/gtaf_logo_small.png" alt="logo" />
            </Link>
            <Link to="/about">Meetings</Link>
            <Link to="/services">Meeting Notes</Link>
            <Link to="/clients">Developments</Link>
            <Link to="/contact">Contact</Link>
            <button className="dropdown-btn">More 
                <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-container">
                <Link to="/">Recent Updates</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Login</Link>
            </div>
            <Link to="/contact">Search</Link>
        </div>
    )
}

export default Sidebar
