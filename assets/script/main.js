const $search = document.getElementById('search')
const $checkboxs = document.getElementById('checks')
const $cartas = document.getElementById('contenedorCartas')
let eventos;
fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then(data => data.json())
.then(res => {
      eventos = res.events.filter(evento => evento.category)
      crearCheckbox(eventos,$checkboxs )
      imprimirCartas(eventos,$cartas)  
      $search.addEventListener('keyup', filtrar)
      $checkboxs.addEventListener('change', filtrar) 
})
.catch(error => console.log(error)) 

 function filtrar (){
  let checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(e =>e.value)
  let filtradosPorCategoria = eventos.filter(evento=>checked.includes(evento.category)|| checked.length ===0)
  let filtadosPorSearch = filtradosPorCategoria.filter(evento => evento.name.toLowerCase().includes($search.value.toLowerCase()))
 imprimirCartas(filtadosPorSearch, $cartas)  
   
}  
import{crearCheckbox, imprimirCartas } from './modules/funciones.js'


 



