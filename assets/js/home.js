
const contenedor = document.getElementById('contenedor')
const contenedorCategorias = document.getElementById('categories')
const buscador = document.getElementById('buscador')

pintarTarjetas(data.datos, contenedor)

let categories = extraerCategories(data.datos)

pintarSwitches(categories, contenedorCategorias, "categories")

contenedorCategorias.addEventListener("change",filtroDoble)

buscador.addEventListener("input",filtroDoble)










// Funciones parte 2 jeje

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
              <a class="botones btn btn-secondary" href="./details.html?id=${item.id}">Details</a>
             
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
  let arregloFiltrado = arreglo.filter(elemento =>  elemento.name.toLowerCase().includes(texto.trim().toLowerCase()))
  return arregloFiltrado
}

function filtrarPorCategorias(arreglo){
  let checkboxes = Array.from(document.getElementsByClassName("form-check-input categories"))
  let checkboxesAzules = checkboxes.filter(check => check.checked)
  if(checkboxesAzules.length == 0){
      return arreglo
  }
  let valores = checkboxesAzules.map(chAz => chAz.value)
  let arregloFiltrado = arreglo.filter(data => valores.includes(data.category));
  return arregloFiltrado
  
}

function filtroDoble(){
  let filtro1 = filtrarPorCategorias(data.datos)
  let filtro2 = filtrarPorTexto (filtro1,buscador.value)
  pintarTarjetas(filtro2, contenedor)
}












/*
// Funciones

function hacerCards(items, idContenedor){
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

hacerCards(data.datos,'cardContainerIndex')

function crearSwitch(datos){
  return `<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="${datos}">
  <label class="form-check-label" for="${datos}">${datos}</label>
  </div>`
}


function pintarSwitches(data, categorias){
  let html = ''
  data.forEach(elemento => {
    html += crearSwitch(elemento)
  });
  categorias.innerHTML = html
}

function extraerCategorias(data){
  return data.map(elemento => elemento.category).filter(category => indice, categories) => categories.indexOf(category) == indice
}




*/














/* eventos  */  

/*
contenedorCategorias.addEventListener("change", ()=>[

])

buscador.addEventListener("input", ()=>[
let filtro1 = filtrarPorTexto(category,buscador,value)
])
hacerCards(filtro1,contenedor)




function filtrarPorTexto(arreglo, texto){
  let arregloFiltrado = arreglo.filter(Elemento =>Elemento.category.toLowerCase.includes(texto.toLowerCase()))
 || eleto.category.toLowerCase().includes(texto.toLowerCase())
 return arregloFiltrado
}


function filtratPorCheckbox()



*/