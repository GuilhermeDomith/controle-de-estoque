const dateformat = require('./dateformat.js')()
var db = require('./database.js')
var connection = db.connect()

module.exports = function(callback){

    this.registrar_historico = function(historico, callback){
        var sql = `INSERT INTO historico_estoque 
        (id_produto, data_abert, quant_abert, data_fech, quant_fech, gasto_diario) 
        VALUES ("$1", "$2", "$3", "$4", "$5", "$6");`
        
        sql = sql.replace('$1', historico.id_produto)
            .replace('$2', dateformat.dateToString(historico.data_abert, 'yyyymmdd') )
            .replace('$3', historico.quant_abert)
            .replace('$4', dateformat.dateToString(historico.data_fech, 'yyyymmdd') )
            .replace('$5', historico.quant_fech)
            .replace('$6', historico.gasto_diario)
        
        connection.query(sql, callback)
    }

    return this;

}