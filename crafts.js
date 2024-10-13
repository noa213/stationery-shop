import data from "./data.json" with {type: 'json'}
// let page = 'notebooks';
// let href = document.getElementsByTagName('a')
// console.log(href)
const notebooks = data.notebooks;
const crafts = data.crafts;
// console.log(crafts)

const container = document.getElementsByClassName('grid')[0];
// Array.from(href).map(href => href.addEventListener('click', function () {
//     page = href.id;
// }));
// let products = notebooks;
// if (page === 'crafts')
//     products = crafts;
// if (page === 'notebooks')
//     products = notebooks;
// console.log(products)
crafts.map(notebook => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <p class='ptitle'>${notebook.title}</p>
        <img src=${notebook.image} height=100 width=100>
        <div class='card-footer'>
            <p class='new-price'>${notebook.price}</p>
            <p></p>
            <p></p>
            <button class='add-btn'>הוספה לסל</button>
        </div>
        `
    container.appendChild(card);
})
var num = 0;
const btns = document.getElementsByClassName('add-btn')
Array.from(btns).map(btn => btn.addEventListener('click', function () {
    console.log(`addEventListener ${num}`);
    const element = document.getElementById('pay');
    console.log(element);

    element.innerText = `(${++num}) לתשלום`;
}));
// });(btn =>console.log(num++) )
// btn.addEventListener('click', function() {
// console.log('addEventListener');
// const element = document.getElementById('pay');
// element.innerText(`(${num++})`);
// }))

// const getProducts = async () => {
//     const response = await fetch(`https://fakestoreapi.com/products/1`);
//     const data = await response.json();
//     console.log(data);
// }
// getProducts();

