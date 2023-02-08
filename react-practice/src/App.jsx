import './App.css';

// Masyvas savyje turintis objektus - bene dazniausio duomenu tipo uzduotys, kurias atlikineja reactas
const cats = [
   {id: 1, weight: 5, name: 'Pukis'},
   {id: 2, weight: 3, name: 'Baltis'},
   {id: 3, weight: 2, name: 'Murka'},
   {id: 4, weight: 7, name: 'Pilke'},
   {id: 5, weight: 4, name: 'Juodis'},
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <h1>List</h1>
            <ul>
               {
                  // react'as sumapins cats masyva ir i li elementa sudes katinu vardus. Gausime katinu vardu nerusiuota sarasa
                  cats.map(cat => <li key={cat.id}>{cat.name}</li>)
                  // kaip key galima naudoti ir indeksa, jis taip pat yra unikalus. Kodas atrodytu taip:
                  // cats.map((cat, i) => <li key={i}>{cat.name}</li>)
               }
            </ul>
      </header>
    </div>
  );
}

export default App;
