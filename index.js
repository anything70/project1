<<<<<<< HEAD
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("finances.db")

db.exec()
=======
console.log("Node.js + SQLite");
console.log("HELP DOES THIS WORK")


const form = document.getElementById("financeForm")

form.addEventListener('submit', function(event){
    // Prevent default form submission
    event.preventDefault();

    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;

    console.log(name);
    console.log(amount)
});
>>>>>>> 86b8b2bc7db8d604bf1b68bf71de276e24618838
