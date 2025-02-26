document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".secondary-button").addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "products.html";
    });
});
