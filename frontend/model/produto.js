const pnomeInput = document.getElementById("primaryName")
const valueInput = document.getElementById("value")
const companyInput = document.getElementById("company")
const descriptionInput = document.getElementById("description")
const btn = document.querySelector("#submitBtn")

btn.addEventListener("click", (e) => {
    e.preventDefault()

    axios.post("http://localhost:3000/produtos", {
        pnome: pnomeInput.value,
        valor: valueInput.value,
        empresa: companyInput.value,
        descricao: descriptionInput.value
    })
   .then((response) => {
        console.log(response.data)
    });

    createProdutoOnRow() 
})

function createProdutoOnRow(){
    const list = document.querySelector('#product-list');
    const row = document.createElement('tr');
        
    row.innerHTML = `
        <td>${pnomeInput.value}</td>
        <td>${valueInput.value}</td>
        <td>${companyInput.value}</td>
        <td>${descriptionInput.value}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        <td><a href="#" class="btn btn-info btn-sm edit">Edit</a></td>
        `
    list.appendChild(row);
}


// const creatingProduto = () => {
//     axios.post("http://localhost:3000/produtos", {
//         pnome: pnomeInput.value,
//         valor: valueInput.value,
//         empresa: companyInput.value,
//         descricao: descriptionInput.value
//     })
//     .then((response) => {
//         console.log(response.data)
//     });
// }

// const readingProduto = () => {
//     axios.get('http://localhost:3000/produtos')
//     .then(response => {
//         const products = response.data.data;
//         console.log(`GET list products`, products);
//     })
// }

// const deletingProduto = (numeroserie) => {
//     axios.delete(`http://localhost:3000/produtos/${numeroserie}`
//         .then(response => {
//             console.log(`DELETE: produto is removed`, numeroserie)
//         }))
// }

// const updatingProduto = (atualizedProduto, numeroserie) => {
//     axios.put(`http://localhost:3000/produtos/${numeroserie}`, atualizedProduto)
//         .then(response => {
//             console.log(response.data)
//         })
// }

// btn.addEventListener("click", (e) => {
//     e.preventDefault();
//     const pname = pnomeInput.value
//     const value = valueInput.value
//     const company = companyInput.value
//     const description = descriptionInput.value

//     postMethod(pname, value, company, description)


// })

// function postMethod(pname, value, company, description){

// }

// // function readMethod(){
// //     axios.get("http://localhost:3000/produtos")
// //         .then(response => {
// //             console.log(response.data)
// //         })
// // }

// // function atualizeMethod(){
// //     axios.put(`http://localhost:3000/produtos/${numeroserie}`)
// //         .then(response => {
// //             console.log(response.data)
// //         })
// // }

//     // const deleteProduto = (prod, numeroserie) => {
//     //     axios.delete(`http://localhost:3000/produtos/${numeroserie}`)
//     //         .then(response => {
//     //             console.log(response.data)
//     //         })
//     // }

// function showAlert(text, className){
//     const div = document.createElement('div')

//     div.className = `alert alert-${className}`

//     div.appendChild(document.createTextNode(text))

//     // Insere a mensagem de alerta antes do form
//     const container = document.querySelector('.container')
//     const form = document.querySelector('#printer-form')
//     container.insertBefore(div, form)

//     // Remove a mensagem após 3s
//     setTimeout(() => document.querySelector('.alert').remove(), 3000)
// }

// function showProdutos(){
//     const produtos = await )