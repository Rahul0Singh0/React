/**
 * 
 * @param { The word which is given as an input and is expected to be guessed } originalWord 
 * @param { Letters which are guessed by the user already } guessedLetters 
 * Ex: originalWord: HUMBLE
 *     guessedLetters: {'H', 'M', 'E'}
 *     
 *     return -> "H _ M _ E"
 */

export function getMaskedString(originalWord, guessedLetters) {
    guessedLetters = guessedLetters.map(letter => letter.toUpperCase()); 
    const guessedLetterSet = new Set(guessedLetters);

    // individual letters using split('')
    const result = originalWord.toUpperCase().split('').map(char => {
        if(guessedLetterSet.has(char)) {
            return char;
        } else {
            return '_';
        }
    }); // ['H', '_', 'M', '_', '_', 'E']

    return result; // "H _ M _ _ E"
}