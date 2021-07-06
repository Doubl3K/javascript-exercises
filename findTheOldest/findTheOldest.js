const findTheOldest = function(people) {
  const age = people.sort(function(b,a){
    if (a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth) {
      return -1;
    }
    else {
      return 1;
    }
  });
  console.log(age);
  let last = age.pop();
  return last;
}

module.exports = findTheOldest;
