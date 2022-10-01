const cnomeInput = document.getElementById("clienteName");
const sobrenomeInput = document.getElementById("sobrenome");
const datanascimentoInput = document.getElementById("datanascimento");

const btn = document.querySelector("#submitBtn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/clientes", {
        cnome: cnomeInput.value,
        sobrenome: sobrenomeInput.value,
        datanascimento: datanascimentoInput.value,
    })
    .then((response) => {
        console.log(response.data);  
    });
})

function createClienteOnRow(response){
    const list = document.querySelector('#client-list');
    var clientes = response.data;   

    clientes.forEach(function (cliente, i) {
        console.log(`cliente ${i}`, cliente, i)
        const row = document.createElement('tr');
        row.id = `rowId${cliente.idc}`;

        var idc = document.createElement('th');
        const cnome = document.createElement('td');
        const sobrenome = document.createElement('td');
        const datanascimento = document.createElement('td');
        const edit = document.createElement('td');

        idc.textContent = cliente.idc;
        cnome.textContent = cliente.cnome;
        sobrenome.textContent = cliente.sobrenome;
        datanascimento.textContent = cliente.datanascimento;

        row.appendChild(idc);
        row.appendChild(cnome);
        row.appendChild(sobrenome);
        row.appendChild(datanascimento);
        row.appendChild(edit);

        var editBtn = document.createElement('a');
        editBtn.type = "button";
        editBtn.classList.add(`editButton${cliente.idc}`, "btn", "btn-info", "btn-sm", "edit");
        editBtn.textContent = "Editar";

        var deleteBtn = document.createElement('a');
        deleteBtn.type = "button";
        deleteBtn.classList.add(`deleteButton${cliente.idc}`, "btn", "btn-danger", "btn-sm", "delete");
        deleteBtn.textContent = "Deletar";

        edit.appendChild(deleteBtn);
        edit.appendChild(editBtn);
        list.appendChild(row);

        deleteBtn.addEventListener("click", () => {
            row.remove();
            clientesState.splice(i, 1);

            axios.delete(`http://localhost:3000/clientes/${cliente.idc}`);
        });
        
        editBtn.addEventListener("click", () => {
            document.querySelector(".modal").classList.add(`myModal${cliente.idc}`);
            document.querySelector(`.myModal${cliente.idc}`).style.display = "block";
            console.log(`modal [${cliente.idc}] abrindo`);

            console.log(clientesState);
            openModal(clientesState.find((comprador) => {
                return comprador.idc === cliente.idc;
            }));
        });
    });

    function openModal(cliente){ 
        var cnomeInputModal = document.getElementById("clienteName_modal");
        var sobrenomeInputModal = document.getElementById("sobrenome_modal");
        var datanascimentoInputModal = document.getElementById("datanascimento_modal");

        cnomeInputModal.value = cliente.cnome;
        sobrenomeInputModal.value = cliente.sobrenome;
        datanascimentoInputModal.value = cliente.datanascimento;

        var submitModal = document.querySelector("#submitModal");
        var clienteRow = document.getElementById(`rowId${cliente.idc}`)

        submitModal.addEventListener("click", submitOpenedModal);

        function submitOpenedModal(evento){
            evento.preventDefault();
            console.log(evento)
            clienteRow.childNodes[1].innerHTML = cnomeInputModal.value;
            clienteRow.childNodes[2].innerHTML = sobrenomeInputModal.value;
            clienteRow.childNodes[3].innerHTML = datanascimentoInputModal.value;

            clientesState = clientesState.map((fregues) => {
                if(fregues.idc === cliente.idc){
                    return { 
                        cnome: cnomeInputModal.value,
                        sobrenome: sobrenomeInputModal.value,
                        datanascimento: datanascimentoInputModal.value,
                    };
                }else{
                    return fregues;
                }
            });

            console.log(`submitando modal ${cliente}`);

            axios.put(`http://localhost:3000/clientes/${cliente.idc}`, {
                cnome: cnomeInputModal.value,
                sobrenome: sobrenomeInputModal.value,
                datanascimento: datanascimentoInputModal.value,
            });

            document.querySelector(`.myModal${cliente.idc}`).style.display = "none";
        }
    };
}

var clientesState = [];

axios
    .get("http://localhost:3000/clientes")
    .then((clientes) => {
        createClienteOnRow(clientes);
        clientesState = clientes.data;        
    });

    
function openMenu(){
    document.body.classList.add('menu-expanded')
}
          
function closeMenu(){
    document.body.classList.remove('menu-expanded')
}