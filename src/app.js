window.onload = function() {
  let who = ["El perro", "Mi abuela", "Su tortuga", "Mi pájaro"];
  let action = ["se comió", "orinó en", "aplastó", "rompió"];
  let what = ["mi tarea", "las llaves", "el auto"];
  let when = [
    "antes de la clase",
    "justo a tiempo",
    "cuando terminé",
    "durante mi almuerzo",
    "mientras rezaba"
  ];

  function generarExcusa() {
    let randomWho = who[Math.floor(Math.random() * who.length)];
    let randomAction = action[Math.floor(Math.random() * action.length)];
    let randomWhat = what[Math.floor(Math.random() * what.length)];
    let randomWhen = when[Math.floor(Math.random() * when.length)];

    let excusaGenerada = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

    document.getElementById("excuse").innerHTML = excusaGenerada;
  }

  // Asignar la función generarExcusa al botón
  document.querySelector("button").addEventListener("click", generarExcusa);
};
