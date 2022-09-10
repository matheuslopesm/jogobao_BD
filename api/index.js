const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db")

app.use(cors())
app.use(express.json())

//ROUTES//

//Create funcionarios

app.post("/funcionarios", async(req, res) => {
    try {
        const { cpf } = req.body
        const newFuncionario = await pool.query("INSERT INTO funcionario (cpf) VALUES ($1) RETURNING*",
            [cpf]
        );

        res.json(newFuncionario.rows[0]);
    } catch (err) {
        console.error(err.message);        
    }
})

//Read funcionarios 

app.get("/funcionarios", async(req, res) => {
    try{
        const allFuncionarios = await pool.query("SELECT* FROM funcionario")
        res.json(allFuncionarios.rows)
    }catch(err){
        console.error(err.message)
    }
})


//Get todos funcionarios 

app.get("/funcionarios/:cpf", async(req, res) => {
    try{
        const { cpf } = req.params
        const funcionario = await pool.query("SELECT* FROM funcionario WHERE cpf = $1", [
            cpf
        ]);
        
        res.json(funcionario.rows[0]);   
    }catch(err){
        console.error(err.message)
    }
})


//Update funcionarios 

app.put("/funcionarios/:cpf", async(req, res) => {
    try {
        const { cpf } = req.params   
        const { fnome } = req.body;   
        const updateFuncionario = await pool.query("UPDATE funcionario SET cpf = $1 WHERE fnome = $2",
            [cpf, fnome]
        );    

        res.json("Funcionario foi atualizado")
    } catch (err) {
        console.error(err.message)        
    }
})


//Delete dentro de jogobao_db 

app.delete("/funcionarios/:cpf", async(req, res) => {
    try {
        const { cpf } = req.params
        const deleteFuncionario = await pool.query("DELETE FROM funcionario WHERE cpf = $1", [
            cpf
        ]);

        res.json("Funcionario deletado!")

    } catch (err) {
        console.error(err.message)        
    }
})


app.listen(5000, () => {
    console.log("Servidor iniciado com sucesso na porta 5000")
});
