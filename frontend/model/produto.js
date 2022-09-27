const pnomeInput = document.getElementById("primaryName");
const valueInput = document.getElementById("value");
const companyInput = document.getElementById("company");
const descriptionInput = document.getElementById("description");

const btn = document.querySelector("#submitBtn");

btn.addEventListener("click", (e) => {
    e.preventDefault()

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
        // row.appendChild(editButtons);

        // editButtons.innerHTML = `
        // <td><a href="#" id="deleteBtn" class="btn btn-danger btn-sm delete">X</a></td>
        // <td><a href="#" id="editBtn" class="btn btn-info btn-sm edit">Editar</a></td>
        // `
        
        var editBtn = document.createElement('a');
        editBtn.type = "button";
        editBtn.classList.add(`editButton${produto.numeroserie}`, "btn", "btn-info", "btn-sm", "edit");
        editBtn.textContent = "Editar";

        editBtn.onclick = (function openModal() { 
            document.querySelector(".modal").classList.add(`myModal${produto.numeroserie}`)
            document.querySelector(`.myModal${produto.numeroserie}`).style.display = "block";
            console.log(`modal [${produto.numeroserie}] abrindo`)

            var pnomeInputModal = document.getElementById("primaryName_modal");
            var valueInputModal = document.getElementById("value_modal");
            var companyInputModal = document.getElementById("company_modal");
            var descriptionInputModal = document.getElementById("description_modal");

            pnomeInputModal.value = produto.pnome;
            valueInputModal.value = produto.valor;
            companyInputModal.value = produto.empresa;
            descriptionInputModal.value = produto.descricao;

            // axios.put(`http://localhost:3000/produtos/${produto.numeroserie}`, {
            //     pnome: pnomeInputModal.value,
            //     valor: valueInputModal.value,
            //     empresa: companyInputModal.value,
            //     descricao: descriptionInputModal.value
            // })
        });

        edit.appendChild(editBtn);
        list.appendChild(row);

        // function updateProdutoOnRow(){

        //     // var submitModal = document.querySelector(".modal");

        //     // submitModal.addEventListener("click", updateWithModal);

        //     // for (var j = 0 ; j < submitModal.length; j++) {
        //     //     submitModal[i].addEventListener("click", updateWithModal)
        //     // }
        // }

        // function updateWithModal(){

        //     var pnomeInputModal = document.getElementById("primaryName_modal");
        //     var valueInputModal = document.getElementById("value_modal");
        //     var companyInputModal = document.getElementById("company_modal");
        //     var descriptionInputModal = document.getElementById("description_modal");

        //     axios.put(`http://localhost:3000/produtos/${produto.numeroserie}`, {
        //         pnome: pnomeInputModal.value,
        //         valor: valueInputModal.value,
        //         empresa: companyInputModal.value,
        //         descricao: descriptionInputModal.value
        //     })
        //     .then((response) => {
        //         console.log(response.data);  
        //     });
        // }
    })

    // produtos.forEach(function (produto, i) {

    //     var updateBtn = document.getElementsByClassName("editBtn");

    //     updateBtn[0].addEventListener("click", (e) => {});

    //     var updateModal = document.querySelector(".modal");

    //     for (var i = 0 ; i < updateBtn.length; i++) {
    //         updateBtn[i].addEventListener("click" , (e) => {
    //             updateModal.style.display = 'block'; 

    //             document.querySelector("#primaryName_modal").value = produto.pnome;
    //             document.querySelector("#value_modal").value = produto.valor;
    //             document.querySelector("#company_modal").value = produto.empresa;
    //             document.querySelector("#description_modal").value = produto.descricao;
    //         }); 
    //     } 
    // })
}

axios
    .get("http://localhost:3000/produtos")
    .then(createProdutoOnRow)
;

