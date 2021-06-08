const removeFromArray = function(){
let arr = arguments[0];
let delnum;

for (var x = 1; x < arguments.length; x++) {
  delnum = arguments[x];

  for (var i = 0; i < arr.length; i++) {

    if (arr[i] === delnum) {
      arr.splice(i,1);
    }
  }
}
return arr;
};

module.exports = removeFromArray;
