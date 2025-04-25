import { initializeTimes, updateTimes } from "./timeReducer";
import * as Api from "../utils/Api"; // importa tutto per mockare fetchData

// ✅ MOCK di fetchData
jest.spyOn(Api, "fetchData").mockImplementation(() =>
  Promise.resolve(["17:00", "18:00", "19:00", "20:00"])
);

describe("initializeTimes", () => {
  test("restituisce una lista di orari (mocked)", async () => {
    const result = await initializeTimes();
    expect(Api.fetchData).toHaveBeenCalled(); // verifica che fetchData sia stato chiamato
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    expect(result).toContain("18:00"); // esempio di controllo specifico
  });
});

describe("updateTimes", () => {
  test("restituisce lo stesso stato se la logica non è cambiata", () => {
    const initialState = ["17:00", "18:00", "19:00"];
    const action = { type: "update", date: "2025-04-23" };
    const result = updateTimes(initialState, action);
    expect(result).toEqual(initialState);
  });
});
