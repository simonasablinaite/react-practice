// KOMPONENTAS, kurio pavadinimas Dog: 
// Komponento pavadinimas is didziosios raides. 
// Komponenta svarbu isexportuoti ir po to suimportuoti reikiamame faile, pvz App.jsx
// {} skliausteliais pereinama i js aplinka, tai, tai kas yra {} skliausteliuose, yra js kodas

import rand from "../../Functions/rand";

   
function Dog() {
      return (
         <>
            <h2>Dog {false ? 'jo' : 'no'} </h2>
            <h3 className="dog">Big {rand(100, 999)}</h3> 
         </>
      );
   }

export default Dog;

// 13 eil. - random skaiciaus generavimas javascripte
// {} generuojamas vienos eilutes kodas, todel cia naudinga naudoti ternary operatoriu;
// 13 eil. - className='dog' - javascriptinis klases uzrasymas. 
