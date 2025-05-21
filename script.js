const form = document.getElementById("financeForm")

form.addEventListener('submit', function(event) {
    // Prevent default form submission
    event.preventDefault();

    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;

    console.log(name);
    console.log(amount)


};