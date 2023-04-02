const eventosPasados = data.eventos.filter( e => e.date < data.fechaActual)


const $contendor_past = document.getElementById('contenedor_past')

let template=''
for(const evento of eventosPasados){
    template += crearCarta(evento)
}
$contendor_past.innerHTML = template

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

