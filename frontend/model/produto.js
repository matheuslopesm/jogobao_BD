const pnomeInput = document.getElementById("primaryName");
const valueInput = document.getElementById("value");
const companyInput = document.getElementById("company");
const descriptionInput = document.getElementById("description");

const btn = document.querySelector("#submitBtn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

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
    var produtos = response.data;   

    produtos.forEach(function (produto, i) {
        console.log(`produto ${i}`, produto, i)
        const row = document.createElement('tr');
        row.id = `rowId${produto.numeroserie}`;

        var numeroserie = document.createElement('th');
        const pnome = document.createElement('td');
        const valor = document.createElement('td');
        const empresa = document.createElement('td');
        const descricao = document.createElement('td');
        const edit = document.createElement('td');

        numeroserie.textContent = produto.numeroserie;
        pnome.textContent = produto.pnome;
        valor.textContent = produto.valor;
        empresa.textContent = produto.empresa;
        descricao.textContent = produto.descricao;

        row.appendChild(numeroserie);
        row.appendChild(pnome);
        row.appendChild(valor);
        row.appendChild(empresa);
        row.appendChild(descricao);
        row.appendChild(edit);

        var editBtn = document.createElement('a');
        editBtn.type = "button";
        editBtn.classList.add(`editButton${produto.numeroserie}`, "btn", "btn-info", "btn-sm", "edit");
        editBtn.textContent = "Editar";

        var deleteBtn = document.createElement('a');
        deleteBtn.type = "button";
        deleteBtn.classList.add(`deleteButton${produto.numeroserie}`, "btn", "btn-danger", "btn-sm", "delete");
        deleteBtn.textContent = "Deletar";

        edit.appendChild(deleteBtn);
        edit.appendChild(editBtn);
        list.appendChild(row);

        deleteBtn.addEventListener("click", () => {
            row.remove();
            produtosState.splice(i, 1);

            axios.delete(`http://localhost:3000/produtos/${produto.numeroserie}`);
        });
        
        editBtn.addEventListener("click", () => {
            document.querySelector(".modal").classList.add(`myModal${produto.numeroserie}`);
            document.querySelector(`.myModal${produto.numeroserie}`).style.display = "block";
            console.log(`modal [${produto.numeroserie}] abrindo`);

            console.log(produtosState);
            openModal(produtosState.find((artefato) => {
                return artefato.numeroserie === produto.numeroserie;
            }));
        });
    });

    function openModal(produto){ 
        var pnomeInputModal = document.getElementById("primaryName_modal");
        var valueInputModal = document.getElementById("value_modal");
        var companyInputModal = document.getElementById("company_modal");
        var descriptionInputModal = document.getElementById("description_modal");

        pnomeInputModal.value = produto.pnome;
        valueInputModal.value = produto.valor;
        companyInputModal.value = produto.empresa;
        descriptionInputModal.value = produto.descricao;

        var submitModal = document.querySelector("#submitModal");
        var produtoRow = document.getElementById(`rowId${produto.numeroserie}`)

        submitModal.addEventListener("click", submitOpenedModal);

        function submitOpenedModal(evento){
            evento.preventDefault();
            console.log(evento)
            produtoRow.childNodes[1].innerHTML = pnomeInputModal.value;
            produtoRow.childNodes[2].innerHTML = valueInputModal.value;
            produtoRow.childNodes[3].innerHTML = companyInputModal.value;
            produtoRow.childNodes[4].innerHTML = descriptionInputModal.value;

            produtosState = produtosState.map((item) => {
                if(item.numeroserie === produto.numeroserie){
                    return { 
                        pnome: pnomeInputModal.value,
                        valor: valueInputModal.value,
                        empresa: companyInputModal.value,
                        descricao: descriptionInputModal.value 
                    };
                }else{
                    return item;
                }
            });

            console.log(`submitando modal ${produto}`);

            axios.put(`http://localhost:3000/produtos/${produto.numeroserie}`, {
                pnome: pnomeInputModal.value,
                valor: valueInputModal.value,
                empresa: companyInputModal.value,
                descricao: descriptionInputModal.value
            });

            document.querySelector(`.myModal${produto.numeroserie}`).style.display = "none";
        }
    };
}

var produtosState = [];

axios
    .get("http://localhost:3000/produtos")
    .then((produtos) => {
        createProdutoOnRow(produtos);
        produtosState = produtos.data;        
    });


function openMenu(){
    document.body.classList.add('menu-expanded')
}
      
function closeMenu(){
    document.body.classList.remove('menu-expanded')
}