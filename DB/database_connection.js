const sqlite3  = require('sqlite3');
                
// Connect to the db
const database = new sqlite3.Database('testDatabase.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
});
                
module.exports = database;