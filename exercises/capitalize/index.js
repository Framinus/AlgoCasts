// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// this time, we are going to make a string (no array needed). we will check each letter of the original string to see if it has a space to the left of it. if it does, we capitalize it.
// function capitalize(str) {
//   let newString = str[0].toUpperCase();
//   for (let i = 1; i < str.length; i += 1) {
//     if (str[i - 1] === ' ') {
//       newString += str[i].toUpperCase()
//     } else {
//       newString += str[i];
//     }
//   }
//   return newString;
// }

// this is the strongly preferred solution!
function capitalize(str) {
  // create a words array.
  const words = [];
  // split the string at white spaces and loop through each word, making the first character uppercase and slicing off the rest of the word (so getting rid of the original first character) and then joining the uppercase first letter to the rest of the word.
  for (word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }
  // then join the words array with white spaces. tada!
  return words.join(' ')
}

module.exports = capitalize;
