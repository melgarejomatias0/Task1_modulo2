
let datosPast = [];

for(let dato of data.datos){
  if (dato.date < data.currentDate ) {
    datosPast.push(dato)
  }
}

console.log (datosPast)

pintarTarjetas(datosPast, contenedor)


contenedorCategorias.addEventListener("change",filtroDoble)

buscador.addEventListener("input",filtroDoble)




// Funciones parte 2 

function crearTarjeta(item) {
  return `<div class="col-12 col-sm-6 col-md-4 col-xl-3">
          <div class="card">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
          <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.description}</p>
          </div>
          <ul class="list-group list-group-flush">
              <li>Category: ${item.category}</li>
              <li>Place: ${item.place}</li>
              <li>Capacity: ${item.capacity}</li>
              <li>Assistance: ${item.assistance}</li>
              <li>Date: ${item.date}</li>
          </ul>
          
          <div class="card-body">
              <a>Price: ${item.price}  </a>
              <button type="button" class="btn btn-outline-light">Details</button>
          </div>
        </div>
        </div>`
}

function pintarTarjetas(arreglo, contenedor){
  if(arreglo.length == 0){
      contenedor.innerHTML = `<h2>No se encontraron elementos!</>`
      return
  }
  let html = ''
  arreglo.forEach(element => {
      html += crearTarjeta(element)
  });
  contenedor.innerHTML = html
}

function crearSwitch(dato, tipo){
  return `<div class="form-check form-switch col">
              <input class="form-check-input ${tipo}" type="checkbox" role="switch" id="${dato}" value="${dato}">
              <label class="form-check-label" for="${dato}">${dato}</label>
          </div>`
}

function pintarSwitches(arregloDeDatos, contenedor, tipo){
  let html = ''
  arregloDeDatos.forEach(elemento => {
      html += crearSwitch(elemento, tipo)
  })
  contenedor.innerHTML = html
}

function extraerCategories(arreglo){
  return arreglo.map(elemento => elemento.category).filter((category,indice, categories) => categories.indexOf(category) == indice)
}

function filtrarPorTexto(arreglo, texto){
  let arregloFiltrado = arreglo.filter(elemento => elemento.name.toLowerCase().includes(texto.trim().toLowerCase()) || elemento.description.toLowerCase().includes(texto.trim().toLowerCase()))
  return arregloFiltrado
}

function filtrarPorCategorias(arreglo){
  let checkboxes = Array.from(document.getElementsByClassName("form-check-input categories"))
  let checkboxesAzules = checkboxes.filter(check => check.checked)
  let valores = checkboxesAzules.map(chAz => chAz.value)
  if(valores.length == 0){
      return arreglo
  }
  let arregloFiltrado = arreglo.filter(data => valores.includes(data.datos.category));
  return arregloFiltrado
}

function filtroDoble(){
  let filtro1 = filtrarPorCategorias(data.datos)
  let filtro2 = filtrarPorTexto (filtro1,buscador.value)
  pintarTarjetas(filtro2, contenedorCategorias)
}

















/*

function hacerCards(items,idContenedor){
  for(let item of items){
    let card = `<div class=" col-12 col-sm-6 col-md-4 col-xl-3">
  <div class="card">
      <img src="${item.image}" class="card-img-top" alt="${item.name}">
      <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text">${item.description}</p>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item"></li>
          <li>Category: ${item.category}</li>
          <li>Place: ${item.place}</li>
          <li>Capacity: ${item.capacity}</li>
          <li>Assistance: ${item.assistance}</li>
          <li>Date: ${item.date}</li>
      </ul>
      
      <div class="card-body">
          <a>Price: ${item.price}  </a>
          <button type="button" class="btn btn-outline-light">Details</button>
      </div>
  </div>`;
          document.getElementById(idContenedor).innerHTML += card;
  }
};

/*hacerCards(data.datos,'cardContainerPast')

/*condicional*/ 


/*
let datosPast = [];

for(let dato of data.datos){
  if (dato.date < data.currentDate ) {
    datosPast.push(dato)
  }
}
hacerCards(datosPast,'cardContainerPast');       */



  