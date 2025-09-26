const items = [
  {idItem: "Chapa número 0", descripcion: "Es la única Monster que me he comprado. Salí a las 11 de casa de Juliana y solo seguía abierto el Farmatodo, así que solo pude conseguir Monster. Es tres veces más cara que el Amper, que es mi energizante de preferencia.", etiquetas:["chapa", "monster", "negro", "Afanado", "Juliana", "Suba"]},
  {idItem: "Chapa número 1", descripcion: "Esta chapa es de un coctel de Cuba Libre en lata que me tomé con Juliana en CityU, durante una especie de reconciliación.", etiquetas:["chapa", "cuba libre", "Contrariado", "metal", "Juliana", "Centro"]},
  {idItem: "Chapa número 2", descripcion: "Esta chapa es de una pola que me tomé hace un par de días en mi casa, porque llegué drenado mentalmente de la universidad.", etiquetas:["chapa", "pola", "metal", "Triste", "Fontibón", "solo"]},
  {idItem: "Chapa número 3", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Mundana", "Fontibón", "solo"]},
  {idItem: "Chapa número 4", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Mundana", "Fontibón", "solo"]},
  {idItem: "Chapa número 5", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 6", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 7", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 8", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 9", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 10", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 11", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 12", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 13", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 14", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 15", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 16", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 17", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 18", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 19", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 20", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 21", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud.", etiquetas:["chapa", "amper", "negro", "Fontibón", "Mundana", "solo"]},
  {idItem: "Chapa número 22", descripcion: "Una chapa común y corriente de Amper, un energizante bastante barato que me ha sacado de bastantes problemas en los últimos años. Es ridiculamente barato, probablemente es muy malo para la salud. Creo que esta chapa es la del Amper que me tomé para hacer este trabajo.", etiquetas:["chapa", "amper", "negro", "Fontibón",  "Mundana", "solo"]},
  {idItem: "Envoltorio número 0", descripcion: "El envoltorio plástico de una paleta que Juliana me regaló un día en su casa.", etiquetas: ["envoltorio", "Feliz", "plastico", "Juliana", "Suba"]},
  {idItem: "Envoltorio número 1", descripcion: "El envoltorio de un cono de helado que comí con Juliana después de acompañarla a una cita de psicología.", etiquetas: ["envoltorio","Feliz", "papel", "Juliana", "Teusaquillo"]},
  {idItem: "Envoltorio número 2", descripcion: "El envoltorio de unos Reeses que Juliana me regaló un día en su casa. Son mis dulces favoritos. Hasta antes de hacer esta base de datos, solo ella y mi mamá sabían eso.", etiquetas: ["envoltorio", "Feliz", "plastico", "Juliana", "Suba"]},
  {idItem: "Envoltorio número 3", descripcion: "El envoltorio de las galletas wafer que Juliana me ofreció para posponer una despedida. Mientras nos detuvimos a comer galletas, ella me dijo que yo le gustaba. Es un recuerdo muy grato para mí.", etiquetas: ["envoltorio", "Feliz", "plastico", "Juliana", "Suba"]},
  {idItem: "Recibo número 0", descripcion: "El recibo de una camisa que compré en Colina con Juliana. Cada uno tiene una idéntica.", etiquetas: ["recibo", "ropa", "Feliz", "Juliana", "Suba"]},
  {idItem: "Recibo número 1", descripcion: "El recibo de un chorizo y queso que compré para mi suegro.", etiquetas: ["recibo", "Mundana", "comida", "Juliana", "Chapinero"]},
  {idItem: "Recibo número 2", descripcion: "El recibo del almuerzo que le compré a Juliana en Creppes y Waffles en la zona G, con mi primer pago por ser monitor.", etiquetas: ["recibo", "Feliz", "comida", "Juliana", "Chapinero"]},
  {idItem: "Recibo número 3", descripcion:"El recibo que me dieron en una flota, regresandome para Bogotá con Juliana. Lo guardé porque me extrañó: llevo muchos años cogiendo flota y es la única vez que me han dado recibo.",etiquetas: ["recibo", "Mundana", "transporte", "Juliana", "Chia"]},
  {idItem: "Recibo número 4", descripcion: "El recibo de una camisa de segunda mano que compré con Juliana, en Chapinero.", etiquetas: ["recibo", "Feliz", "ropa", "Juliana", "Chapinero"]},
  {idItem: "Recibo número 5", descripcion: "El recibo de una sopa de frijoles que le compré a Juliana en el Creppes y Waffles de la Julio Mario. Esa noche hablamos bastante sobre las implicaciones del proceso creativo y el ser artista.", etiquetas: ["recibo", "Feliz", "comida", "Juliana", "Suba"]},
  {idItem: "Recibo número 6", descripcion: "El recibo de un helado de Creppes y Waffles que comí con mi amigo Emmanuel en Diverplaza, en Engativá. Ese día hablamos bastante sobre las implicaciones de la ideación suicida y lo difícil que es abandonarla. Yo comí un helado de banano y estaba muy rico.", etiquetas: ["recibo", "Contrariado", "comida", "Amigos", "Engativá"]},
  {idItem: "Recibo número 7", descripcion: "El recibo de los ingredientes que compré un día para ofrecerle algo de cenar a Juliana. Ese día comimos en mi casa, en Fontibón.", etiquetas: ["recibo", "comida", "Juliana", "Feliz", "Fontibón"]},
  {idItem: "Recibo número 8", descripcion: "El recibo de una función de Joker 2, en Santa Fe. Ese día me iba a ver con mis amigos y les llegué tarde por estar hablando con Juliana. Al final ella también fue al cine con nosotros. Ese día me di cuenta de que estoy profundamente enamorado de ella.", etiquetas: ["recibo", "Feliz", "cine", "Juliana", "Amigos", "Suba"]},
  {idItem: "Recibo número 9", descripcion: "El recibo de un peluche que le compré a Juliana en Galerias. Es un peluche de un sapo rosado que parece una fresa. Le llamamos sapofresa.", etiquetas: ["recibo", "peluche", "Juliana", "Feliz", "Chapinero"]},
  {idItem: "Recibo número 10", descripcion: "El recibo de una función de cine que vi en Galerias con Juliana. Ese día tuvimos una discusión abrumadora y lloramos bastante antes de entrar a la película.", etiquetas: ["recibo", "cine", "Triste", "Juliana", "Chapinero"]},
  {idItem: "Recibo número 11", descripcion: "El recibo de un bajo eléctrico Yamaha que compré con ayuda de Juliana y de mi mamá. Todavía no he aprendido a tocarlo. Tampoco he acabado de pagar lo que le debo a ambas.", etiquetas: ["recibo", "instrumento", "Feliz", "Juliana", "Chapinero"]}
];


function mostrarItems() {
  const eleccion = document.getElementsByClassName("objetos");
  const tipo = eleccion[0].value;   
  const lugar = eleccion[1].value;  
  const compañia = eleccion[2].value;  
  const emocion = eleccion[3].value;  


  const tbody = document.querySelector("#itemsTable tbody");
  tbody.innerHTML = "";

  const filtrado = items.filter(item =>
    (tipo === "" || item.etiquetas.includes(tipo)) &&
    (lugar === "" || item.etiquetas.includes(lugar)) &&
    (compañia === "" || item.etiquetas.includes(compañia)) &&
    (emocion === "" || item.etiquetas.includes(emocion))

  );

  filtrado.forEach(item => {
    const row = document.createElement("tr");

    // Col 1: ID
    const colId = document.createElement("td");
    colId.textContent = item.idItem;
    row.appendChild(colId);

    // Col 2: Imagen
    const colImg = document.createElement("td");
    const [tipoBase, , numero] = item.idItem.split(" ");
    const fileName = `${tipoBase.toLowerCase()}${numero}.JPG`;
    const foto = document.createElement("img");
    foto.src = `https://raw.githubusercontent.com/cCalic04/finalDatos/refs/heads/main/${fileName}`;
    foto.alt = item.idItem;
    foto.style.maxWidth = "150px";
    foto.style.height = "auto";
    colImg.appendChild(foto);
    row.appendChild(colImg);

    // Col 3: Descripción
    const colDesc = document.createElement("td");
    colDesc.textContent = item.descripcion || "Sin descripción";
    row.appendChild(colDesc);

    tbody.appendChild(row);
  });
}

//const objetos = document.getElementById("")
