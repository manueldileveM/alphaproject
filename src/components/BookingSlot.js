import React from "react";

function BookingSlot({ time, isAvailable }) {
  return (
    <div
      className={`booking-slot ${isAvailable ? "available" : "booked"}`}
      title={isAvailable ? "Disponibile" : "Prenotato"}
    >
      {time}
    </div>
  );
}

export default BookingSlot;
