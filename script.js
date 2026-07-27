// Carrito de demostración

let cartCount = 0;


// Elementos de la página

const cart = document.getElementById("cart");
const cartNumber = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-cart");



// Agregar productos al carrito

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartNumber.textContent = cartCount;


        button.textContent = "Agregado ✓";


        setTimeout(() => {

            button.textContent = "Agregar selección";

        }, 1500);


    });

});




// Click en carrito

cart.addEventListener("click", () => {


    if(cartCount === 0){


        alert(
            "Tu selección está vacía 👜"
        );


    } else {


        alert(
            `Tienes ${cartCount} pieza(s) seleccionada(s) ✨`
        );


    }


});
