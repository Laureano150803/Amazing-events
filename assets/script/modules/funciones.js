export function crearCheckbox(eventos, contenedor){
    let funcion = eventos => eventos.category
    let categorias = new Set(eventos.filter(funcion).map(funcion))
    categorias.forEach(cate =>{
      contenedor.innerHTML +=`<input class="form-check-input" type="checkbox" value="${cate}" id="${cate}">
      <label class="form-check-label" for="${cate}">
      ${cate}
      </label>
  </div>  `
    })
  }
export function crearCarta(evento){
    let div = document.createElement('div')
    div.classList = 'card text-center style="width: 18rem;'
    div.innerHTML = 
    `
    <div d-flex justify-content-center>
    <img src="${evento.image}" class="card-img-top" alt="books">
    </div>
    
  
    <div class="card-body">
      <h5 class="card-title">${evento.name}</h5>
      <p class="card-text"><b>Place: </b>${evento.place}</p>
    </div>
  
    <div class="card-body d-flex justify-content-between">
      <p><b>Price: </b>${evento.price}</p>
      <a href="./details.html?name=${evento.name}" class="card-link">Details</a>
    </div>
  `
  return div
  } 
  
export  function imprimirCartas(eventos, contenedor){
    contenedor.innerHTML = '' 
    if(eventos.length >0){
      let fragment = document.createDocumentFragment()
      eventos.forEach(evento => fragment.appendChild(crearCarta(evento)))
      contenedor.appendChild(fragment)
    }else{
      contenedor.innerHTML='<h2>Not found</h2>'
    }
   
  }
  