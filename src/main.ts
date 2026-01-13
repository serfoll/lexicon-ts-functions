// Steg 1: Syntax-omvandling (old till modern)

function calculateAreaOldschool(width: number, height: number): number {
  return width * height;
}

const calculateAreaModern = (width: number, height: number): number =>
  width * height;

const areaOldschool = calculateAreaOldschool(4, 4);
console.log(`Area old school: ${areaOldschool}`);

const areaModern = calculateAreaModern(3, 6);
console.log(`Area modern: ${areaModern}`);

// Steg 2: Flexibla parametrar

// Steg 3: Detektiven (Type Guards)

// Steg 4: Minnes-experiment (Object vs Primitiver)

// Steg 5: Slutuppgift - "Varukorgen"
