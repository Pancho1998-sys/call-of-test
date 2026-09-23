import { describe, expect, it } from "vitest";
import { Buque, Soldado, Tanque } from "../src/combate.js";

describe("Recibir Disparo", () => {
  it("permite que todos los combatientes reciban disparos", () => {
    for (const combatiente of [new Soldado(), new Tanque(), new Buque()]) {
      combatiente.recibirDisparo(50);
      expect(combatiente.vida).toBeLessThan(combatiente.vidaMaxima);
    }
  });
});
