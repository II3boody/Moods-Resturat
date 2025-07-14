document.addEventListener("DOMContentLoaded", () => {
    const tbody = document.querySelector("#mybody");
    const subtotalEl = document.getElementById("subtotal");
    const taxEl = document.getElementById("tax");
    const totalEl = document.getElementById("total");

    if (!tbody || !subtotalEl || !taxEl || !totalEl) {
        console.warn("Cart elements not found. Make sure the HTML IDs are correct.");
        return; // stop the script if any of these are missing
    }

    let cartItems = JSON.parse(localStorage.getItem("itemsInCart")) || [];

    function formatEGP(amount) {
        return `${amount.toFixed(2)} EGP`;
    }

    function displayCart() {
        tbody.innerHTML = "";

        let subtotal = 0;

        if (cartItems.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;">Your cart is empty.</td></tr>';
        }

        cartItems.forEach((item, index) => {
            const price = parseFloat(item.price); // now it's stored as number
            const total = price * item.quantity;
            subtotal += total;

            const tr = document.createElement("tr");

            tr.innerHTML = `
                <td>${item.name}</td>
                <td>${formatEGP(price)}</td>
                <td>${item.quantity}</td>
                <td>${formatEGP(total)}</td>
                <td><i class="fa-solid fa-trash moving-trash" data-index="${index}"></i></td>
            `;

            tbody.appendChild(tr);
        });

        const tax = subtotal * 0.14;
        const total = subtotal + tax;

        subtotalEl.textContent = formatEGP(subtotal);
        taxEl.textContent = formatEGP(tax);
        totalEl.textContent = formatEGP(total);
    }
    const checkoutBtn = document.getElementById("checkout-btn");
    const checkoutMessage = document.getElementById("checkout-message");

    tbody.addEventListener("click", e => {
        if (e.target.classList.contains("moving-trash")) {
            const index = parseInt(e.target.dataset.index);
            cartItems.splice(index, 1);
            localStorage.setItem("itemsInCart", JSON.stringify(cartItems));
            displayCart();
        }
    });

    checkoutBtn.addEventListener("click", () => {
        if (cartItems.length === 0) {
            alert("🛒 Your cart is empty.");
            return;
        }

        alert("✅ Thank you! Your order has been placed.");

        // Optional: clear cart
        cartItems = [];
        localStorage.removeItem("itemsInCart");
        displayCart();
    });

    displayCart();
});