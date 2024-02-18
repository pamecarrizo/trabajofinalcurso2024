var pool = require('./bd');

async function getPosteos() {
        var query ='select * from posteos';
        var rows = await pool.query(query);
       return rows;
};

async function insertPosteos(obj) {
        try {
            var query = "insert into posteos set ? ";
            var rows = await pool.query(query, [obj]);
            return rows;
        } catch (error){
            console.log(error);
            throw error;
        }
    };

    async function deletePosteobyId(id) {
        var query = "delete from posteos where id = ? ";
        var rows = await pool.query(query, [id]);
        return rows;
    }
    
module.exports = {getPosteos, insertPosteos, deletePosteobyId};
