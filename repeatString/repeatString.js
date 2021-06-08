const repeatString = function(str, num) {
exstr = str;
if (num < 0) {
  str = "ERROR";
}

if (num == 0) {
  str = "";
}

for (var i = 1; i < num; i++) {
  str = str + exstr;
}
return str;
};

module.exports = repeatString;
//Done
