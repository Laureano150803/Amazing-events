const $table = document.getElementById('contenedor_table')

fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then(data => data.json())
.then(res=>{
    const eventos  = res.events
    const fechaActual = res.currentDate
    
    pintarTabla(eventos , fechaActual)
    categoriasUpcomingGananciasAsistencia(eventos, fechaActual)
    categoriasPastGananciasAsistencia(eventos, fechaActual)

}).catch(error => console.log(error))

function pintarTabla (eventos){
    return $table.innerHTML= `
    <tr>
        <td class="title_table" colspan="3">Events statistics</td>
    </tr>
    <tr>
        <td>
            Event with the highest percentage of attendance
        </td>
        <td>
            Events with the lowest percentage of attendance
        </td>
        <td>
            Events with larger capacity
        </td>
    </tr>
    <tr>
       <td>
           ${eventoConMayorAsistencia(eventos)}
       </td>
       <td>
             ${eventoConMenorAsistencia(eventos)}
       </td>
       <td>
            ${eventoConMayorCapacidad(eventos)}
       </td>
   </tr>`
}

function eventoConMayorAsistencia(eventos) {
    let eventoMayorAsistencia = null;
    let mayorPorcentaje = 0;
  
    for (let evento of eventos) {
      let porcentajeAsistencia = (evento.assistance * 100) / evento.capacity;
      if (porcentajeAsistencia > mayorPorcentaje) {
        mayorPorcentaje = porcentajeAsistencia;
        eventoMayorAsistencia = evento.name + ' : ' + Math.floor(mayorPorcentaje) + '%';
      }
    }
  
    return eventoMayorAsistencia;
  }
  function eventoConMenorAsistencia(eventos) {
    let eventoMenorAsistencia = null;
    let menorPorcentaje = 100;
  
    for (let evento of eventos) {
      let porcentajeAsistencia = (evento.assistance * 100) / evento.capacity;
      if (porcentajeAsistencia < menorPorcentaje) {
        menorPorcentaje = porcentajeAsistencia;
        eventoMenorAsistencia = evento.name + ' : ' + Math.floor(menorPorcentaje) + '%';
      }
    }
  
    return eventoMenorAsistencia;
  }
  function eventoConMayorCapacidad(eventos) {
    let eventoMayorCapacidad = null;
    let mayorCapacidad = 0;
  
    for (let evento of eventos) {
      if (evento.capacity > mayorCapacidad) {
        mayorCapacidad = evento.capacity;
        eventoMayorCapacidad = evento.name + ' : ' + mayorCapacidad;
      }
    }
  
    return eventoMayorCapacidad;
  }

  function categoriasUpcomingGananciasAsistencia(eventos, fechaActual) {
    const eventosUpcoming = eventos.filter(evento => evento.date > fechaActual);
  
    // Obtener un array de categorías sin repeticiones
    const categorias = [...new Set(eventosUpcoming.map(evento => evento.category))];
  
    // Calcular la ganancia total y la asistencia para cada categoría
    const estadisticasPorCategoria = categorias.map(categoria => {
      const eventosDeCategoria = eventosUpcoming.filter(evento => evento.category === categoria);
      const gananciasDeCategoria = eventosDeCategoria.map(evento => evento.estimate * evento.price);
      const gananciaTotal = gananciasDeCategoria.reduce((suma, ganancia) => suma + ganancia, 0);
      const asistenciaTotal = eventosDeCategoria.reduce((suma, evento) => suma + evento.estimate, 0);
      const capacidadTotal = eventosDeCategoria.reduce((suma,evento)=>suma + evento.capacity,0);
      const porcentajeAsistencia = ((asistenciaTotal /capacidadTotal)*100 ) ;
      return { categoria, gananciaTotal, porcentajeAsistencia };
    });
    // Agregar una fila por cada categoría a la tabla HTML
    const $table_upcoming = document.getElementById('contenedor_table_upcoming');
    categorias.forEach((categoria, indice) => {
      const fila = document.createElement('tr');
  
      // Agregar la celda con el nombre de la categoría
      const celdaCategoria = document.createElement('td');
      celdaCategoria.textContent = categoria;
      fila.appendChild(celdaCategoria);
  
      // Agregar la celda con la ganancia total de la categoría
      const celdaGanancia = document.createElement('td');
      celdaGanancia.textContent = estadisticasPorCategoria[indice].gananciaTotal;
      fila.appendChild(celdaGanancia);
  
      // Agregar la celda con el porcentaje de asistencia de la categoría
      const celdaAsistencia = document.createElement('td');
      celdaAsistencia.textContent = estadisticasPorCategoria[indice].porcentajeAsistencia.toFixed(2) + "%";
      fila.appendChild(celdaAsistencia);
  
      $table_upcoming.appendChild(fila);
    });
  }
  function categoriasPastGananciasAsistencia(eventos, fechaActual) {
    const eventosPast = eventos.filter(evento => evento.date < fechaActual);
  
    // Obtener un array de categorías sin repeticiones
    const categorias = [...new Set(eventosPast.map(evento => evento.category))];
  
    // Calcular la ganancia total y la asistencia para cada categoría
    const estadisticasPorCategoria = categorias.map(categoria => {
      const eventosDeCategoria = eventosPast.filter(evento => evento.category === categoria);
      const gananciasDeCategoria = eventosDeCategoria.map(evento => evento.assistance * evento.price);
      const gananciaTotal = gananciasDeCategoria.reduce((suma, ganancia) => suma + ganancia, 0);
      const asistenciaTotal = eventosDeCategoria.reduce((suma, evento) => suma + evento.assistance, 0);
      const capacidadTotal = eventosDeCategoria.reduce((suma,evento)=>suma + evento.capacity,0);
      const porcentajeAsistencia = ((asistenciaTotal /capacidadTotal)*100 ) ;
      return { categoria, gananciaTotal, porcentajeAsistencia };
    });
    // Agregar una fila por cada categoría a la tabla HTML
    const $table_past = document.getElementById('contenedor_table_past');
    categorias.forEach((categoria, indice) => {
      const fila = document.createElement('tr');
  
      // Agregar la celda con el nombre de la categoría
      const celdaCategoria = document.createElement('td');
      celdaCategoria.textContent = categoria;
      fila.appendChild(celdaCategoria);
  
      // Agregar la celda con la ganancia total de la categoría
      const celdaGanancia = document.createElement('td');
      celdaGanancia.textContent = estadisticasPorCategoria[indice].gananciaTotal;
      fila.appendChild(celdaGanancia);
  
      // Agregar la celda con el porcentaje de asistencia de la categoría
      const celdaAsistencia = document.createElement('td');
      celdaAsistencia.textContent = estadisticasPorCategoria[indice].porcentajeAsistencia.toFixed(2) + "%";
      fila.appendChild(celdaAsistencia);
  
      $table_past.appendChild(fila);
    });
  }






  
  
  
  
  
  




  
  
