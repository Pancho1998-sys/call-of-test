import { describe, expect, it } from "vitest";
import { Ametralladora, Tanque } from "../src/combate.js";

describe("Arma Sin Municiones", () => {
  it("no hace daño cuando se queda sin municiones", () => {
    const objetivo = new Tanque();
    const arma = new Ametralladora(1);

    arma.disparar(objetivo);
    const vidaTrasUltimoDisparo = objetivo.vida;
    const disparoRealizado = arma.disparar(objetivo);

    expect(disparoRealizado).toBe(false);
    expect(objetivo.vida).toBe(vidaTrasUltimoDisparo);
  });
});
