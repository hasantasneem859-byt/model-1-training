console.log("Script Loaded");

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

console.log("bar =", bar);
console.log("nav =", nav);

if (bar) {
    bar.addEventListener('click', () => {
        console.log("clicked");
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        console.log("clicked");
        nav.classList.remove('active');
    });
}

const checkoutBtn = document.getElementById('checkout-button');

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', async () => {
        // Sample data jo server par jayega
        const orderData = {
            cartItems: ["T-shirt", "Jeans"], 
            total: 335,
            name: "Tasneem"
        };

        try {
            const response = await fetch('http://localhost:5000/api/checkout', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderData)
            });

            const result = await response.json();
            
            if (result.success) {
                alert("Order Successful! Order ID: " + result.orderId);
            } else {
                alert("Order failed!");
            }
        } catch (error) {
            console.error("Connection Error:", error);
            alert("Backend server nahi chal raha hai! 'node server.js' check karein.");
        }
    });
}

