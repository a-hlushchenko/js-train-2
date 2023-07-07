//Задача 1: Напишіть функцію, яка буде виконувати js код який передали в функцію через аргумент в форматі тексту

function calculateExpression(expression) {
  return typeof expression === "string"
    ? eval(expression)
    : "Argument is not a string";
}

console.log("Завдання 1 ====================================");
console.log(
  'calculateExpression("3 + 5 * 2")',
  calculateExpression("3 + 5 * 2")
); // Виведе 13

// Задача 2: Напишіть функцію, яка приймає рядок та повертає число з цього рядка або повідомлення про помилку.

function getNumberFromString(s) {
  s = parseFloat(s);
  if (isNaN(s)) {
    return "Couldn't extract a number from the provided string.";
  }

  return s;
}

// Виводимо результати виклику функції
console.log("Завдання 2 ====================================");
console.log(
  'getNumberFromString("100.5 apples")',
  getNumberFromString("100.5 apples")
); // Виведе 100.5
console.log(
  'getNumberFromString("No numbers here")',
  getNumberFromString("No numbers here")
); // Виведе повідомлення про помилку

// Задача 3: Напишіть функцію, яка приймає рядок та повертає ціле число з цього рядка або повідомлення про помилку.

function getIntegerFromString(s) {
  s = parseInt(s);
  if (isNaN(s)) {
    return "Couldn't extract an integer from the provided string.";
  }

  return s;
}

console.log("Завдання 3 ====================================");
console.log(
  'getIntegerFromString("100 apples")',
  getIntegerFromString("100 apples")
); // Виведе 100
console.log(
  'getIntegerFromString("No integers here")',
  getIntegerFromString("No integers here")
); // Виведе повідомлення про помилку

// Задача 4: Напишіть функцію, яка перевіряє, чи є введене число скінченним.

function isNumberFinite(num) {
  if (isFinite(num)) {
    return "The number is finite.";
  }

  return "The number is not finite.";
}

// Виконуємо функцію з різними вхідними даними і виводимо результат.
console.log("Завдання 4 ====================================");
console.log("isNumberFinite(100)", isNumberFinite(100)); // Виведе "The number is finite."
console.log("isNumberFinite(Infinity)", isNumberFinite(Infinity)); // Виведе "The number is not finite."

// Задача 5: Напишіть функцію, яка перевіряє, чи є введене значення NaN.

// Створюємо функцію з назвою isValueNaN, яка приймає один аргумент - value
function isValueNaN(value) {
  if (isNaN(value)) {
    return "The value is NaN.";
  }

  return "The value is not NaN.";
}

// Виконуємо функцію з різними вхідними даними і виводимо результат.
console.log("Завдання 5 ====================================");
console.log("isValueNaN(NaN)", isValueNaN(NaN)); // Виведе "The value is NaN."
console.log("isValueNaN(100)", isValueNaN(100)); // Виведе "The value is not NaN."

// Задача 6: Напишіть функцію, яка створює об'єкт URL.

function createURLObject(urlStr) {
  return encodeURI(urlStr);
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 6 ====================================");
console.log(
  'createURLObject("https://example.com")',
  createURLObject("https://example.com")
); // Виведе URL об'єкт

// Задача 7: Напишіть функцію, яка кодує компонент URL.

function encodeURLComponent(urlComponent) {
  return encodeURIComponent(urlComponent);
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 7 ====================================");
console.log(
  'encodeURLComponent("Hello World!")',
  encodeURLComponent("Hello World!")
); // Виведе "Hello%20World!"

// Задача 8: Напишіть функцію, яка кодує URL.

function encodeURL(url) {
  return encodeURI(url);
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 8 ====================================");
console.log(
  'encodeURL("https://ex ample.com")',
  encodeURL("https://ex ample.com")
); // Виведе "https://ex%20ample.com"

// Задача 9: Напишіть функцію, яка декодує закодований компонент URL.

function decodeURLComponent(urlComponent) {
  return decodeURIComponent(urlComponent);
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 9 ====================================");
console.log(
  'decodeURLComponent("Hello%20World%21")',
  decodeURLComponent("Hello%20World%21")
); // Виведе "Hello World!"

// Задача 10: Напишіть функцію, яка декодує закодований URL.

function decodeURL(url) {
  return decodeURI(url);
}

// Виконуємо функцію з вхідними даними і виводимо результат.
console.log("Завдання 10 ====================================");
console.log(
  'decodeURL("https://ex%20ample.com")',
  decodeURL("https://ex%20ample.com")
); // Виведе "https://ex ample.com"
