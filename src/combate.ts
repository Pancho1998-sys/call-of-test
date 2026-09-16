export class Escudo {
  readonly porcentaje: number;

  constructor(porcentaje: number) {
    if (porcentaje < 0 || porcentaje > 100) {
      throw new RangeError("El porcentaje del escudo debe estar entre 0 y 100");
    }
    this.porcentaje = porcentaje;
  }

  reducirDanio(danio: number): number {
    return danio * (1 - this.porcentaje / 100);
  }
}

export abstract class Combatiente {
  readonly vidaMaxima: number;
  vida: number;
  escudo?: Escudo;

  protected constructor(vidaMaxima: number) {
    this.vidaMaxima = vidaMaxima;
    this.vida = vidaMaxima;
  }

  armarEscudo(escudo: Escudo): void {
    this.escudo = escudo;
  }

  disparar(objetivo: Combatiente, arma: Arma): boolean {
    return arma.disparar(objetivo);
  }

  recibirDisparo(danio: number): void {
    const danioRecibido = this.escudo?.reducirDanio(danio) ?? danio;
    this.vida = Math.max(0, this.vida - danioRecibido);
  }

  estaVivo(): boolean {
    return this.vida > 0;
  }
}

export class Soldado extends Combatiente {
  constructor() {
    super(100);
  }
}

export class Tanque extends Combatiente {
  constructor() {
    super(200);
  }
}

export class Buque extends Combatiente {
  constructor() {
    super(300);
  }
}

export abstract class Arma {
  municiones: number;
  readonly danio: number;

  protected constructor(danio: number, municiones: number) {
    if (danio < 0 || municiones < 0) {
      throw new RangeError("El daño y las municiones no pueden ser negativos");
    }
    this.danio = danio;
    this.municiones = municiones;
  }

  disparar(objetivo: Combatiente): boolean {
    if (this.municiones === 0) {
      return false;
    }
    this.municiones -= 1;
    objetivo.recibirDisparo(this.danio);
    return true;
  }
}

export class Pistola extends Arma {
  constructor(municiones = 1) {
    super(100, municiones);
  }
}

export class Ametralladora extends Arma {
  constructor(municiones = 10) {
    super(50, municiones);
  }
}
