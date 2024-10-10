import data from "./data.json" with {type: 'json'}

console.log(data);

const notebooks = data.notebooks;
const crafts = data.crafts;
const container = document.getElementById('container');
console.log(notebooks);

notebooks.map(notebook=>{
    const product = document.createElement('div');
    product.classList.add('product');
    product.innerHTML=
        `<p>${notebook.title}</p>
        <p>${notebook.price}</p>
        ${notebook.image}
        <img src=${notebook.image}>

        `
        // <img src=${notebook.image}/>

    container.appendChild(product);

})
// const getProducts = async () => {
//     const response = await fetch(`https://fakestoreapi.com/products/1`);
//     const data = await response.json();
//     console.log(data);
// }
// getProducts();

