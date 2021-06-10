const ftoc = function(f) {
let c;

c = ((f-32)*(5/9));
c = Math.round(c*10) /10;
return c;

};

const ctof = function(c) {
let f;

f = c*(9/5)+32;
f = Math.round(*10)/10;
return f;
};

module.exports = {
  ftoc,
  ctof
};
