import { describe, expect, it } from "vitest";
import { Pistola, Soldado, Tanque } from "../src/combate.js";

describe("Soldado Muerto", () => {
  it("un soldado muerto no deberia poder disparar", () => {
    const soldado = new Soldado();
    soldado.recibirDisparo(100);

    expect(soldado.estaVivo()).toBe(false);

    // Este test falla porque la clase base Combatiente no valida si el atacante esta vivo antes de disparar
    const resultado = soldado.disparar(new Tanque(), new Pistola());
    expect(resultado).toBe(false);
  });
});
