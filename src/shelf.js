function shelfBook(book, bookShelf){
  if(bookShelf.length < 3){
    var shelfed = bookShelf.unshift(book);
    return shelfed
  }
}
function unshelfBook (book, shelf){
  var bookIndex = shelf.indexOf(book);
  bookIndex += 2;
  var bookTitle = shelf[bookIndex].title;
  var updateShelf = shelf.splice(bookIndex, 1)
  return updateShelf;
}
function listTitles (shelf){
  var titles = [];
  var finalString =''
  for(var i = 0 ; i < shelf.length; i++){
    titles.push(shelf[i].title);
    finalString = titles.join(', ');
  }
return finalString;
};
function searchShelf(shelf, bookTitle){
  for(var i = 0; i < shelf.length; i++){
    var currentTitle = shelf[i].title;
  }
  if(currentTitle === bookTitle){
      return true;
    } else{
      return false;
    }
  }

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
