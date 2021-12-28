const Book = class {
    constructor(
        name,
        author,
        yearPublished
    ) {
        this.name = name;
        this.author = author;
        this.yearPublished = yearPublished;
        this.ageOfBook = this.ageOfBook()
    }
    ageOfBook() {
        let currentYear = new Date();
        let age = currentYear.getFullYear() - this.yearPublished;
        return (age > 1) ? age + " years" : age + " year";
    }
}

export default Book;