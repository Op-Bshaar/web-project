
class book {
    constructor(id, name, author,catogery=' ', description =' ') {
        this.id = id;
        this.name = name;
        this.author = author;
        this.catogery = catogery;
        this.description = description;
    }
}
function refresh() {
    document.getElementById("searchBar").value = "";
    var container = document.getElementById("books");
    loadBooks(getBooks(), container);
} function loadBorrowedBooks() {
    var container = document.getElementById("books");
    loadBooks(getBorrowedBooks(), container);
}
function loadBooks(books, container) {
    container.innerHTML = '';
    for (book of books) {
        var span = document.createElement("span");
        span.innerHTML = getBookHtml(book);
        container.appendChild(span);
    }
}
function* getBorrowedBooks() {
    x = JSON.parse(localStorage.getItem('borrowedBooks'));
    books = JSON.parse(localStorage.getItem('books'));
    if (x == null || x.length == 0) {
        return [];
    }
    for (id of x) {
        book = books.find((b) => b.id == id);
        yield book;
    }
}
function* getBooks()
{
    books = JSON.parse(localStorage.getItem('books'));
    if (books == null || books.length == 0) {

        books = [new book(1, 'the book', 'omer'), new book(2, 'xyz', 'ali')];
        localStorage.setItem('books', JSON.stringify(books));
        alert('created 2 test books');
    }
    for (book of books) {
        yield book;
    }
}
function addBook() {
    books = JSON.parse(localStorage.getItem('books'));
    n = document.getElementsByName('Name')[0].value;
    id = document.getElementsByName('Id')[0].value;
    author = document.getElementsByName('Author')[0].value;
    category = document.getElementsByName('Category')[0].value;
    description = document.getElementsByName('Description')[0].value;
    books.push(new book(id, n, author, category, description));
    localStorage.setItem('books', JSON.stringify(books));
}
function getId() {
    const params = new URLSearchParams(document.location.search);
    const id = params.get("id");
    return id;
}
function remove() {

    const id = getId();
    books = JSON.parse(localStorage.getItem('books'));
    if (books == null || books.length == 0) return;
    for (i = 0; i < books.length; i++) {
        const b = books[i];
        if (b.id == id) {
            books.splice(i,1);
        }
    }
    localStorage.setItem('books', JSON.stringify(books));
    window.location.href = 'LandingPage.html';

}
function borrow() {
    const id = getId();
    borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks'));
    if (borrowedBooks == null || borrowedBooks.length == 0) {
        borrowedBooks = [];
    }
    borrowedBooks.push(id);
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
}
function getBookHtml(book) {
    return `<div onclick ="window.location.href='BookDetails.html?id=${book.id}'" class="book">Name: ${book.name}<br />Author: ${book.author}<br /></div >`;
}
function loadBook() {
    const id = getId();
    books = JSON.parse(localStorage.getItem('books'));
    if (books == null ) {
        return;
    }
    for (b of books) {
        if (b.id == id) {
            document.getElementById('BookBlock').style.display = '';
            document.getElementById('error').style.display = 'none';
            document.getElementById("title").innerHTML = b.name;
            document.getElementById("author").innerHTML = b.author;
            document.getElementById("catogery").innerHTML = b.catogery;
            document.getElementById("description").innerHTML =b.description;
            return;
        }
    }
    document.getElementById('BookBlock').style.display = 'none';
    document.getElementById('error').style.display = '';
}
function search() {

}
