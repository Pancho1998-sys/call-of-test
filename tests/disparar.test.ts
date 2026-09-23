import { describe, expect, it } from "vitest";
import { Buque, Pistola, Soldado, Tanque } from "../src/combate.js";

describe("Disparar", () => {
  it("permite que todos los combatientes disparen", () => {
    const atacante = new Soldado();

    for (const objetivo of [new Soldado(), new Tanque(), new Buque()]) {
      expect(atacante.disparar(objetivo, new Pistola())).toBe(true);
    }
  });
});
