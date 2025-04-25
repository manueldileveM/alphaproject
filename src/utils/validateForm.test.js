// tests/validateForm.test.js
import { validateForm } from "./validateForm";

describe("validateForm", () => {
  test("returns no errors for valid input", () => {
    const formData = {
      date: "2025-05-01",
      time: "18:00",
      guests: 4,
      occasion: "Birthday",
    };

    const errors = validateForm(formData);
    expect(errors).toEqual({});
  });

  test("returns errors for empty fields", () => {
    const formData = {
      date: "",
      time: "",
      guests: 0,
      occasion: "",
    };

    const errors = validateForm(formData);
    expect(errors.date).toBeDefined();
    expect(errors.time).toBeDefined();
    expect(errors.guests).toBeDefined();
    expect(errors.occasion).toBeDefined();
  });

  test("returns error if guests < 1", () => {
    const formData = {
      date: "2025-05-01",
      time: "18:00",
      guests: 0,
      occasion: "Birthday",
    };

    const errors = validateForm(formData);
    expect(errors.guests).toBe("Gli ospiti devono essere tra 1 e 10.");
  });

  test("returns error if guests > 10", () => {
    const formData = {
      date: "2025-05-01",
      time: "18:00",
      guests: 15,
      occasion: "Anniversary",
    };

    const errors = validateForm(formData);
    expect(errors.guests).toBe("Gli ospiti devono essere tra 1 e 10.");
  });
});
