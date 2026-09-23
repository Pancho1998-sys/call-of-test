import { describe, expect, it } from "vitest";
import { Buque, Pistola } from "../src/combate.js";

describe("Buque", () => {
  it("mata al buque de tres disparos", () => {
    const buque = new Buque();
    const pistola = new Pistola(3);

    pistola.disparar(buque);
    pistola.disparar(buque);
    expect(buque.estaVivo()).toBe(true);
    pistola.disparar(buque);

    expect(buque.estaVivo()).toBe(false);
  });
});
