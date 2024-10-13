import data from "./data.json" with {type: 'json'}

console.log(data);

const notebooks = data.notebooks;
const crafts = data.crafts;
const container = document.getElementsByClassName('grid')[0];
console.log(notebooks);

notebooks.map(notebook => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML =`
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
const num=0;
document.getElementsByClassName('add-btn').addEventListener('click', function() {
    console.log('addEventListener');
    const element = document.getElementById('pay');
    element.innerText(`(${num++})`);
});

// const getProducts = async () => {
//     const response = await fetch(`https://fakestoreapi.com/products/1`);
//     const data = await response.json();
//     console.log(data);
// }
// getProducts();

