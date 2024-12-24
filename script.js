const menu = document.getElementById("menu");
const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal"); 
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const constcloseModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-count");
const addressInput = document.getElementById("address");
const addressWarn = document.getElementById("address-warn");

let carrinho = [];

// ao clicar vai aparecer o modal
cartBtn.addEventListener("click" , function(){
    updateCarModal();
    cartModal.style.display = "flex";
});

// fechar o modal ao clicar no botao fechar
constcloseModalBtn.addEventListener("click", function(){
    cartModal.style.display = "none";
})

// fechar o modal ao clicar fora 
cartModal.addEventListener("click", function(event){
    if(event.target === cartModal){
        cartModal.style.display = "none";
    }
});

menu.addEventListener("click", function(event){
    let parentButton = event.target.closest(".adicionar-item-no-carrinha")

    if(parentButton){
        const nome = parentButton.getAttribute("data-name");
        const preco = parseFloat(parentButton.getAttribute("data-preco"));

        // adicionando no carrinho
        addToCard(nome, preco);
    }


})

// funçao para adicionar no carrinho
function addToCard(nome, preco){

    // verificando se o item que clicou ja ta na lista
    const existingItem = carrinho.find(item => item.nome === nome);

    if(existingItem){
        // se o item ja existe, aumenta a quantidade +1
        existingItem.quantidade += 1;
        return;
    }else{
        carrinho.push({
            nome,
            preco,
            quantidade: 1
        });
    }

    updateCarModal();
}

// atualizando o carrinho
function updateCarModal(){
    cartItemsContainer.innerHTML = "";
    let total = 0

    carrinho.forEach(item => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col")

        cartItemElement.innerHTML = `
            <div class="flex items-center justify-between">
                <div>
                    <p class="font-bold">${item.nome}</p>
                    <p>Qtd: ${item.quantidade}</p>
                    <p class="font-medium mt-2">${item.preco.toFixed(2)}</p>
                </div>

                <button class = "remove-from-cart-btn" data-nome="${item.nome}">
                    Remover
                </button>
            </div>
        `

        total += item.preco * item.quantidade;

        cartItemsContainer.appendChild(cartItemElement);
    })

    cartTotal.textContent = total.toLocaleString("pr-BR",{style : "currency", currency: "BRL"})

    cartCounter.innerHTML = carrinho.length
}

// funçao para remover o item do carrinho
cartItemsContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("remove-from-cart-btn")){
        const nome = event.target.getAttribute("data-nome")

        removeItemCart(nome);
    }
})

function removeItemCart(nome){
    const index = carrinho.findIndex(item => item.nome === nome);

    if(index !== -1){
        const item = carrinho[index];
        
        if(item.quantidade > 1){
            item.quantidade -= 1;

            updateCarModal();
            return;
        }

        carrinho.splice(index, 1);
        updateCarModal();
    }
}

// lendo o endereço
addressInput.addEventListener("input", function(event){
    let inputValue = event.target.value;

    // verificando se ta digitando algo 
    if(inputValue !== ""){
        addressInput.classList.remove("border-red-600");
        addressWarn.classList.add("hidden")
    }
})

// finalizar o carrinho
checkoutBtn.addEventListener("click", function(){

    // barra de fazer pedido quando o restaurante ta fechado
    const isOpen = checkRestaurantOpen();
    if(!isOpen){

        Toastify({
            text: "Ops o restaurante está fechado",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "#ef4444",
            },
          }).showToast();

        return;
    }

    if(carrinho.length === 0) return;
    if(addressInput.value ===""){
        addressWarn.classList.remove("hidden");
        addressInput.classList.add("border-red-600");
        return
    }

    // enviando o pedido para api Whats
    const cartItems = carrinho.map((item) =>{
        return(
            `${item.nome} Quantidade: (${item.quantidade}) Preço R$${item.preco} |`
        )
    }).join("")
 
    const mensagem = encodeURIComponent(cartItems);
    const telefone = "557991752911";

    window.open(`https://wa.me/${telefone}?text=${mensagem} Endereço: ${addressInput.value}`, "_blank")

    carrinho = [];
    updateCarModal();
})

// verificar a hora e manipular o car horirio
function checkRestaurantOpen(){
    const data = new Date();
    const hora = data.getHours();
    return hora >= 18 && hora < 22;
}

const spanItem = document.getElementById("date-span");
const isOpen = checkRestaurantOpen();

if(isOpen){
    spanItem.classList.remove("bg-red-500");
    spanItem.classList.add("bg-green-600");
}else{
    spanItem.classList.remove("bg-green-600");
    spanItem.classList.add("bg-red-500");
}
