
var Boom = require('boom');
var db = require('../DB/database_connection');

exports.create = (req, res,next) => {
    let sql = `UPDATE likes SET like = like + 1 WHERE id = 1`;

    db.run(sql, function(err, rows) {
        if (err || this.changes === 0) {
            return res.send(Boom.notImplemented('Add likes Failed').output.payload);
        }
        let result = {
            status: true,
            message: "Like Successfully",
        }
        return res.json(result);
    });
};


exports.getLikes = (req, res, next) => {

    let sql = `SELECT * FROM likes WHERE id=1`;
    db.all(sql, (err, rows) => {
        if (err || rows.length === 0) {
            return res.send(Boom.notFound('Fetch Likes failed').output.payload);
        }
        let result = {
            status: true,
            message: "Likes Fetched Successfully",
            likes: rows[0].like 
        }
        return res.json(result);
    });
};