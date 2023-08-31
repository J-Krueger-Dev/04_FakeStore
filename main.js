let navbarCatergories= document.querySelector('.navbar-nav');
let displayDiv=document.getElementById('display');
let fakeStoreAPI='https://fakestoreapi.com/products/';

const fakeStore = async (endpoint) =>{
  let result = await fetch(fakeStoreAPI + endpoint);
  let storeData = await result.json();
  console.log(storeData);
}
window.onload = (event) =>{
  fakeStore('')
};

