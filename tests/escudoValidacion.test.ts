import { describe, expect, it } from "vitest";
import { Escudo } from "../src/combate.js";

describe("Escudo Validación", () => {
  it("rechaza porcentajes de escudo inválidos", () => {
    expect(() => new Escudo(101)).toThrow(RangeError);
  });
});
