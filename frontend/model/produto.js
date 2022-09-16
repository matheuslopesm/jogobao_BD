
// Construção do Objeto "Produto"
class Produto{ 
    constructor(pnome, descricao){
        this.descricao = descricao;
        this.pnome = pnome;
    }

    // ----- CRUD -----

    static get(){
        axios.get("http://localhost:3000/produtos")
            .then(response => showResponse(response))
    }

    // Cria novo produto
    static create() {
        axios.post('http://localhost:3000/produtos')
        .then(response => {
            console.log(response)
        })
    }



    // // Lista todos produtos
    // static async read(){
    //     const response = await axios.get(url)
    //         .then(response => {
    //             return response.data
    //         })
    //         .catch(error => console.log(error))

    //     return response;
    // }

    // static update(updatedProduto, numeroserie){
    //     axios.put(`${url}/${pnome}`, updatedProduto)
    //         .then(response => {
    //             console.log(JSON.stringify(response.data))
    //         })
    //         .catch(error => console.log(error))
    // }

    // static async delete(numeroserie) {
    //     const produtos = await Produto.read();
    //     let numeroserie;

    //     produtos.forEach((produto) => {
    //         if (produto.numero_de_serie === numeroserie) {
    //             numeroserie = produto.numeroserie;
    //         }
    //     });

    //     axios.delete(`${url}/${numeroserie}`)
    //         .then(response => {
    //             console.log(JSON.stringify(response.data));
    //         })
    //         .catch(error => console.log(error));
    // };
};


export { Produto }