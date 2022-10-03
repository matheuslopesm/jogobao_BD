const datavendaInput = document.getElementById("datavenda");
const clienteidInput = document.getElementById("clienteid");
const funcionarioidInput = document.getElementById("funcionarioid");

const btn = document.querySelector("#submitBtn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/vendas", {
        datavenda: datavendaInput.value,
        clienteid: clienteidInput.value,
        funcionarioid: funcionarioidInput.value
    })
    .then((response) => {
        console.log(response.data);  
    });
})

function createVendaOnRow(response){
    const list = document.querySelector('#sell-list');
    var vendas = response.data;   

    vendas.forEach(function (venda, i) {
        console.log(`venda ${i}`, venda, i)
        const row = document.createElement('tr');
        row.id = `rowcod${venda.cod}`;

        var cod = document.createElement('th');
        const datavenda = document.createElement('td');
        const clienteid = document.createElement('td');
        const funcionarioid = document.createElement('td');
        const edit = document.createElement('td');

        cod.textContent = venda.cod;
        datavenda.textContent = venda.datavenda;
        clienteid.textContent = venda.clienteid;
        funcionarioid.textContent = venda.funcionarioid;

        row.appendChild(cod);
        row.appendChild(datavenda);
        row.appendChild(clienteid);
        row.appendChild(funcionarioid);
        row.appendChild(edit);

        var editBtn = document.createElement('a');
        editBtn.type = "button";
        editBtn.classList.add(`editButton${venda.cod}`, "btn", "btn-info", "btn-sm", "edit");
        editBtn.textContent = "Editar";

        var deleteBtn = document.createElement('a');
        deleteBtn.type = "button";
        deleteBtn.classList.add(`deleteButton${venda.cod}`, "btn", "btn-danger", "btn-sm", "delete");
        deleteBtn.textContent = "Deletar";

        edit.appendChild(deleteBtn);
        edit.appendChild(editBtn);
        list.appendChild(row);

        deleteBtn.addEventListener("click", () => {
            row.remove();
            vendasState.splice(i, 1);

            axios.delete(`http://localhost:3000/vendas/${venda.cod}`);
        });
        
        editBtn.addEventListener("click", () => {
            document.querySelector(".modal").classList.add(`myModal${venda.cod}`);
            document.querySelector(`.myModal${venda.cod}`).style.display = "block";
            console.log(`modal [${venda.cod}] abrindo`);

            console.log(vendasState);
            openModal(vendasState.find((compra) => {
                return compra.cod === venda.cod;
            }));
        });
    });

    function openModal(venda){ 
        var datavendaInputModal = document.getElementById("datavenda_modal");
        var clienteidInputModal = document.getElementById("clienteid_modal");
        var funcionarioidInputModal = document.getElementById("funcionarioid_modal");

        datavendaInputModal.value = venda.datavenda;
        clienteidInputModal.value = venda.datavenda;
        funcionarioidInputModal.value = venda.datavenda;

        var submitModal = document.querySelector("#submitModal");
        var vendaRow = document.getElementById(`rowcod${venda.cod}`)

        submitModal.addEventListener("click", submitOpenedModal);

        function submitOpenedModal(evento){
            evento.preventDefault();
            console.log(evento)
            vendaRow.childNodes[1].innerHTML = datavendaInputModal.value;
            vendaRow.childNodes[2].innerHTML = clienteidInputModal.value;
            vendaRow.childNodes[3].innerHTML = funcionarioidInputModal.value;

            vendasState = vendasState.map((sell) => {
                if(sell.cod === venda.cod){
                    return { 
                        datavenda: datavendaInputModal.value,
                        clienteid: clienteidInputModal.value,
                        funcionarioid: funcionarioidInputModal.value,
                    };
                }else{
                    return sell;
                }
            });

            console.log(`submitando modal ${venda}`);

            axios.put(`http://localhost:3000/vendas/${venda.cod}`, {
                datavenda: datavendaInputModal.value,
                clienteid: clienteidInputModal.value,
                funcionarioid: funcionarioidInputModal.value,
            });

            document.querySelector(`.myModal${venda.cod}`).style.display = "none";
        }
    };
}

var vendasState = [];

axios
    .get("http://localhost:3000/vendas")
    .then((vendas) => {
        createVendaOnRow(vendas);
        vendasState = vendas.data;        
    });

