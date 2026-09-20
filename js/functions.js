/* eslint-disable no-console */
/* eslint-disable semi */

const isStringShorterThan = function(string, maxLength) {
  return string.length <= maxLength;
};

// Строка короче 20 символов
console.log(isStringShorterThan('проверяемая строка', 20)); // Выведет: true

// Длина строки равна 18 символов
console.log(isStringShorterThan('проверяемая строка', 18)); // Выведет: true

// Строка длиннее 10 символов
console.log(isStringShorterThan('проверяемая строка', 10)); // Выведет: false
const isPalindrome = function(string) {
  string = string.replaceAll(' ', '').toLowerCase();
  let result = '';
  for (let i = string.length-1; i >= 0; i--) {
    result += string[i];
  }
  return result === string;
}

// Строка является палиндромом
console.log(isPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(isPalindrome('ДовОд')); // true
// Это не палиндром
console.log(isPalindrome('Кекс'));  // false
// Это палиндром
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true
