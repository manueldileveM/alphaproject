// src/utils/validateForm.js
export const validateForm = ({ date, time, guests, occasion }) => {
    const errors = {};
  
    if (!date) errors.date = "La data è obbligatoria.";
    if (!time) errors.time = "L'orario è obbligatorio.";
    if (guests < 1 || guests > 10) {
      errors.guests = "Gli ospiti devono essere tra 1 e 10.";
    }
    if (!occasion) errors.occasion = "Seleziona un'occasione.";
  
    return errors;
  };

  