import { describe, expect, it } from "vitest";
import { Ametralladora, Soldado } from "../src/combate.js";

describe("Arma Municiones", () => {
  it("descuenta las municiones en cada uso", () => {
    const objetivo = new Soldado();
    const arma = new Ametralladora(2);

    arma.disparar(objetivo);
    arma.disparar(objetivo);

    expect(arma.municiones).toBe(0);
  });
});
