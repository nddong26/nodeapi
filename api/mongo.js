const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb://192.168.56.105:27017/";

var _db;

module.exports = {

    connectToServer: function( callback ) {
        MongoClient.connect(url,function (err, db) {
            if (err) {
                console.log('Unable to connect to the mongoDB server. Error:', err);
            } else {
                _db = db.db("test");
            }
        });
    },

    getDb: function() {
        return _db;
    }
};