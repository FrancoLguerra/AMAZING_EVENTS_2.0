const url =
  "https://github.com/Juan2805/AmazingEvents4.0/blob/main/events.json";
const arrayCards = {
  fechaActual: "2022-01-01",
  eventos: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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
      id: 7,
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
      id: 8,
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
      id: 9,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
      name: "10K for life",
      date: "2021-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Campo de Futb????l",
      capacity: 30000,
      assistance: 25698,
      price: 3,
    },
    {
      id: 10,
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
      id: 11,
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
      id: 12,
      image: "https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
      name: "Just for your kitchen",
      date: "2021-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
    },
    {
      id: 13,
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
      id: 14,
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
    });
  }
};

const category = (arrayCards) => {
  let opciones = document.getElementById("container-opc");
  let opcionesSinRepetidos = [];
  for (let i = 0; i < arrayCards.length; i++) {
    if (!opcionesSinRepetidos.includes(arrayCards[i].category)) {
      opcionesSinRepetidos.push(arrayCards[i].category);
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
//category(arrayCards);

// const pintarDom = (arrayCards) => {
//   let cards = document.getElementById("cards");

//   cards.innerHTML = "";
//   if (window.location.pathname == "/pages/upcoming-events.html") {
//     let eventos = [];
//     for (let i = 0; i < arrayCards.length; i++) {
//       if (fechaActual < Date.parse(arrayCards[i].date)) {
//         eventos.push(arrayCards[i]);
//       }
//     }
//     crearCards(eventos);
//   } else if (window.location.pathname == "/index.html") {
//     console.log(arrayCards);
//     crearCards(arrayCards);
//   } else if (window.location.pathname == "/pages/past-events.html") {
//     let eventos = [];
//     for (let i = 0; i < arrayCards.length; i++) {
//       if (fechaActual > Date.parse(arrayCards[i].date)) {
//         eventos.push(arrayCards[i]);
//       }
//     }
//     crearCards(eventos);
//   }
// };

const eventoDetalles = (arrayEventos) => {
  localStorage.clear();

  arrayEventos.forEach((evento) => {
    document.querySelectorAll(".detalles").forEach((boton) => {
      boton.addEventListener("click", (e) => {
        const eventoDetallado = {
          franco: "franco",
          id: evento.id,
          image: evento.image,
          name: evento.name,
          date: evento.date,
          description: evento.description,
          category: evento.category,
          place: evento.place,
        };

        localStorage.setItem(
          "eventoDetallado",
          JSON.stringify(eventoDetallado)
        );
        localStorage.setItem("id", boton.id);
      });
    });
  });
};

const crearCards = (arrayCards) => {
  let count = 0;

  arrayCards.forEach((evento) => {
    let cards = document.getElementById("cards");
    cards.innerHTML += `
  <div class="card  col-xs-12 col-sm-4 col-md-5 col-lg-3  " style="width: 15rem;" >
            <img src="${evento.image}" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${evento.name}</h5>
              <p class="card-text">
              ${evento.description}
             
              </p>
              <a href="${href}" id="${evento.id}" class="btn btn-primary detalles">Ver mas</a>
            </div>
          </div>`;
    count++;
  });

  eventoDetalles(arrayCards);
};

// const buscarInput = document.getElementById("buscarInput");
// const buscarBtn = document.getElementById("buscarBtn");
// const checkboxs = document.querySelectorAll(".form-check-input");

// const buscarXInput = () => {
//   let palabraClave = buscarInput.value;
//   let arrayFiltrado = [];
//   if (palabraClave.length > 0) {
//     arrayFiltrado = arrayCards.eventos.filter((evento) => {
//       return evento.name.toLowerCase().includes(palabraClave.toLowerCase());
//     });
//   }
//   return arrayFiltrado;
//   console.log(arrayFiltrado);
//   //let cards = document.getElementById("cards");
//   // cards.innerHTML = ``;
//   //pintarDom(arrayFiltrado);
// };

// buscarBtn.addEventListener("click", () => {
//   console.log("se hizo clic en btn buscar");
//   let arrayFiltradoXPalabra = [];
//   let categoriasSeleccionadas = [];
//   let arrayFiltradoXCheckbox = [];
//   console.log("se crearon arrays vacios");
//   checkboxs.forEach((checkbox) => {
//     console.log("entra al forEach");
//     if (checkbox.checked === true) {
//       categoriasSeleccionadas.push(checkbox.value);
//     }
//   });

//   console.log("entra al if checked = true", categoriasSeleccionadas);
//   if (categoriasSeleccionadas.length > 0) {
//     arrayFiltradoXPalabra = buscarXInput();

//     console.log(arrayFiltradoXPalabra);
//     if (arrayFiltradoXPalabra.length > 0) {
//       categoriasSeleccionadas.forEach((categoria) => {
//         arrayFiltradoXCheckbox = arrayFiltradoXPalabra.filter((evento) => {
//           return evento.category.includes(categoria);
//         });
//       });
//     } else if (arrayFiltradoXPalabra.length <= 0) {
//       console.log("entra al else arrayFiltradoXPalabra.length > 0");
//       categoriasSeleccionadas.forEach((categoria) => {
//         arrayFiltradoXCheckbox = arrayCards.eventos.filter((evento) => {
//           return evento.category.includes(categoria);
//         });
//       });
//       console.log(arrayFiltradoXCheckbox);
//     }
//   } else if (categoriasSeleccionadas.length > 0) {
//     arrayFiltradoXPalabra = buscarXInput();
//     if (arrayFiltradoXPalabra) {
//       arrayFiltradoXCheckbox = arrayFiltradoXPalabra;
//     }
//   }
//   console.log("antes de pintar el DOM", arrayFiltradoXCheckbox);
//   crearCards(arrayFiltradoXCheckbox);
// });

let href = "";
//selecciono la acci??n a realizar seg??n la url actual
let router = () => {
  const urlActual = window.location.pathname.split("/").pop();
  switch (urlActual) {
    case "index.html":
      routController(urlActual, "all");

      break;
    case "past-events.html":
      routController(urlActual, "past");
      break;
    case "description.html":
      //envio id del evento a la funci??n que crea el modal

      cardDescription();
      break;
    case "upcoming-events.html":
      routController(urlActual, "upcoming");
      break;
    case "contact.html":
      break;
    case "stats.html":
      showStatsEvents();
      break;
    default:
      routController(urlActual, "all");
      break;
  }
};
//filtro eventos seg??n la url actual
const filteredEvents = (orden, array) => {
  let arrayFiltrado = [];
  console.log("orden:", orden, "array:", array);
  if (orden === "past") {
    for (let i = 0; i < array.length; i++) {
      if (fechaActual > Date.parse(array[i].date)) {
        arrayFiltrado.push(array[i]);
      }
    }
  } else if (orden === "upcoming") {
    for (let i = 0; i < array.length; i++) {
      if (fechaActual < Date.parse(array[i].date)) {
        arrayFiltrado.push(array[i]);
      }
    }
  } else {
    arrayFiltrado = array;
  }
  return arrayFiltrado;
};

//creo controlador de rutas
const routController = async (url, orden) => {
  let events = arrayCards.eventos; // await getAllEvents();
  if (url === "past-events.html" || url === "upcoming-events.html") {
    href = "./description.html";
    let orderedEvents = filteredEvents(orden, events);
    category(orderedEvents);

    crearCards(orderedEvents);
  } else if (url === "index.html") {
    href = "./pages/description.html";
    category(arrayCards.eventos);
    crearCards(arrayCards.eventos);
  }
};

const cardDescription = () => {
  console.log("dentro de cardDescription");
  let idEvent = localStorage.getItem("id");
  console.log(idEvent);
  const evento = arrayCards.eventos.find((evento) => {
    return evento.id == idEvent;
  });

  console.log(evento);
  mostrarCardDescription(evento);
};
const mostrarCardDescription = (evento) => {
  console.log("dentro de mostrarCardDescription");
  let containerDescription = document.getElementById("containerDescription");
  containerDescription.innerHTML += `
  <div class="card mb-3 w-100">
  <div class="row g-0">
    <div class="col-md-4">
      <img
        src=${evento.image}
        class="img-fluid rounded-start"
        alt="..."
      />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">
        ${evento.description}
        </p>
        <p class="card-text">
          <small class="text-muted">${evento.category}-${evento.date}</small>
        </p>
      </div>
    </div>
  </div>
</div>`;
};

const templateEventsStats = async (eventsWhitPercentageAttendance) => {
  //creo la tabla para cargar los eventos
  console.log("entra a templateEventsStats");
  let table = document.getElementById("bodyEventsStats");
  let mayorAttendance = await getOrderedEvents(
    eventsWhitPercentageAttendance,
    "porcentageAttendance",
    "desc"
  );
  let mayorCapacity = await getOrderedEvents(
    eventsWhitPercentageAttendance,
    "capacity",
    "asc"
  );
  let menorAttendance = await getOrderedEvents(
    eventsWhitPercentageAttendance,
    "porcentageAttendance",
    "asc"
  );

  let invert = mayorAttendance.length - 1;
  const size = mayorAttendance.length;

  for (let i = 0; i < size; i++) {
    table.innerHTML += `
          
            <tr>
              <td class="td-width">${mayorAttendance[i].porcentageAttendance}</td>
              <td class="td-width">${menorAttendance[invert].porcentageAttendance}</td>
              <td class="td-width">${mayorCapacity[i].capacity}</td>
            </tr>
     `;
    invert--;
  }
};

const templatePastOrUpcomingEventsStats = async (statsByCategory, momento) => {
  //creo la tabla para cargar los eventos

  // let mayorAttendance = getOrderedEvents(eventsWhitPercentageAttendance, "porcentageAttendance", "desc");
  // let menorAttendance = getOrderedEvents(eventsWhitPercentageAttendance, "porcentageAttendance", "asc");
  // let mayorCapacity = getOrderedEvents(eventsWhitPercentageAttendance, "capacity", "desc");
  const statsByCategoryOrderPorcentageAttendance = await getOrderedEvents(
    statsByCategory, 'totalPorcentageAttendance', "asc" );
  if (momento === "past") {
    console.log("entra a past");
    let tablePast = document.getElementById("bodyPastEventsStats");
    for (let i = 0; i < statsByCategory.length; i++) {
      console.log("entra for past", statsByCategory[i]);
      tablePast.innerHTML += `
    <tr>
    <td class="td-width">${statsByCategory[i].category}</td>
    <td class="td-width">${statsByCategory[i].totalAssistance || 0}</td>
    <td class="td-width">${statsByCategoryOrderPorcentageAttendance[i].totalPorcentageAttendance}</td>
  </tr>
    `;
    }
  } else if (momento === "upcoming") {
    console.log("entra a upcoming");
    let tableUpcoming = document.getElementById("bodyUpcomingEventsStats");
    for (let i = 0; i < statsByCategory.length; i++) {
      console.log("entra for upcoming", statsByCategory[i]);
      tableUpcoming.innerHTML += `
      <tr>
    <td class="td-width">${statsByCategory[i].category}</td>
    <td class="td-width">${statsByCategory[i].totalAssistance || 0}</td>
    <td class="td-width">${statsByCategoryOrderPorcentageAttendance[i].totalPorcentageAttendance}</td>
  </tr>
    `;
    }
  } else {
    alert("error");
  }
};

// const templateRow = (event) => {
//   const row = `
//   <tr>
//   <td class="td-width">${event.category}</td>
//   <td class="td-width">${event[i].totalAssistance ||0}</td>
//   <td class="td-width">${event[i].totalPorcentageAttendance}</td>
// </tr>`
//   return row;
// }

const getAllEvents = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getPorcentageAttendance = async (events) => {
  //let events = await getAllEvents();
  events.forEach((event) => {
    let porcentageAttendance =
      ((event.assistance || event.estimate) / event.capacity) * 100;
    event.porcentageAttendance = porcentageAttendance;
  });
  return events;
};

const getOrderedEvents = async (events, attribute, order) => {
  events.sort((a, b) => {
    if (order === "asc") {
      return b[attribute] - a[attribute];
    } else if (order === "desc") {
      return a[attribute] - b[attribute];
    }
  });
  return events;
};

const getGroupByCategory = (events) => {
  let categories = [];
  events.forEach((event) => {
    if (!categories.includes(event.category)) {
      categories.push(event.category);
    }
  });
  return categories;
};

const getEventsByCategory = (categories, events) => {
  let eventsByCategory = [];
  let size = categories.length;
  categories.forEach((category) => {
    let eventsByCategoryAux = events.filter(
      (event) => event.category === category
    );

    eventsByCategory.push(eventsByCategoryAux);
  });

  return eventsByCategory;
};

const getStatsByCategory = async (eventsByCategory) => {
  let statsByCategory = [];
  eventsByCategory.forEach((events) => {
    let statsByCategoryAux = {
      category: "",
      totalEvents: events.length,
      totalAssistance: 0,
      totalCapacity: 0,
      totalEstimate: 0,
      totalPorcentageAttendance: 0,
    };
    events.forEach((event) => {
      statsByCategoryAux.category = event.category;
      statsByCategoryAux.totalAssistance += event.assistance;
      statsByCategoryAux.totalCapacity += event.capacity;
      statsByCategoryAux.totalEstimate += event.estimate;
      statsByCategoryAux.totalPorcentageAttendance +=
        event.porcentageAttendance;
    });
    statsByCategory.push(statsByCategoryAux);
  });

  return statsByCategory;
};
//sumo los valores totales por categoria
const getStatsByCategoryTotal = async (statsByCategory) => {
  let statsByCategoryTotal = {
    totalEvents: 0,
    totalAssistance: 0,
    totalCapacity: 0,
    totalEstimate: 0,
    totalPorcentageAttendance: 0,
  };
  statsByCategory.forEach((stats) => {
    console.log(stats);
    statsByCategoryTotal.totalEvents += stats.totalEvents;
    statsByCategoryTotal.totalAssistance += stats.totalAssistance;
    statsByCategoryTotal.totalCapacity += stats.totalCapacity;
    statsByCategoryTotal.totalEstimate += stats.totalEstimate;
    statsByCategoryTotal.totalPorcentageAttendance +=
      stats.totalPorcentageAttendance;
  });
  console.log(statsByCategoryTotal, "statsByCategoryTotal");
  return statsByCategoryTotal;
};

const showStatsEvents = async () => {
  const events = arrayCards.eventos; //await getAllEvents();
  console.log(events);
  const eventsPorcentageAttendance = await getPorcentageAttendance(events);
  const upcomingEvents = await filteredEvents(
    "upcoming",
    eventsPorcentageAttendance
  );
  const upcomingGroupByCategory = getGroupByCategory(upcomingEvents);
  const upcomingEventsByCategory = getEventsByCategory(
    upcomingGroupByCategory,
    upcomingEvents
  );
  const upcomingStatsByCategory = await getStatsByCategory(
    upcomingEventsByCategory,
    "upcoming"
  );
  const upcomingStatsByCategoryTotal = await getStatsByCategoryTotal(
    upcomingStatsByCategory
  );
  console.log(upcomingStatsByCategory);
  const pastEvents = await filteredEvents("past", eventsPorcentageAttendance);
  const pastGroupByCategory = getGroupByCategory(pastEvents);
  const pastEventsByCategory = getEventsByCategory(
    pastGroupByCategory,
    pastEvents
  );
  const pastStatsByCategory = await getStatsByCategory(
    pastEventsByCategory,
    "past"
  );
  console.log(pastStatsByCategory);
  const pastStatsByCategoryTotal = await getStatsByCategoryTotal(
    pastStatsByCategory
  );

  templateEventsStats(eventsPorcentageAttendance);
  templatePastOrUpcomingEventsStats(upcomingStatsByCategory, "upcoming");
  console.log(upcomingStatsByCategoryTotal, "upcoming total");
  templatePastOrUpcomingEventsStats(pastStatsByCategory, "past");
  //console.log(pastStatsByCategoryTotal, "past total")
};

router();
//eventsByCategory();
