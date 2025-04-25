import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

// ✅ Nasconde il warning "React Router Future Flag"
beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation((msg) => {
    if (
      msg.includes("React Router Future Flag Warning")
    ) return;
    console.warn(msg);
  });
});

test('renders Prenota un tavolo on Reservations page', async () => {
  render(
    <MemoryRouter initialEntries={["/Reservations"]}>
      <App />
    </MemoryRouter>
  );

  // ✅ Cerca un titolo con testo "Prenota un tavolo"
  const heading = await screen.findByRole("heading", { name: /Prenota un tavolo/i });
  expect(heading).toBeInTheDocument();
});
