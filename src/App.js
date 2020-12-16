import React from "react";
import { Switch, Route } from "react-router-dom";

import Default from "./pages/Default";
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import NewTicket from "./pages/New-Ticket.js";
import MyTickets from "./pages/My-Tickets.js";
import OurConnections from "./pages/Our-Connections.js";
import Customers from "./pages/Customers.js";
import Team from "./pages/Team.js";
import Account from "./pages/Account.js";

import Navbar from "./components/Navbar.js";
import Sidebar from "./components/Sidebar.js";

import "./css/global.css";
import './App.css';


function App() {
  setTimeout(() =>
  document.getElementById("loader").className += " hide",
  250
  )
  return (
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new-ticket" component={NewTicket} />
        <Route path="/my-tickets" component={MyTickets} />
        <Route path="/our-connections" component={OurConnections} />
        <Route path="/team" component={Team} />
        <Route path="/customers" component={Customers} />
        <Route path="/account" component={Account} />
        <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}
export default App;

/* */
