let url = location.search

let param = new URLSearchParams(url)

let nameCard = param.get("name")

const eventos=data.eventos

let eventoFiltrado = eventos.find(e=>e.name == nameCard)


function pintarFiltrado (evento){
    let template =''
    template = `<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${evento.image}" class="img-fluid rounded-start">
      </div>
      <div class="col-md-8">
        <div class="card-body d-flex flex-wrap">
            <div>
                <h5 class="card-title">${evento.name}</h5>
                <p class="card-text_1">${evento.description}</p>
            </div>  
            <div class="d-flex flex-wrap">
                <div class="section">
                    <p class="card-text"><b>Date: </b>${evento.date}</p>
                    <p class="card-text"><b>Category: </b>${evento.category}</p>
                </div>
                <div class="section">
                    <p class="card-text"><b>Place: </b>${evento.place}</p>
                    <p class="card-text"><b>Capacity: </b>${evento.capacity}</p>
                </div>
                <div class="section">
                    <p class="card-text"><b>Assistance: </b>${evento.assistance}</p>
                    <p class="card-text"><b>Price: </b>${evento.price}</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>`
  contenedor_details.innerHTML = template
}
pintarFiltrado(eventoFiltrado)