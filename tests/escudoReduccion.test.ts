import { describe, expect, it } from "vitest";
import { Escudo, Pistola, Soldado } from "../src/combate.js";

describe("Escudo Reducción", () => {
  it("reduce el daño según el porcentaje del escudo", () => {
    const soldado = new Soldado();
    soldado.armarEscudo(new Escudo(50));

    new Pistola().disparar(soldado);

    expect(soldado.estaVivo()).toBe(true);
    expect(soldado.vida).toBe(50);
  });
});
