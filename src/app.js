import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  const excusaAleatoria = {
    who: ['The dog', 'My grandma', 'The mailman', 'My bird'],
    action: ['ate', 'peed', 'crushed', 'broke'],
    what: ['my homework', 'my phone', 'the car'],
    when: ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying']
  }

  const randomWho = excusaAleatoria.who[Math.floor(Math.random() * excusaAleatoria.who.length)];
  const randomAction = excusaAleatoria.action[Math.floor(Math.random() * excusaAleatoria.action.length)];
  const randomWhat = excusaAleatoria.what[Math.floor(Math.random() * excusaAleatoria.what.length)];
  const randomWhen = excusaAleatoria.when[Math.floor(Math.random() * excusaAleatoria.when.length)];

  const excusa = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`

  document.querySelector("#excuse").innerHTML = excusa;
  console.log("Hello Rigo from the console!");
};
