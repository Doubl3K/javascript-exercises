const reverseString = function(str) {
let revstr="";
let x=0;
let strpos = str.length-1;
for (var i = 0; i < str.length; i++) {
  revstr = revstr +str.charAt(strpos);
  strpos --;
  x++;
}

return revstr;
};

module.exports = reverseString;
