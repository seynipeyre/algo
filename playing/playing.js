var Playing = function () { };

// Calculer le nombre de secondes écoulées depuis minuit
Playing.prototype.secondes = function (heure, minute, seconde) {
  return 0;
};

// Retourne si deux mots sont des anagrammes
Playing.prototype.is_anagram = function (mot, autre_mot) {
  return false;
};

// Retourne si deux mots sont des palindromes
Playing.prototype.is_palindrome = function (mot) {
  return true;
};

// Retourne si deux mots sont des pangrames
Playing.prototype.is_pangram = function (sentence) {
  return true;
};

// Retourne la conversion d'un nombre roman en nombre latin
Playing.prototype.roman_to_arab = function (roman_number) {
  return 1;
};

// Retourne la conversion d'un nombre latin en nombre romain
Playing.prototype.arab_to_roman = function (arab_number) {
  return 'I';
};

module.exports = Playing;
