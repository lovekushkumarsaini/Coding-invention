import React from "react";
import "./FrontPage.css";
import TicketSystem from "./TicketSystem";

function FrontPage() {
  return (
    <div className="frontpage">
      <h2 className="front_heading">Welcome to Shree RSC Helpdesk</h2>
<TicketSystem/>
    </div>
  );
}

export default FrontPage;
