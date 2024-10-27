

import React from "react";

function EventModal({ event, close }) {
  return (
    <div className="modal-overlay" onClick={close}>
      <div
        className="modal animate__animated animate__fadeInDown"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={close}>
          &times;
        </button>
        <img src={event.imageUrl} alt={event.name} />
        <h2>{event.name}</h2>
        <p>{event.date} - {event.location}</p>
        <p>{event.description}</p>
      </div>
    </div>
  );
}

export default EventModal;
