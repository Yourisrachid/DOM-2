/* Exercise 1
Write a function that mimics the behaviour of a typewriter.

Using setInterval display the word Keller one character at a time (one letter per second). Once the word is written on the screen clear the interval.
*/

let times = 0;
let word = 'Keller';
let newWord = '';

function typeWriter() {
    let i = 0;
    let interval = setInterval(function() {
        newWord += word.charAt(i);
        console.log(newWord);
        i++;
        if (i === word.length) {
            clearInterval(interval);
        }
    }, 1000);
}

typeWriter();