let navbarElectronics =document.getElementById('electronics');
let navbarJewelery =document.getElementById('jewelery');
let navbarMen =document.getElementById('men')
let navbarWomen =document.getElementById('women')
let displayDiv=document.getElementById('display');
let fakeStoreAPI='https://fakestoreapi.com/products/category/';

const fakeStore = async (endpoint) =>{
  let result = await fetch(fakeStoreAPI + endpoint);
  let storeData = await result.json();
  console.log(storeData);
  displayCards(storeData)
}

function displayCards(){
  // CREATE NEW ELEMENTS
/* 
  1. crete the new empty element
  2. edit that element
    -adding text
    -changing styling
  3. add the element to the web page
*/
}

navbarElectronics.addEventListener('click', () =>{
  fakeStore('electronics')
})
navbarJewelery.addEventListener('click', () =>{
  fakeStore('jewelery')
})
navbarMen.addEventListener('click', () =>{
  fakeStore(`men's clothing`)
})
navbarWomen.addEventListener('click', () =>{
  fakeStore(`women's clothing`)
})


window.onload = (event) =>{
  fakeStore('electronics')
  fakeStore('jewelery')
  fakeStore(`men's clothing`)
  fakeStore(`women's clothing`)
};
// products?sort=asc //!maybe use this//// url + `/category/jewelery?sort=asc`
