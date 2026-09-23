import { describe, expect, it } from "vitest";
import { Pistola, Tanque } from "../src/combate.js";

describe("Tanque", () => {
  it("mata al tanque de dos disparos", () => {
    const tanque = new Tanque();
    const pistola = new Pistola(2);

    pistola.disparar(tanque);
    expect(tanque.estaVivo()).toBe(true);
    pistola.disparar(tanque);

    expect(tanque.estaVivo()).toBe(false);
  });
});
