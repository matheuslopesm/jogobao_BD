const url = "http://localhost:3000/api/funcionarios";

class Funcionario {
    constructor(cpf, fNome, sobrenome, dataNascimento, salario, sexo) {
       this.cpf = cpf;
       this.fNome = fNome;
       this.sobrenome = sobrenome;
       this.dataNascimento = dataNascimento;
       this.salario = salario;
       this.sexo = sexo;
    }

   // --- CRUD ---

   //CREATE Funcionario
    static create(funcionario) {
        axios.post(url, funcionario)
        .then(response => {
            console.log(JSON.stringify(response.data));
        })
    };

    //GET Funcionario
    static async read() {
        const response = await axios.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => console.log(error));
     
        return response;
    }

    //UPDATE Funcionario
    static update(updatedFuncionario, cpf) {
        axios.put(`${url}/${cpf}`, updatedFuncionario)
        .then(response => {
            console.log(JSON.stringify(response.data));
        })
        .catch(error => console.log(error));
    };

    //DELETE Funcionario
    static async delete(fNome) {
        const funcionarios = await Funcionario.read();
        let cpf;
     
        funcionarios.forEach((funcionario) => {
            if (funcionario.fNome === fNome) {
                cpf = funcionario.cpf;
            }
        });
     
        axios.delete(`${url}/${cpf}`)
            .then(response => {
                console.log(JSON.stringify(response.data));
            })
            .catch(error => console.log(error));
    };
};


export { Funcionario }