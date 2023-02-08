// KOMPONENTAS, kurio pavadinimas Dog: 
// Komponento pavadinimas is didziosios raides. 
// Komponenta svarbu isexportuoti ir po to suimportuoti reikiamame faile, pvz App.jsx
// {} skliausteliais pereinama i js aplinka, tai, tai kas yra {} skliausteliuose, yra js kodas

import rand from "../../Functions/rand";

   
function Dog() {
   // conditional rendering components:
   if (rand(0,1)) {
      return null;
   }

      return (
         <>
            <h2 className="h2" style={{
               color: ['yellowgreen', 'yellow', 'orange'][rand(0, 2)],
               fontSize: rand(0, 1) ? '40px' : null,
               
               }}>Dog {false ? 'jo' : 'no'} </h2>
            <h3 className={rand(0, 1) ? "dog" : 'cat'}>Big {rand(100, 999)}</h3> 
         </>
      );
   }

export default Dog;

// 13 eil. - random skaiciaus generavimas javascripte
// {} generuojamas vienos eilutes kodas, todel cia naudinga naudoti ternary operatoriu;
// 13 eil. - className='dog' - javascriptinis klases uzrasymas.

/* reacte stilius rasomas kaip javascriptinis objektas. Kadangi tai js'as, uzdedami javascriptiniai skliausteliai {} ir kadangi tai objektas - uzdedami dar ir objektiniai skliausteliai {}, pvz.: 
 style={{color: 'blue'}});
 
 */

/*  UZDUOTIS Nr.2:
 h2 tagui padaryti random spalvas arba yellowgreen arba yellow: color: rand(0, 1) ? 'yellowgreen' : 'yellow'
 */

/* UZDUOTIS Nr.3: 
 Padaryti, kad h2 spalva butu arba 'yelowgreen, arba 'yellow' arba 'orange':
 color: ['yellowgreen', 'yellow', 'orange'][rand(0, 2)]
*/

/*
UZDUOTIS Nr.:
Padaryti, kad tagas h3 turetu random klase arba 'cat', arba 'dog':
<h3 className={rand(0, 1) ? "dog" : "cat"}>
*/
