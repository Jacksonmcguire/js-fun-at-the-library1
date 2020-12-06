function createTitle(title) {
return 'The ' + title;
}

function buildMainCharacter(charName, charAge, charPronouns){
  var newChar = {
    name: charName,
    age: charAge,
    pronouns: charPronouns,
  }
  return newChar
}
function saveReview(review, array){
    if(array.indexOf(review) < 0){
      return array.push(review)
    }
};
function calculatePageCount (title){
  var stringCount = title.length;
  return stringCount * 20;
};
function writeBook (title, character, genre){
  var book ={
    title: title,
    mainCharacter: character,
    pageCount: calculatePageCount(title),
    genre: genre
  }
  return book;
}
function editBook(bookTitle){
  var originalCount = bookTitle.pageCount;
  bookTitle.pageCount = (originalCount * .75) 
  return bookTitle;
};
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
