const db = require('../config/database');

// Método responsável por CRIAR um novo Funcionario
exports.createFuncionario = async (req, res) => {
    const { 
        cpf,
        fNome,
        sobrenome,
        dataNascimento,
        salario,
        sexo
    } = req.body;

    const { rows } = await db.query(
        `INSERT INTO funcionario (
            cpf,
            fNome,
            sobrenome,
            dataNascimento,
            salario,
            sexo
        ) VALUES ($1, $2, $3, $4, $5, $6)`,
        [
            cpf,
            fNome,
            sobrenome,
            dataNascimento,
            salario,
            sexo
        ]
    );

    res.status(201).send({
        message: "Funcionario added successfully!",
        body: {
            funcionario: { 
                cpf,
                fNome,
                sobrenome,
                dataNascimento,
                salario,
                sexo
            }
        },
    });
};

// ==> Método responsável por LISTAR todos os Funcionarios
exports.listAllFuncionario = async (req, res) => {
    const response = await db.query('SELECT * FROM funcionario ORDER BY fNome ASC');
    
    res.status(200).send(response.rows);
};

// Método responsável por ATUALIZAR um Funcionario pelo seu CPF
exports.updateFuncionarioByCpf = async (req, res) => {
    const funcionarioCpf = parseInt(req.params.cpf);
    const { 
        cpf,
        fNome,
        sobrenome,
        dataNascimento,
        salario,
        sexo
    } = req.body;

    const response = await db.query(
        `UPDATE funcionario SET 
            fNome = $1,
            sobrenome = $2,
            dataNascimento = $3,
            salario = $4,
            sexo = $5
        WHERE 
            cpf = $6`,
        [
            fNome,
            sobrenome,
            dataNascimento,
            salario,
            sexo,
            cpf
        ]
    );

    res.status(200).send({ message: "Funcionario updated successfully!" });
};

// ==> Método responsável por DELETAR um Funcionario pelo seu CPF
exports.deleteFuncionarioByCpf = async (req, res) => {
    const funcionarioCpf = parseInt(req.params.cpf);
    await db.query(
        "DELETE FROM funcionario WHERE cpf = $1",
        [funcionarioCpf]
    );

    res.status(200).send({ message: 'Printer deleted successfully!' });
};