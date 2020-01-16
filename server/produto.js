var db = require('./database.js')
var connection = db.connect()

module.exports = function(callback){

    this.inserir_produto = function(produto, callback){
        var sql = `INSERT INTO produto (descricao, quantidade, data_update) 
                VALUES ("$1", "$2", "$3");`
        
        sql = sql.replace('$1', produto.descricao)
            .replace('$2', produto.quantidade)
            .replace('$3', produto.data)
        
        console.log(sql)
        connection.query(sql, callback)
    }

    this.listar_produtos = function (callback){
        connection.query("SELECT * FROM produto;", callback);
    }

    return this;

}