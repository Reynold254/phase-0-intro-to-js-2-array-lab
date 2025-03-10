// 1. Define the cats array with initial values
const cats = ["Milo", "Otis", "Garfield"];

// 2. Function to destructively append a cat
function destructivelyAppendCat(name) {
  cats.push(name);
}

// 3. Function to destructively prepend a cat
function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// 4. Function to destructively remove the last cat
function destructivelyRemoveLastCat() {
  cats.pop();
}

// 5. Function to destructively remove the first cat
function destructivelyRemoveFirstCat() {
  cats.shift();
}

// 6. Function to append a cat without modifying the original array
function appendCat(name) {
  return [...cats, name];
}

// 7. Function to prepend a cat without modifying the original array
function prependCat(name) {
  return [name, ...cats];
}

// 8. Function to remove the last cat without modifying the original array
function removeLastCat() {
  return cats.slice(0, -1);
}

// 9. Function to remove the first cat without modifying the original array
function removeFirstCat() {
  return cats.slice(1);
}
