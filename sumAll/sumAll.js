const sumAll = function(start, end) {

//console.log(typeof end);
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
//  console.log(start);
//  console.log(end);
}
let addition = start;
  while (start < end) {
    addition = addition + (start+1);
//    console.log(start+"start");
//    console.log(addition+"add");
    start++;
  }
return addition;

};

module.exports = sumAll;










/*
1) get 2 integers and save them
2) put the first integer as start of my Loop
    and the second as end of the Loop
3) use an incrementing number that is one higher than
    the starting integer
    ...oder so...
4) save addition in incrementing number object to keep adding
    vieleicht x = x +(x+1)
5) return result of addition
*/
