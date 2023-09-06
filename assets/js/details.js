
let parametros = new URLSearchParams(window.location.search)
let id = parametros.get("id")

const contenedor = document.getElementById('contenedor')


let datos = buscarDatos(id)
console.log(data);

pintarTarjeta(data,contenedor)


// Funciones

function buscarDatos(id){
    return data.find(datos=> datos.id == id)
       }

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
  
function pintarTarjeta(elemento, contenedor){
    contenedor.innerHTML = crearTarjeta(elemento)
  }
  
  