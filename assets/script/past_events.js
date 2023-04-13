const $search = document.getElementById('search')
const $checkboxs = document.getElementById('checks')
const $cartas = document.getElementById('contenedor_past')

fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then(data =>data.json())
.then(res=>{
  const fechaActual = res.currentDate
  const eventos = res.events
  const eventosPasados = eventos.filter(evento => evento.date < fechaActual)
  crearCheckbox(eventosPasados, $checkboxs)
  imprimirCartas(eventosPasados, $cartas)
  $search.addEventListener('keyup', ()=>{
    let checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(e =>e.value)
    let filtradosPorCategoria = eventosPasados.filter(evento=>checked.includes(evento.category)|| checked.length ===0)
    let filtadosPorSearch = filtradosPorCategoria.filter(evento => evento.name.toLowerCase().includes($search.value.toLowerCase()))
   imprimirCartas(filtadosPorSearch, $cartas)  
}) 
$checkboxs.addEventListener('change', ()=>{
    let checked = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(e =>e.value)
    let filtradosPorCategoria = eventosPasados.filter(evento=>checked.includes(evento.category)|| checked.length ===0)
    let filtadosPorSearch = filtradosPorCategoria.filter(evento => evento.name.toLowerCase().includes($search.value.toLowerCase()))
   imprimirCartas(filtadosPorSearch, $cartas)  
}) 

}).catch(error =>console.log(error))

import{crearCheckbox, imprimirCartas } from './modules/funciones.js'