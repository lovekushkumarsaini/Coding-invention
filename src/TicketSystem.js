import React, { useState } from "react";
import Ticketlist from "./Ticketlist";
import "./TicketSystem.css";
function TicketSystem() {
  const [issue, setIssue] = useState("");
  const [issuetype, setIssuetype] = useState("Student");
  const [identifier, setIdentifier] = useState("");
  const [priority, setPriority] = useState("Normal");
  const [ticketarray, setTicketarray] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTicketarray([
      ...ticketarray,
      {
        issue: issue,
        issuetype: issuetype,
        identifier: identifier,
        priority: priority,
      },
    ]);
  };
  console.log(ticketarray);
  return (
    <div className="frontpage_content">
      <div className="newticket">
        <h3 className="newticket_heading">Enter New Ticket</h3>
        <form className="ticket_form" onSubmit={handleSubmit}>
          <input
            onChange={(e) => setIssue(e.target.value)}
            className="form_input"
            value={issue}
            type="text"
            placeholder="Describe issue briefly"
          ></input>

          <select
            className="form_select"
            placeholder="Issue type"
            value={issuetype}
            onChange={(e) => setIssuetype(e.target.value)}
          >
            <option value="Tutor">Tutor</option>
            <option value="student">Student</option>
          </select>
          <input
            onChange={(e) => setIdentifier(e.target.value)}
            value={identifier}
            className="form_input"
            type="text"
            placeholder="Enter identifier(name)"
          ></input>
          <select
            className="form_select"
            placeholder="Priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="normal">Normal</option>
            <option value="Urgent">Urgent</option>
          </select>
          <button className="form_button" type="submit">
            ENTER
          </button>
        </form>
      </div>

      <Ticketlist data={ticketarray} />
    </div>
  );
}

export default TicketSystem;
