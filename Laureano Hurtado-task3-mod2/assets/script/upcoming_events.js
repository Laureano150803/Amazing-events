const eventos=data.eventos.filter(e=> e.date > data.fechaActual)
let template=''
const contendor_upcoming = document.getElementById('contenedor_upcoming')
let eventosFiltrados=[];

pordefecto()

const food_fair = document.querySelector('#food-fair');
food_fair.addEventListener('change', function() {
  if (this.checked) {
   eventosFiltrados.push(...eventos.filter( even => even.category=='Food Fair'))
    pintar()

  } else {
    let aux = eventos.filter(even => even.category=='Food Fair')
    borrar(aux);
    if (eventosFiltrados.length == 0){
      pordefecto()
    }else{
      pintar()
    }
  }



});
const museum = document.querySelector('#museum');
museum.addEventListener('change', function() {
  if (this.checked) {
    eventosFiltrados.push(...eventos.filter( even => even.category=='Museum'))
    pintar()
    console.log(eventosFiltrados);
 
  } else {
   let aux = eventos.filter(even => even.category=='Museum')
    borrar(aux);
    if (eventosFiltrados.length == 0){
      pordefecto()
    }else{
      pintar()
    }
    console.log(eventosFiltrados);
  }
});



const party = document.querySelector('#party');
party.addEventListener('change', function() {
  if (this.checked) {
    eventosFiltrados.push(...eventos.filter( even => even.category=='Costume Party'))
    pintar()
   // console.log(eventosFiltrados);
  } else {
    let aux = eventos.filter(even => even.category=='Costume Party')
    borrar(aux);
    if (eventosFiltrados.length == 0){
      pordefecto()
    }else{
      pintar()
    }
    console.log(eventosFiltrados);
  }
});

const concert = document.querySelector('#concert');
concert.addEventListener('change', function() {
  if (this.checked) {
    eventosFiltrados.push(...eventos.filter( even => even.category=='Music Concert'))
    pintar()
   // console.log(eventosFiltrados);
  } else {
    let aux = eventos.filter(even => even.category=='Music Concert')
    borrar(aux);
    if (eventosFiltrados.length == 0){
      pordefecto()
    }else{
      pintar()
    }
    console.log(eventosFiltrados);
  }
});

const race = document.querySelector('#race');
race.addEventListener('change', function() {
  if (this.checked) {
    eventosFiltrados.push(...eventos.filter( even => even.category=='Race'))
    pintar()
   // console.log(eventosFiltrados);
  } else {
    let aux = eventos.filter(even => even.category=='Race')
    borrar(aux);
    if (eventosFiltrados.length == 0){
      pordefecto()
    }else{
      pintar()
    }
    console.log(eventosFiltrados);
  }
});

const book = document.querySelector('#book');
book.addEventListener('change', function() {
  if (this.checked) {
    eventosFiltrados.push(...eventos.filter( even => even.category=='Book Exchange'))
    pintar()
   // console.log(eventosFiltrados);
  } else {
    let aux = eventos.filter(even => even.category=='Book Exchange')
    borrar(aux);
    if (eventosFiltrados.length == 0){
      pordefecto()
    }else{
      pintar()
    }
    console.log(eventosFiltrados);
  }
});


const cinema = document.querySelector('#cinema');
cinema.addEventListener('change', function() {
  if (this.checked) {
    eventosFiltrados.push(...eventos.filter( even => even.category=='Cinema'))
    pintar()
   // console.log(eventosFiltrados);
  } else {
    let aux = eventos.filter(even => even.category=='Cinema')
    borrar(aux);
    if (eventosFiltrados.length == 0){
      pordefecto()
    }else{
      pintar()
    }
    console.log(eventosFiltrados);
  }
});




const input = document.querySelector('#buscar')
input.addEventListener('input', (e)=>{
  if(eventosFiltrados.length != 0){
    const buscar  = document.getElementById('buscar').value
    const eventosEncontrados  =  eventosFiltrados.filter( e => e.name.toLowerCase().includes(buscar))
    pintarbuscados(eventosEncontrados)
  }else{
    const buscar  = document.getElementById('buscar').value
    const eventosEncontrados  =  eventos.filter( e => e.name.toLowerCase().includes(buscar))
    pintarbuscados(eventosEncontrados)

  }
})
//Funciones!!
function crearCarta(carta){
    return`<div class="card text-center" style="width: 18rem;">
    <img src="${carta.image}" class="card-img-top" alt="books">
    <div class="card-body">
    <h5 class="card-title">${carta.name}</h5>
    <p class="card-text"><b>Place: </b>${carta.place}</p>
    </div>
    <div class="card-body d-flex justify-content-between">
    <p><b>Price: </b>${carta.price}</p>
    <a href="./details.html?name=${carta.name}" class="card-link">Details</a>
    </div>
    </div>`
}
function pordefecto(){
    contendor_upcoming.innerHTML = ``
    template=''
    for(evento of eventos){
        template+= crearCarta(evento)
    }
    contendor_upcoming.innerHTML = template
}
function pintar(){
  
    template=''
   
    for(const evento of eventosFiltrados){
            template += crearCarta(evento)
        }
        contendor_upcoming.innerHTML = template
  
}
function borrar(aux ){
    for (i=0 ; i < aux.length ; i++  ){
      for ( j=0 ; j< eventosFiltrados.length ; j++){
        if(aux[i] == eventosFiltrados[j]){
          eventosFiltrados.splice(j, 1);
        }
      } 
    }
}
function pintarbuscados(elementos){
  
 
    template=''
   
    for(const evento of elementos){
            template += crearCarta(evento)
        }
        contendor_upcoming.innerHTML = template
  
}
function borrarHijos(elemento) {
    while (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    }
  }