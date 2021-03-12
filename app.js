var books = document.querySelectorAll("#book-list li .name");

Array.from(books).forEach(function (book) {
  book.textContent += " (book title)";
});

const bookList = document.querySelector("#booklist");
bookList.innerHTML = "<h2>Books and more books...</h2>";

const wmf = document.querySelector("#book-list li:nth-child(2). name");

var books = document.querySelector("#book-list li .name");
console.log(books);

books = document.querySelectorAll("#book-list li .name");
console.log(books);

Array.from(books).forEach(function (book) {
  console.log(book);
});

var titles = document.getElementsByClassName("title");

console.log(Array.isArray(titles));
console.log(Array.isArray(Array.from(titles)));
