async function getTickets() {
  const response = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });

  return response.json();
}

export default async function TicketList() {
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card my-5">
          <h3>{ticket.title}</h3>
          <p>{ticket.content}</p>
          siema
          <div className={`pill ${ticket.priority}`}>
            {ticket.priority} priority
          </div>
        </div>
      ))}
      {tickets.length === 0 && <p text-center>No tickets to show</p>}
    </>
  );
}
