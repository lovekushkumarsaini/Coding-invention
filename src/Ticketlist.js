import React from "react";
import "./Ticketlist.css";

function Ticketlist({ data }) {
  return (
    <div className="ticketlist">
      <h3 className="page_heading">All tickets</h3>
      <div className="headline_bar">
        <h4 className="heading">Status</h4>
        <h4 className="heading">Issue type</h4>
        <h4 className="heading">Description</h4>
        <h4 className="heading">Identifier</h4>
        <h4 className="heading">Priority</h4>
      </div>
      {data.map((item) => (
        <div className="ticket">
          <input type="checkbox" value={true} unchecked />
          <h4 className="heading">{item.issue}</h4>
          <h4 className="heading">{item.issuetype}</h4>
          <h4 className="heading">{item.identifier}</h4>
          <h4 className="heading">{item.priority}</h4>
        </div>
      ))}
    </div>
  );
}

export default Ticketlist;
