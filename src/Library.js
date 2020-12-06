function createLibrary(libName){
var newLibrary = {
  name: libName,
  shelves: {
    fantasy:[],
    fiction:[],
    nonFiction:[]
  }
}
return newLibrary;
}
function addBook(library, book){
  if(book.genre === 'fantasy'){
    library.shelves.fantasy.push(book)
  } else if(book.genre === 'fiction'){
    library.shelves.fiction.push(book)
  } else if(book.genre === 'nonFiction'){
    library.shelves.nonFiction.push(book)
  }
  return book;
}
function checkoutBook (library, bookTitle, bookGenre){
  var libName = library.name;
  var updatedLib;
  var foundBook = false;
    for(var i = 0; i < library.shelves[bookGenre].length; i ++){
      if(library.shelves[bookGenre][i].title === bookTitle){
      library.shelves[bookGenre].splice(i, 1);
      foundBook = true;
      }
    }if(foundBook === true){
      return `You have now checked out ${bookTitle} from the ${libName}`
    } else{
      return `Sorry, there are currently no copies of ${bookTitle} available at the ${libName}`;
    }
  }






module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
