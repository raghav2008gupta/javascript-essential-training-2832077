import Book from "./Book.js";


const book1 = new Book("A Tale of Two Cities", "Charles Dickens", 1859);
const book2 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);
const book3 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", 1997);
const book4 = new Book("The Little Prince", "Antoine de Saint-Exupéry", 1943);
const book5 = new Book("And Then There Were None", "Agatha Christie", 1939);

const books = [book1, book2, book3, book4, book5]

console.log(books)