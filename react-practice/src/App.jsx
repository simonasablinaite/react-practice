import './App.scss';


function App() {

   const doJob = () => {
      console.log('Eik dirbti!');
   }

   const clicked = () => {
      doJob();
   }

   return (
      <div className="App">
         <header className="App-header">
            <h1>State</h1>
            <button onClick={clicked} className='glow-btn' type='button'>Go</button>
         </header>
      </div>
   );
}

export default App;

/* Mygtuko veikimo principas:
Mygtukui nurodomas eventas "onClick" ir i jo vidu paduodama funkcija, ka ,ygtukas turi daryti, ji paspaudus.
Reikia buti susikurus paduotaja f-ja, kuri siuo atveju yra "clicked". 
Tai rei6kia, kad paspaudus mygtuka, konsole turi isspausdinti zodi 'Labas'

Galima funkcijai "clicked" nurodyti vykdyti kita f-ja, pvz, "doJob":
Sukuriamas naujas componentas f-jai doJob -> ja paduodame f-jai clicked -> paspaudus mygtuka, bus iskviesta doJob f-ja



*/