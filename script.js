document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function () {
        const date = document.getElementById("dat").value;
        const time = document.getElementById("tim").value;
        const email = document.getElementById("ema").value;

        if (date && time && email) {
            alert(`You have booked a table on ${date} at ${time}. Confirmation will be sent to ${email}.`);
        } else {
            alert("Please fill in all the fields before submitting.");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const sendBtn = document.getElementById("sendBtn");

    sendBtn.addEventListener("click", function () {
        // Get values
        const name = document.getElementById("na").value;
        const email = document.getElementById("em").value;
        const message = document.getElementById("1").value;

        // Optional: Check if fields are filled
        if (!name || !email || !message) {
            alert("Please fill in all fields.");
            return;
        }

        // Show confirmation
        alert("Thank you for subscribing to our newsletter!");

        // Reset fields
        document.getElementById("na").value = "";
        document.getElementById("em").value = "";
        document.getElementById("1").value = "";
    });
});





