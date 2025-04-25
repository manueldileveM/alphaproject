// BookingForm.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('invio con dati validi chiama onSubmit', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByLabelText(/Data/i), { target: { value: '2025-05-01' } });
  fireEvent.change(screen.getByLabelText(/Orario/i), { target: { value: '18:00' } });
  fireEvent.change(screen.getByLabelText(/Numero di ospiti/i), { target: { value: '4' } });
  fireEvent.change(screen.getByLabelText(/Occasione/i), { target: { value: 'Compleanno' } });

  fireEvent.click(screen.getByRole('button', { name: /Prenota/i }));

  expect(handleSubmit).toHaveBeenCalledWith({
    date: '2025-05-01',
    time: '18:00',
    guests: 4,
    occasion: 'Compleanno',
  });
});

test('invio con dati non validi mostra errori e non chiama onSubmit', () => {
  const handleSubmit = jest.fn();
  render(<BookingForm onSubmit={handleSubmit} />);

  fireEvent.click(screen.getByRole('button', { name: /Prenota/i }));

  expect(handleSubmit).not.toHaveBeenCalled();
  expect(screen.getByText(/La data è obbligatoria/i)).toBeInTheDocument();
  expect(screen.getByText(/L'orario è obbligatorio/i)).toBeInTheDocument();
  expect(screen.getByText(/Il numero di ospiti deve essere tra 1 e 10/i)).toBeInTheDocument();
  expect(screen.getByText(/Seleziona un'occasione/i)).toBeInTheDocument();
});
