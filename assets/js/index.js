const precio = 400000


precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

const cantidad = document.querySelector(".cantidad")
const btnAgregar =document.querySelector(".agregar")
const btnQuitar =document.querySelector(".quitar")
const totalSpan= document.querySelector(".valor-total")



btnAgregar.addEventListener("click", ()=>{
    cantidad.textContent = Number(cantidad.textContent)+1;
    actualizarTotal();

  
})
btnQuitar.addEventListener("click", ()=>{
    cantidad.textContent = Number(cantidad.textContent)-1;
    actualizarTotal();
  
})



actualizarTotal = () => {
    const cantidadActual = Number(cantidad.textContent);
    totalSpan.innerHTML = precio * cantidadActual;
};
