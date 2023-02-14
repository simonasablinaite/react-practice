import { useState } from 'react';
import './App.scss';


function App() {

   // state sukurimas
   // Sukuria masyva su 2 reiksmem
   const [color, setColor] = useState('yellow');

   /*Paaiskinimas: useState('yellowGreen') f-ja grazina masyva su dviem reiksmem:
   const color; //state
   const setColor; //f-ja state keitimui
   'yellowgreen' - pradine state reikme pries pakeiciant ja
   */


   // Sios funkcijos bendriniu atveju vadinamos hook'ais
   // const doJob = () => {
   //    console.log('Eik dirbti!');
   // }

   const clicked = () => {
      setColor('lime'); //state keitimas
   }

   return (
      <div className="App">
         <header className="App-header">
            <h1 style={{ color: color }}>State</h1>
            <button onClick={clicked} className='glow-btn' type='button'>Go</button>
         </header>
      </div>
   );
}

export default App;

/* Mygtuko veikimo principas:
Mygtukui nurodomas eventas "onClick" ir i jo vidu paduodama nuoroda i funkcija, ka ,mygtukas turi daryti, ji paspaudus.
Reikia buti susikurus paduodamaja f-ja, kuri siuo atveju yra "clicked". 
Tai reiskia, kad paspaudus mygtuka, konsole turi isspausdinti zodi 'Labas';

Galima funkcijai "clicked" nurodyti vykdyti kita f-ja, pvz, "doJob":
Sukuriamas naujas componentas f-jai doJob -> ja paduodame f-jai clicked -> paspaudus mygtuka, bus iskviesta doJob f-ja

State kurimo principas:
const M = ['A', 'B']; // konstanta M lygi masyvui, kuriame reiksmes A ir B;
const [x, y] = M // destruktorius, kuris sifruojasi taip:
const x = 'A' // x reiksme lygi M masyvo A reiksmei
const y = 'B' // y reiksme lygi M masyvo B reiksmei

<hi style{{color: color}} - state panaudojimas
*/