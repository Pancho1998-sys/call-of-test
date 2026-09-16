import { describe, expect, it } from "vitest";
import {
  Ametralladora,
  Buque,
  Escudo,
  Pistola,
  Soldado,
  Tanque,
} from "../src/combate.js";

describe("Combate", () => {
  it("permite que todos los combatientes disparen", () => {
    const atacante = new Soldado();

    for (const objetivo of [new Soldado(), new Tanque(), new Buque()]) {
      expect(atacante.disparar(objetivo, new Pistola())).toBe(true);
    }
  });

  it("permite que todos los combatientes reciban disparos", () => {
    for (const combatiente of [new Soldado(), new Tanque(), new Buque()]) {
      combatiente.recibirDisparo(50);
      expect(combatiente.vida).toBeLessThan(combatiente.vidaMaxima);
    }
  });

  it("mata al soldado de un disparo", () => {
    const soldado = new Soldado();

    new Pistola().disparar(soldado);

    expect(soldado.estaVivo()).toBe(false);
    expect(soldado.vida).toBe(0);
  });

  it("mata al tanque de dos disparos", () => {
    const tanque = new Tanque();
    const pistola = new Pistola(2);

    pistola.disparar(tanque);
    expect(tanque.estaVivo()).toBe(true);
    pistola.disparar(tanque);

    expect(tanque.estaVivo()).toBe(false);
  });

  it("mata al buque de tres disparos", () => {
    const buque = new Buque();
    const pistola = new Pistola(3);

    pistola.disparar(buque);
    pistola.disparar(buque);
    expect(buque.estaVivo()).toBe(true);
    pistola.disparar(buque);

    expect(buque.estaVivo()).toBe(false);
  });

  it("reduce el daño según el porcentaje del escudo", () => {
    const soldado = new Soldado();
    soldado.armarEscudo(new Escudo(50));

    new Pistola().disparar(soldado);

    expect(soldado.estaVivo()).toBe(true);
    expect(soldado.vida).toBe(50);
  });

  it("rechaza porcentajes de escudo inválidos", () => {
    expect(() => new Escudo(101)).toThrow(RangeError);
  });

  it("descuenta las municiones en cada uso", () => {
    const objetivo = new Soldado();
    const arma = new Ametralladora(2);

    arma.disparar(objetivo);
    arma.disparar(objetivo);

    expect(arma.municiones).toBe(0);
  });

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
