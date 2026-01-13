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

const countStrings = (input: string | string[]): number =>
  Array.isArray(input) ? input.length : 1;

console.log(countStrings(["Äpple", "Banan"]));
console.log(countStrings("Howdy"));

// Steg 4: Minnes-experiment (Object vs Primitiver)

const price: number = 100;
const product: { price: number } = { price: 100 };

const applyDiscount = (p: number, prod: { price: number }) => {
  p = 50;
  prod.price = 50;
};

applyDiscount(price, product);

console.log(`price: ${price} | product.price: ${product.price}`);
// `price` ändras inte för den är `pass by value`: funktionen jobbar med en kopia av variabeln medans product.price ändras för den är `pass by reference`. I JS/TS blir icke-primitiva typer såsom (object och array) pass by reference automatiskt.

// Steg 5: Slutuppgift - "Varukorgen"

const cart: { name: string; price: number }[] = [
  { name: `Kaffe Bröd`, price: 15 },
  { name: `Grekisk sallad`, price: 70 },
];

const calculateTotal = (cart: { name: string; price: number }[]): number => {
  let total: number = 0;

  cart.forEach((item) => {
    total += item.price;
  });

  return total;
};

const addProject = (
  cart: { name: string; price: number }[],
  item: { name: string; price: number },
) => cart.push(item);

// Köp genomförd

let amountToPay = calculateTotal(cart);
console.log(amountToPay);

addProject(cart, { name: "Kaffe", price: 40 });

amountToPay = calculateTotal(cart);
console.log(amountToPay);
