

import React, { useState } from "react";
import EventModal from "./EventModal";

function EventCard({ event }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="event-card animate__animated animate__fadeInUp"
      onClick={() => setIsOpen(true)}
    >
      <h3>{event.name}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      {isOpen && <EventModal event={event} close={() => setIsOpen(false)} />}
    </div>
  );
}

export default EventCard;
