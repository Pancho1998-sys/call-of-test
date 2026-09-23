import { describe, expect, it } from "vitest";
import { Pistola, Soldado } from "../src/combate.js";

describe("Soldado", () => {
  it("mata al soldado de un disparo", () => {
    const soldado = new Soldado();

    new Pistola().disparar(soldado);

    expect(soldado.estaVivo()).toBe(false);
    expect(soldado.vida).toBe(0);
  });
});
