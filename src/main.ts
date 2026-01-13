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

const greetUser = (
  name: string,
  greeting: string = "Hej",
  isShouting?: boolean,
): string => {
  const greet: string = `${greeting}, ${name}!`;

  return isShouting ? greet.toUpperCase() : greet;
};

const greet1: string = greetUser("Alba");
const greet2: string = greetUser("Billy", "Howdy");
const greet3: string = greetUser("Kalle", "Tjena", true);

console.log(`Bra med namn: ${greet1}`);
console.log(`Med namn o egen hälsning: ${greet2}`);
console.log(`Med namn, egen hälsning o skrik: ${greet3}`);

// Steg 3: Detektiven (Type Guards)

// Steg 4: Minnes-experiment (Object vs Primitiver)

// Steg 5: Slutuppgift - "Varukorgen"
