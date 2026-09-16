# Call of Test

Ejercicio de POO en TypeScript para modelar un combate entre soldados, tanques y buques.

## Reglas implementadas

- Todos los combatientes pueden disparar y recibir disparos.
- Un soldado tiene 100 puntos de vida, un tanque 200 y un buque 300.
- La pistola hace 100 puntos de daño y la ametralladora hace 50.
- Un escudo reduce el daño según su porcentaje, entre 0% y 100%.
- Las armas consumen una munición por disparo y no hacen daño cuando se agotan.

## Ejecutar

```bash
npm install
npm test
npm run typecheck
```

El modelo se encuentra en `src/combate.ts` y los tests unitarios en `tests/combate.test.ts`.
