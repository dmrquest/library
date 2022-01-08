// The Library class should have the following properties:
// > Number of marked as read = readCounts
// > Number of books not read = notReadCounts
// > The next book to read = readNextBook
// > The current book being read = readCurrentBook
// > Last read book = lastReadBook
// > An array containing all the Books = allBooks

class Library {
  constructor(readNextBook, readCurrentBook, lastReadBook) {
    this.readCounts = 0
    this.notReadCounts = 0
    this.readNextBook = readNextBook;
    this.readCurrentBook = readCurrentBook;
    this.lastReadBook = lastReadBook;
    this.allBooks = [];

    this.readBook = [];
    this.notReadBook = []
  }

  // The Library should also be able to have a few methods:
  // > .add(book) --- should add a Book to the list of books
  // > .finishCurrentBook() --- should mark the current read Book as "read". Adjust the last read book, the new currently read book, and the next book to read in the series.

  add(book) {
    this.allBooks.push(book);
    this.notReadBook.push(book);
    this.notReadCounts++
  }

  finishCurrentBook() {
    this.readBook.push(this.readCurrentBook)
    this.lastReadBook = this.readCurrentBook
    this.readCounts++
    this.notReadCounts--
    this.readCurrentBook = null
  }

  read(book) {
    book.dateRead = Date.now()
    this.readCurrentBook = book
    this.notReadBook = this.notReadBook.filter((item) => item.title !== book.title);
    this.readNextBook = this.notReadBook.pop();
  }  
}

// Each Book should have the following instance fields:
// > Author
// > Title
// > Genre
// > Date read

class Book {
  constructor(author, title, genre, dateRead) {
    this.author = author;
    this.title = title;
    this.genre = genre;
    this.dateRead = dateRead;
  }
}
