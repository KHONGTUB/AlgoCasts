// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
// reverse("apple") === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  let revstr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revstr = revstr.concat(str[i]);
  }
  return revstr;
}

module.exports = reverse;
