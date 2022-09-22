const pnomeInput = document.getElementById("primaryName");
const valueInput = document.getElementById("value");
const companyInput = document.getElementById("company");
const descriptionInput = document.getElementById("description");

const btn = document.querySelector("#submitBtn");

btn.addEventListener("click", (e) => {

    axios.post("http://localhost:3000/produtos", {
        pnome: pnomeInput.value,
        valor: valueInput.value,
        empresa: companyInput.value,
        descricao: descriptionInput.value
    })
    .then((response) => {
        console.log(response.data);  
    });
})

function createProdutoOnRow(response){
    const list = document.querySelector('#product-list');
    let produtos = response.data;   

    for(let produto of produtos) {
        const row = document.createElement('tr');
        const pnome = document.createElement('td');
        const valor = document.createElement('td');
        const empresa = document.createElement('td');
        const descricao = document.createElement('td');
        const editButtons = document.createElement('td');

        pnome.textContent = produto.pnome;
        valor.textContent = produto.valor;
        empresa.textContent = produto.empresa;
        descricao.textContent = produto.descricao;

        row.appendChild(pnome);
        row.appendChild(valor);
        row.appendChild(empresa);
        row.appendChild(descricao);
        row.appendChild(editButtons)

        editButtons.innerHTML = `
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        <td><a href="#" class="btn btn-info btn-sm edit">Editar</a></td>
        `
        
        list.appendChild(row);
    }
}

axios
    .get("http://localhost:3000/produtos")
    .then(createProdutoOnRow)



