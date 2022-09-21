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
        <td><a href="#" class="btn btn-info btn-sm edit">Editar</a></td>
        `
    
    list.appendChild(row) 
}

async function showProdutos(){
    let response = await axios.get("http://localhost:3000/produtos");
    let data = response.data;

    data.forEach(() => { 
        createProdutoOnRow()
    })
}

showProdutos()


