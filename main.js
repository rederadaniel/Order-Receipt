        // Auto-fill today's date
        // <p class="order-date"><strong>Date:</strong> <span id="orderDate"></span></p>
        // document.getElementById("orderDate").textContent = new Date().toLocaleDateString();

        function myFunction() {
            alert("D'rD fOkies");
            alert("Here is your order receipt, sir!");

            if (confirm("Is everything correct?")) {
                alert("Thank you for your order!");
            } else {
             // alert("Yoko nga!");
                alert("I'll fix that for you.");
            }
        }
        myFunction();