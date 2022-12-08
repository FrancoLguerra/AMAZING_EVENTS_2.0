const arrayCards = {
  fechaActual: "2022-01-01",
  eventos: [
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
      name: "Collectivities Party",
      date: "2021-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
      name: "Korean style",
      date: "2021-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 10,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
      name: "Jurassic Park",
      date: "2021-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      assistance: 65892,
      price: 15,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
      name: "Parisian Museum",
      date: "2022-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
      name: "Comicon",
      date: "2021-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
      name: "Halloween Night",
      date: "2022-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
      name: "Metallica in concert",
      date: "2022-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
    },
    {
      image:
        "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
      name: "Electronic Fest",
      date: "2021-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
      name: "10K for life",
      date: "2021-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Campo de FutbÃ³l",
      capacity: 30000,
      assistance: 25698,
      price: 3,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
      name: "15K NY",
      date: "2021-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      assistance: 2569800,
      price: 3,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
      name: "School's book fair",
      date: "2022-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
      name: "Just for your kitchen",
      date: "2021-11-09",
      escription:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
      name: "Batman",
      date: "2021-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
    },
    {
      image: "https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
      name: "Avengers",
      date: "2022-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
    },
  ],
};
const fechaActual = Date.parse(arrayCards.fechaActual);

const tomarCheckbox = () => {
  let checkboxes = document.querySelectorAll("input[type=checkbox]");
  let eventos = [];
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", (e) => {
      if (e.target.checked) {
        for (let j = 0; j < arrayCards.eventos.length; j++) {
          let cardAComparar = document.getElementById(j);
          if (e.target.value == arrayCards.eventos[j].category) {
            cardAComparar.classList.add("hidden");
          }
        }
      } else {
        for (let j = 0; j < arrayCards.eventos.length; j++) {
          let cardAComparar = document.getElementById(j);
          if (e.target.value == arrayCards.eventos[j].category) {
            cardAComparar.classList.remove("hidden");

            
          }
        }
      }
      //pintarDom(eventos);
    });
  }
};


const category = (arrayCards) => {
  let opciones = document.getElementById("container-opc");
  console.log(opciones.innerHTML);
  let opcionesSinRepetidos = [];
  for (let i = 0; i < arrayCards.eventos.length; i++) {
    if (!opcionesSinRepetidos.includes(arrayCards.eventos[i].category)) {
      opcionesSinRepetidos.push(arrayCards.eventos[i].category);
    }
  }
  for (let i = 0; i < opcionesSinRepetidos.length; i++) {
    //console.log(opciones)
    opciones.innerHTML += `
    <div class="form-check form-check-inline">
    <input
    class="form-check-input ${opcionesSinRepetidos[i]}"
    type="checkbox"
    id="inlineCheckbox${i}"
    value=${opcionesSinRepetidos[i]}
    />
    <label class="form-check-label" for="inlineCheckbox2"
      >${opcionesSinRepetidos[i]}</label
      >
      </div>`;
  }
  // console.log("Saliendo",opciones.innerHTML)
  tomarCheckbox();
};
category(arrayCards);





const pintarDom = (arrayCards) => {
  let cards = document.getElementById("cards");

  cards.innerHTML = "";
  if (window.location.pathname == "/pages/upcoming-events.html") {
    let eventos = [];
    for (let i = 0; i < arrayCards.length; i++) {
      if (fechaActual < Date.parse(arrayCards[i].date)) {
        eventos.push(arrayCards[i]);
      }
    }
    crearCards(eventos);
  } else if (window.location.pathname == "/index.html") {
    crearCards(arrayCards);
  } else if (window.location.pathname == "/pages/past-events.html") {
    let eventos = [];
    for (let i = 0; i < arrayCards.length; i++) {
      if (fechaActual > Date.parse(arrayCards[i].date)) {
        eventos.push(arrayCards[i]);
      }
    }
    crearCards(eventos);
  }
};
const crearCards = (arrayCards) => {
  let count = 0;
  arrayCards.forEach((evento) => {
    let cards = document.getElementById("cards");
    cards.innerHTML += `
  <div class="card  col-xs-12 col-sm-4 col-md-5 col-lg-3 " style="width: 15rem;" id="${count}">
            <img src="${evento.image}" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${evento.name}</h5>
              <p class="card-text">
              ${evento.description}
             
              </p>
              <a href="./pages/description.html" class="btn btn-primary">Ver mas</a>
            </div>
          </div>`;
          count++;
  });
};

const buscarInput = document.getElementById("buscarInput");
const buscarBtn = document.getElementById("buscarBtn");
const checkboxs = document.querySelectorAll(".form-check-input");

const buscarXInput = () => {
  let palabraClave = buscarInput.value;
  let arrayFiltrado = [];
  if (palabraClave.length > 0) {
    arrayFiltrado = arrayCards.eventos.filter((evento) => {
      return evento.name.toLowerCase().includes(palabraClave.toLowerCase());
    });
  }
  return arrayFiltrado;
  console.log(arrayFiltrado);
  //let cards = document.getElementById("cards");
  // cards.innerHTML = ``;
  //pintarDom(arrayFiltrado);
};

buscarBtn.addEventListener("click", () => {
  console.log("se hizo clic en btn buscar");
  let arrayFiltradoXPalabra = [];
  let categoriasSeleccionadas = [];
  let arrayFiltradoXCheckbox = [];
  console.log("se crearon arrays vacios");
  checkboxs.forEach((checkbox) => {
    console.log("entra al forEach");
    if (checkbox.checked === true) {
      categoriasSeleccionadas.push(checkbox.value);
    }
  });

  console.log("entra al if checked = true", categoriasSeleccionadas);
  if (categoriasSeleccionadas.length > 0) {
    arrayFiltradoXPalabra = buscarXInput();

    console.log(arrayFiltradoXPalabra);
    if (arrayFiltradoXPalabra.length > 0) {
      categoriasSeleccionadas.forEach((categoria) => {
        arrayFiltradoXCheckbox = arrayFiltradoXPalabra.filter((evento) => {
          return evento.category.includes(categoria);
        });
      });
    } else if (arrayFiltradoXPalabra.length <= 0) {
      console.log("entra al else arrayFiltradoXPalabra.length > 0");
      categoriasSeleccionadas.forEach((categoria) => {
        arrayFiltradoXCheckbox = arrayCards.eventos.filter((evento) => {
          return evento.category.includes(categoria);
        });
      });
      console.log(arrayFiltradoXCheckbox);
    }
  } else if (categoriasSeleccionadas.length >0) {
    arrayFiltradoXPalabra = buscarXInput();
    if (arrayFiltradoXPalabra) {
      arrayFiltradoXCheckbox = arrayFiltradoXPalabra;
    }
  }
  console.log("antes de pintar el DOM", arrayFiltradoXCheckbox);
  pintarDom(arrayFiltradoXCheckbox);
});

pintarDom(arrayCards.eventos);
