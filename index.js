const pressed = [];
const secretCode = 'natalie';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  // gives us the exact length of the secretCode, we don't need to push anyting additional to the array
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  // turn it into a string and if the secret code is included do what's inside the if statement 
  if (pressed.join('').includes(secretCode)) {
    // adds random rainbows and unicorns
    cornify_add();
  }
});