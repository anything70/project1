
/*import sqlite3 from "sqlite3";

const db = new sqlite3.Database("finances.db",sqlite3.OPEN_READWRITE, (err)=> {
    if (err) return console.error(err.message);
}); //opens database

let sql = 'CREATE TABLE IF NOT EXISTS finances (id INTEGER PRIMARY KEY, name TEXT, value REAL)'
db.run(sql)
//creates database and doesn't return error if already exists

sql = "INSERT INTO finances (name, value) values (?,?)"
<<<<<<< HEAD
=======
*/
console.log("JS loaded")
const form = document.getElementById("financeForm");
if (!form) {
    console.error("Form not found");
}
document.getElementById("financeForm").addEventListener("submit", function(){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    console.log(name, amount)
})



/*
>>>>>>> b591a7ba392c264e8ec79fffeb24c9779544ac31
db.run(sql,[test, 1], (err)=> {
    if (err) return console.error(err.message);
})
//inserts list values into database

sql = "SELECT * FROM finances";
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
        console.log(row);
    });
});
