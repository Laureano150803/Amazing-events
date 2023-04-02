const eventosUpcoming=data.eventos.filter(e=> e.date > data.fechaActual)
/* console.log(eventosUpcoming) */

const $contendor_upcoming = document.getElementById('contenedor_upcoming')

let template=''
for(evento of eventosUpcoming){
    template+= crearCarta(evento)
}
$contendor_upcoming.innerHTML = template

function crearCarta(carta){
    return`<div class="card text-center" style="width: 18rem;">
    <img src="${carta.image}" class="card-img-top" alt="books">
    <div class="card-body">
    <h5 class="card-title">${carta.name}</h5>
    <p class="card-text"><b>Place: </b>${carta.place}</p>
    </div>
    <div class="card-body d-flex justify-content-between">
    <p><b>Price: </b>${carta.price}</p>
    <a href="./details.html" class="card-link">Details</a>
    </div>
    </div>`
}