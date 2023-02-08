import rand from "../../Functions/rand";

function Cat() {
   return rand(0, 1) ? <h1>Pukis</h1> : <h3>Pukutis</h3>
}

export default Cat;

/* UZDUOTIS Nr.1:
Random isspausdinti katino varda "Pukis/Pukutis" arba h1 tage arba h3 tage;

*/