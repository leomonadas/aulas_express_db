//Aqui se cria o processo de conexão com o DB
const Sequelize = require("sequelize");

//Nome do Banco de Dados
const DB_NAME = "loja"; 

const DB_USER = "root";

const DB_PASS = "mysql"; 

//Tem mais infos sobre o banco de dados
const DB_CONFIG = { 
    dialect: "mysql", 
    //É a URL que se conecta, se fosse fora seria um link
    host: "localhost", 
    port: 3306,
};

//OBjeto para guardar a conexão do banco de dados
let db = {}; 

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Erro ao tentar conexão com Banco de Dados!")
}

//Para trabalhar com banco de dados a maioria das funções são assíncronas para usar o poder do paralelismo
async function hasConection() {
    try {
        //Ele vai rodar uma query de exemplo de teste, se tiver certo retorna positivo
        await db.authenticate();
        console.log("Banco de dados conectado!");
    } catch (error) {
        // console.error("Erro ao tentar se conectar ao Banco de Dados!");
        console.log('Ocorreu um erro ao conectar ao banco de dados:' + error)
    }
}

//Para exportar a função hasConection e executar no servidor, pega-se o objetivo db e adiciona o método a ele
//Assim quando ele for exportado já terá a estrutura pronta
//assign insere algo ao objeto
//O primeiro parametro é o objetivo ao qual eu quero adicionar informação e o segundo é o que eu quero add
Object.assign(db, {
    hasConection,
});

module.exports = db;
