const fnomeInput = document.getElementById("firstName");
const sobrenomeInput = document.getElementById("sobrenome");
const datanascimentoInput = document.getElementById("datanascimento");

const btn = document.querySelector("#submitBtn");

btn.addEventListener("click", (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/funcionarios", {
        fnome: fnomeInput.value,
        sobrenome: sobrenomeInput.value,
        datanascimento: datanascimentoInput.value,
    })
    .then((response) => {
        console.log(response.data);  
    });
})

function createFuncionarioOnRow(response){
    const list = document.querySelector('#employer-list');
    var funcionarios = response.data;   

    funcionarios.forEach(function (funcionario, i) {
        console.log(`funcionario ${i}`, funcionario, i)
        const row = document.createElement('tr');
        row.id = `rowidf${funcionario.idf}`;

        var idf = document.createElement('th');
        const fnome = document.createElement('td');
        const sobrenome = document.createElement('td');
        const datanascimento = document.createElement('td');
        const edit = document.createElement('td');

        idf.textContent = funcionario.idf;
        fnome.textContent = funcionario.fnome;
        sobrenome.textContent = funcionario.sobrenome;
        datanascimento.textContent = funcionario.datanascimento;

        row.appendChild(idf);
        row.appendChild(fnome);
        row.appendChild(sobrenome);
        row.appendChild(datanascimento);
        row.appendChild(edit);

        var editBtn = document.createElement('a');
        editBtn.type = "button";
        editBtn.classList.add(`editButton${funcionario.idf}`, "btn", "btn-info", "btn-sm", "edit");
        editBtn.textContent = "Editar";

        var deleteBtn = document.createElement('a');
        deleteBtn.type = "button";
        deleteBtn.classList.add(`deleteButton${funcionario.idf}`, "btn", "btn-danger", "btn-sm", "delete");
        deleteBtn.textContent = "Deletar";

        edit.appendChild(deleteBtn);
        edit.appendChild(editBtn);
        list.appendChild(row);

        deleteBtn.addEventListener("click", () => {
            row.remove();
            funcionariosState.splice(i, 1);

            axios.delete(`http://localhost:3000/funcionarios/${funcionario.idf}`);
        });
        
        editBtn.addEventListener("click", () => {
            document.querySelector(".modal").classList.add(`myModal${funcionario.idf}`);
            document.querySelector(`.myModal${funcionario.idf}`).style.display = "block";
            console.log(`modal [${funcionario.idf}] abrindo`);

            console.log(funcionariosState);
            openModal(funcionariosState.find((empregado) => {
                return empregado.idf === funcionario.idf;
            }));
        });
    });

    function openModal(funcionario){ 
        var fnomeInputModal = document.getElementById("firstName_modal");
        var sobrenomeInputModal = document.getElementById("sobrenome_modal");
        var datanascimentoInputModal = document.getElementById("datanascimento_modal");

        fnomeInputModal.value = funcionario.fnome;
        sobrenomeInputModal.value = funcionario.sobrenome;
        datanascimentoInputModal.value = funcionario.datanascimento;

        var submitModal = document.querySelector("#submitModal");
        var funcionarioRow = document.getElementById(`rowidf${funcionario.idf}`)

        submitModal.addEventListener("click", submitOpenedModal);

        function submitOpenedModal(evento){
            evento.preventDefault();
            console.log(evento)
            funcionarioRow.childNodes[1].innerHTML = fnomeInputModal.value;
            funcionarioRow.childNodes[2].innerHTML = sobrenomeInputModal.value;
            funcionarioRow.childNodes[3].innerHTML = datanascimentoInputModal.value;

            funcionariosState = funcionariosState.map((trabalhador) => {
                if(trabalhador.idf === funcionario.idf){
                    return { 
                        fnome: fnomeInputModal.value,
                        sobrenome: sobrenomeInputModal.value,
                        datanascimento: datanascimentoInputModal.value,
                    };
                }else{
                    return trabalhador;
                }
            });

            console.log(`submitando modal ${funcionario}`);

            axios.put(`http://localhost:3000/funcionarios/${funcionario.idf}`, {
                fnome: fnomeInputModal.value,
                sobrenome: sobrenomeInputModal.value,
                datanascimento: datanascimentoInputModal.value,
            });

            document.querySelector(`.myModal${funcionario.idf}`).style.display = "none";
        }
    };
}

var funcionariosState = [];

axios
    .get("http://localhost:3000/funcionarios")
    .then((funcionarios) => {
        createFuncionarioOnRow(funcionarios);
        funcionariosState = funcionarios.data;        
    });


