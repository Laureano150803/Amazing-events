

fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then(data => data.json())
.then(res => {
      eventos = res.events
      let url = location.search
      let param = new URLSearchParams(url)
      let nameCard = param.get("name")
      let eventoFiltrado = eventos.find(e=>e.name == nameCard)
      pintarFiltrado(eventoFiltrado) 
})
.catch(error => console.log(error)) 
function pintarFiltrado (evento){
    let template =''
    template = `<div class="card carta_details">
    <img src="${evento.image}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-text">${evento.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><p><b>Date: </b>${evento.date}</p></li>
      <li class="list-group-item"><p><b>Category: </b>${evento.category}</p></li>
      <li class="list-group-item"><p><b>Place: </b>${evento.place}</p></li>
      <li class="list-group-item"><p><b>Capacity: </b>${evento.capacity}</p></li>
      <li class="list-group-item"><p><b>Assistance: </b>${evento.assistance}</p></li>
      <li class="list-group-item"><p><b>Price: </b>${evento.price}</p></li>
    </ul>
  </div>`
  contenedor_details.innerHTML = template
}

