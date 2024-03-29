import React from "react";

async function getTicket(id) {
  const response = await fetch("http://localhost:4000/tickets" + id, {
    next: {
      revalidate: 0,
    },
  });

  return response.json();
}

export default async function TicketDetails({ params }) {
  const id = params.id;
  const ticket = await getTicket(id);
  return (
    <main>
      <nav>
        <h2>Ticket details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
