
/*import sqlite3 from "sqlite3";

const db = new sqlite3.Database("finances.db",sqlite3.OPEN_READWRITE, (err)=> {
    if (err) return console.error(err.message);
});

let sql = 'CREATE TABLE IF NOT EXISTS finances (id INTEGER PRIMARY KEY, name TEXT, value REAL)'
db.run(sql)

sql = "INSERT INTO finances (name, value) values (?,?)"
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
db.run(sql,[test, 1], (err)=> {
    if (err) return console.error(err.message);
})

sql = "SELECT * FROM finances";
db.all(sql, [], (err, rows) => {
    if (err) return console.error(err.message);
    rows.forEach((row) => {
        console.log(row);
    });
});
*/