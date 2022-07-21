

function Book (title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

const john = new Book('1984', 'Orwell', '200', 'not read yet');

console.log(john.info());