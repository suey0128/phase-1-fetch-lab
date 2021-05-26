function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json))
        // console.log(json);
  .catch(error => console.error('Error:', error))
}




function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});




//For practice 

// console.log(json['4']); // the 5th book
    
// json.forEach(SecLevelElem => {
//   // console.log(SecLevelElem);
//   // console.log(Object.values(SecLevelElem.characters));
//   let xxx = Object.values(SecLevelElem.characters);
//   let count = 1030;
//   if (xxx.length < count) {
//     count = count - xxx.length
//   } else {
//     console.log(xxx[count]);
//   }    
// }) // The 1031st character in the series 

// let totalPage = 0;  
// json.forEach(SecLevelElem => { 
//   totalPage += SecLevelElem.numberOfPages;
// }) 
// console.log(totalPage); //The total number of pages of all the books