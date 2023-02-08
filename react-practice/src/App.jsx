import './App.css';
import Cat from './Components/004/Cat';

// Masyvas savyje turintis objektus - bene dazniausio duomenu tipo uzduotys, kurias atlikineja reactas
const cats = [
   { id: 1, weight: 5, name: 'Pukis' },
   { id: 2, weight: 3, name: 'Baltis' },
   { id: 3, weight: 2, name: 'Murka' },
   { id: 4, weight: 7, name: 'Pilke' },
   { id: 5, weight: 4, name: 'Juodis' },
]

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <h1>List</h1>
            <div className='container'>
               {
                  [...cats].sort((a, b) => a.name.localeCompare(b.name)).map((cat, i) => <Cat i={i} key={cat.id} cat={cat} />)
               }
            </div>
            <div className="container">
               {/* <Cat catName='Marsas' weight='13' />
               <Cat catName='Balte' weight='4' />
               <Cat catName='Snikersas' weight='7' /> */}
            </div>

         </header>
      </div>
   );
}

export default App;

// react'as sumapins cats masyva ir i li elementa sudes katinu vardus. Gausime katinu vardu nerusiuota sarasa;

// kaip key galima naudoti ir indeksa, jis taip pat yra unikalus. Kodas atrodytu taip:
// cats.map((cat, i) => <li key={i}>{cat.name}</li>)

/* UZDUOTIS Nr.1:
Itraukti katinu svori ir isrusiuoti nuo sunkiausio iki lengviausio:

  [...cats].sort((a, b) => b.weight - a.weight).map((cat, i) => <li key={i}>{cat.name}{' ' + cat.weight}kg</li>)
*/

/* UZDUOTIS Nr.2:
Isrusiuoti katinus pagal varda abeceles tvarka:

[...cats].sort((a, b) => a.name.localeCompare(b.name)).map((cat) => <li key={cat.id}>{cat.name}</li>)
*/


// catName yra propsas, kuris iseina