const getTheTitles = function(books) {
  const bookTitleArr = books.map(function (mapping){
    let titleName = mapping.title;
    return titleName;
  });
  return bookTitleArr;
};

module.exports = getTheTitles;
