const sumAll = function(start, end) {

if (typeof start && typeof end !== "number") {
  return "ERROR"
}
if (start < 0){
  return "ERROR";
}
if (start > end) {
  let highswitch = start;
  start = end;
  end = highswitch;
}
let addition = start;
  while (start < end) {
    addition = addition + (start+1);
    start++;
  }
return addition;

};

module.exports = sumAll;
