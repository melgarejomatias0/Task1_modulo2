
let datos = [
    {
      _id: 1,
      image: './assets/img/food_fair.jpg',
      name: "Festival of the collectivities",
      date: 2022-12-12,
      description: "Enjoy your favorite dishes from different countries in a unique event for the whole family.",
      category:"Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance:42756,
      price: 5
    },
    {
      _id: 2,
      image: './assets/img/outing_to_the_museum.jpg',
      name: "Art Exhibition",
      date: 2022-11-2,
      description: "Let's go to the art museum for an incredible tour to learn about the largest dinosaurs.",
      category:"Museum",
      place: "Field",
      capacity: 82000,
      assistance:65892,
      price: 15
    },
    {
      _id: 3,
      image: './assets/img/costume_party.jpg',
      name: "Halloween Night",
      date: 2024-2-12,
      description: "Come in your scariest costume character to win amazing prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate:9000,
      price: 12
    },
    {
      _id: 4,
      image:'./assets/img/music_concert.jpg',
      name: "Metallica in concert",
      date: 2024-1-22,
      description: "The only concert of the most emblematic band in the world",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate:138000,
      price: 150
    },
    {
      id: 5,
      image: './assets/img/marathon.jpg',
      name: "10K for life",
      date: 2022-3-1,
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer Field",
      capacity: 30000,
      assistance:25698,
      price: 3
    },
    {
      _id: 6,
      image: './assets/img/books.jpg',
      name: "School Book Fair",
      date: 2022-10-15,
      description: "Bring your unused school book and bring the one you need",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      assistance: 123286,
      price: 1
    },
    {
      _id: 7,
      image: './assets/img/cinema.jpg',
      name: "Avengers",
      date: 2023-10-15,
      description: "Marvel's Avengers 3d premiere the start of an epic saga with your best superheroes",
      category: "Let's go to the cinema",
      place: "Room D1",
      capacity: 9000,
      estimate:9000,
      price: 250
    },
  ]
    
  console.log (datos);
  
  let ccardContainerUpcoming = document.getElementById('cardContainerUpcoming');
  
  for(let dato of datos){
    let card = `<div class=" col-12 col-sm-6 col-md-4 col-xl-3">
    <div class="card">
        <img src="${dato.image}" class="card-img-top" alt="${dato.name}">
        <div class="card-body">
            <h5 class="card-title">${dato.name}</h5>
            <p class="card-text">${dato.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"></li>
            <li>Category: ${dato.category}</li>
            <li>Place: ${dato.place}</li>
            <li>Capacity: ${dato.capacity}</li>
            <li>Assistance: ${dato.assistance}</li>
        </ul>
        
        <div class="card-body">
            <a>Price: ${dato.price}  </a>
            <button type="button" class="btn btn-outline-light">Details</button>
        </div>
    </div>`;
    cardContainerUpcoming.innerHTML += card;
  }
  