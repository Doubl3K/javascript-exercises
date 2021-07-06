const fibonacci = function(inputLength) {
if (inputLength < 0) {
  return "OOPS";
}

let i = 2
let fib = [1,1];
 while (i < inputLength) {
   fib[i] = fib[i-1]+fib[i-2];
   i++
 }
  return fib.pop();
};

module.exports = fibonacci;
