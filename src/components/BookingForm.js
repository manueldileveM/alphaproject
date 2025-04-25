import React, { useState, useEffect } from "react";
import { updateTimes } from "../utils/Api";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Compleanno");

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

  const validateForm = () => {
    const errors = {};
    if (!date) errors.date = "La data è obbligatoria.";
    if (!time) errors.time = "L'orario è obbligatorio.";
    if (guests < 1 || guests > 10) {
      errors.guests = "Il numero di ospiti deve essere tra 1 e 10.";
    }
    if (!occasion) errors.occasion = "Seleziona un’occasione.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  useEffect(() => {
    const isValid = validateForm();
    setIsSubmitDisabled(!isValid);
  }, [date, time, guests, occasion]);

  const handleDateChange = async (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    const times = await updateTimes(selectedDate);
    dispatch({ type: "update", payload: times });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate aria-labelledby="booking-heading">
      <h2 id="booking-heading">Prenota un tavolo</h2>

      <label htmlFor="res-date">Scegli la data</label>
      <input
        type="date"
        id="res-date"
        name="date"
        value={date}
        onChange={handleDateChange}
        required
        aria-label="Scegli la data della prenotazione"
      />
      {formErrors.date && <span className="error">{formErrors.date}</span>}

      <label htmlFor="res-time">Scegli l'orario</label>
      <select
        id="res-time"
        name="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
        aria-label="Seleziona l'orario"
      >
        <option value="">--Seleziona l'ora--</option>
        {availableTimes.map((t, idx) => (
          <option key={idx} value={t}>
            {t}
          </option>
        ))}
      </select>
      {formErrors.time && <span className="error">{formErrors.time}</span>}

      <label htmlFor="guests">Numero di ospiti</label>
      <input
        type="number"
        id="guests"
        name="guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        min="1"
        max="10"
        required
        aria-label="Numero di ospiti"
      />
      {formErrors.guests && <span className="error">{formErrors.guests}</span>}

      <label htmlFor="occasion">Occasione</label>
      <select
        id="occasion"
        name="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
        aria-label="Seleziona un’occasione"
      >
        <option value="">--Seleziona occasione--</option>
        <option value="Compleanno">Compleanno</option>
        <option value="Anniversario">Anniversario</option>
      </select>
      {formErrors.occasion && <span className="error">{formErrors.occasion}</span>}

      <input
        type="submit"
        value="Effettua la tua prenotazione"
        disabled={isSubmitDisabled}
        aria-label="On Click"
      />
    </form>
  );
}

export default BookingForm;
