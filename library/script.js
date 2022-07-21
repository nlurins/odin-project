


let myLibrary = [];
//const addBook = new Book();

//function Book(title, author, pages, isRead){
    //this.title = title;
    //this.author = author;
    //this.pages = pages;
    //this.isRead = isRead;
//}
class Book {
    constructor(title,author,pages,isRead) {
        this.title = title;
        this.author=author;
        this.pages=pages;
        this.isRead = isRead;
    }
    addToLibrary () {
        if(myLibrary.some(e => e.title === this.title) === false){
            myLibrary.push(this);
            table();
          }
    }
}



function getInput(){
  let x = document.getElementById("library");
  const addBook = new Book();
  addBook.title = x.elements.title.value;
  addBook.author = x.elements.author.value;
  addBook.pages = x.elements.pages.value;
  addBook.isRead = x.elements.isRead.value;
  addBook.addToLibrary();
  
}

function table(){
    if(myLibrary.length >= 0){
        while(booklist.firstChild){
            booklist.removeChild(booklist.lastChild);
        }
        for(let i=0; i<myLibrary.length; i++){
            
            const card =  `
                                <h2>${myLibrary[i].title}</h2>
                                <h3>${myLibrary[i].author}</h3>
                                <h3>${myLibrary[i].pages}</h3>
                                <div class="button" onclick="removeBook(${i})">REMOVE BOOK</div>
                            `;
            const booklist = document.querySelector('#booklist');
            
            const elem = document.createElement('div');
            elem.id = `${i}`;
            elem.className = "book";
            elem.innerHTML = card;
            booklist.appendChild(elem);
            
        }
        
    }
    
}


function removeBook(e){
    myLibrary.splice(e, 1);
    table();
}

function toggleOn(){
    let hidden = document.querySelector('#hide');
    hidden.style.display= "block";
    let btn = document.querySelector('#toggle');
    btn.classList.add("invisible");
}
function toggleOff(){
    let nothidden = document.querySelector('#hide');
    nothidden.style.display="none";
    let btn = document.querySelector('#toggle');
    btn.classList.remove("invisible");
    getInput();
}