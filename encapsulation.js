function Book(name, author){
    var _name = name;
    var _author = author;
    this.available = true;
    
    this.borrow = function (person){
        this.available = false;
        console.log(`${person} wypożyczył książkę ${_name} autora ${_author}.`)
    }
    this.bookName = function(){return _name}
    this.bookAuthor = function(){return _author}
    }

var book1 = new Book ('Hobbit', 'Tolkien')
console.log(book1)
book1.borrow('Paweł')
console.log(book1.name)

var book2 = new Book ('Harry Potter','J.K. Rowling')
book2.borrow('Kasia')
console.log(book2.name)

console.log(book2.bookAuthor())

