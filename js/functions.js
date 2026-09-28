function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

function isPalindrome(string) {
  const normString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = normString.length - 1; i >= 0; i--) {
    reversedString += normString[i];
  }
  return normString === reversedString;
}

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
isPalindrome('Лёша на полке клопа нашёл ');

function extractNumber(input) {
  const string = input.toString();
  let result = '';
  for (let i = 0; i < string.length; i++) {
    const digit = parseInt(string[i], 10);

    if (!Number.isNaN(digit)) {
      result += string[i];
    }
  }
  if (result === '') {
    return NaN;
  }
  return parseInt(result, 10);
}

extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('агент 007');
extractNumber('а я томат');
extractNumber(2023);
extractNumber(-1);
extractNumber(1.5);
