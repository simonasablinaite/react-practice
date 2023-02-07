const data = [
   { id: 1, type: 'man', name: 'Lina', color: 'blue' },
   { id: 2, type: 'car', name: 'Opel', color: 'red' },
   { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
   { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
   { id: 5, type: 'man', name: 'Tomas', color: 'green' },
   { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
   { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
   { id: 8, type: 'car', name: 'MB', color: 'blue' },
   { id: 9, type: 'car', name: 'ZIL', color: 'red' },
   { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
];

const data2 = [
   { id: 1, list: [8, 8, 22], color: 'red' },
   { id: 2, list: [74, 5, 220, 7], color: 'blue' },
   { id: 3, list: [8, 1, 0, 0, 8, 22], color: 'red' },
]

console.log(data);
console.log(data2);

// UZDAVINYS Nr.1:
// Panaudojant forEach() atspausdinti vardus is duoto masyvo:
data.forEach(element => console.log(element.name));

// UZDAVINYS Nr.2:
// Sukurti nauja masyva, kuriame visos red spalvos pakeistos i orange:

const orangeClr = data.map(e =>
   e.color === 'red' ? { ...e, color: 'orange' } : ({ ...e })
);
console.log(orangeClr);

// UZDAVINYS Nr.3:
// Pakeisti poriniu automobiliu spalva i 'black':

const blackCar = data.map(e => e.type === 'car' && e.id % 2 === 0 ? ({ ...e, color: 'balck' }) : { ...e });
console.log(blackCar);

// UZDAVINYS Nr.4:
// Jei vardas yra trumpesnis nei 8 simboliai, prailginti ji iki 8 simboliu, gale pridedant '*';

const longName = data.map(e => e.name.length < 8 ? { ...e, name: e.name.padEnd(8, '*') } :
   { ...e });
console.log(longName);

// UZDUOTIS Nr.5:
// Sukurti data2 masyvo kopija, kuriame list prailginamas vienu elementu, kuris yra lygus 0:

const longerList = data2.map(e => ({ ...e, list: [...e.list, 0] }));
console.log(longerList);

// filter metodas reikalauja true arba false.
// UZDUOTIS Nr.6:
// Isfiltruoti tik raudonus list elementus:

const redList = data2.filter(e => e.color === 'red' ? true : false); // true/false galima rasyti galima ne. Neparasius - true/false atsakyma vis tiek pateiks
console.log(redList);

// UZDUOTIS Nr.7:
// Is pirmojo masyvo isfiltruoti visus gyvunus:

const notAnimals = data.filter(e => e.type !== 'animal');
console.log(notAnimals);

// UZDUOTIS Nr.8:
// Konsoleje atspausdinti "animal" tipo vardus apjungiant du metodus:
data.filter(e => e.type === 'animal').forEach(a => console.log(a.name));

// UZDUOTIS Nr.9:
// Isfiltruoti ir pateikti masyva su zaliais gyvunais:
const greenAnimals = data.filter(e => e.type === 'animal' && e.color === 'green');
console.log(greenAnimals);

// UZDUOTIS Nr.10:
// Sukurti nauja masyva is 'car' ir 'man', o ju spalvas pakeisti i 'black' jei ju originali spalva yra ne red
const carAndManBlack = data.filter(e => e.type === 'man' || e.type === 'car')
   .map(e => e.color !== 'red' ? { ...e, color: 'black' } : { ...e });
console.log(carAndManBlack);

// UZDUOTIS Nr.11:
// Istrinti elementa kurio ID 6:
const deleteId6 = data.filter(e => e.id !== 6);
console.log(deleteId6);

// visi destrukcimiai metodai: map, filter ir kiti - gamina kopija. Sort - nera destrukcinis metodas. Jis dirba su originalu.
// pries darant sorta - reikia pasidaryti masyvo/objekto kopija, kad butu matomi realus duomenys, nes sorta dirba su originalu.

// UZDUOTIS Nr. 12:
// Isrusiuoti listo elementus pagal varda abeceles tvarka. Pavyzdys su keliu eiluciu uzrasymu:

const sortedNameAB = [...data];

sortedNameAB.sort((a, b) => {
   if (a.name > b.name) {
      return 1;
   }
   if (a.name < b.name) {
      return -1;
   }
   return 0;
})

console.log(sortedNameAB);


// vienos eilutes uzrasymas butu toks:
/*
sortedNameAB.sort((a, b) => a.name.localeCompare(b.sort));
*/

// Atvirkstinis rusiavimas butu sukeiciant raides vietomis, pvz:

const sortedNameBA = [...data];
sortedNameBA.sort((a, b) => b.name.localeCompare(a.name));
console.log(sortedNameBA);

// RŪŠIAVIMAS SU SKAIČIAIS:
// Isrusiuoti id nuo didziausio iki maziausio:
const sortedIdBA = [...data];
sortedIdBA.sort((a, b) => b.id - a.id);
console.log(sortedIdBA);

const sortedColor = [...data];
sortedColor.sort((a, b) => a.color.localeCompare(b.color));
console.log(sortedColor);

// Isrusiuoti zodzius pagal name ilgi nuo ilgiausio iki trumpiausio:
const sortedNameLength = [...data];
sortedNameLength.sort((a, b) => b.name.length - a.name.length);
console.log(sortedNameLength);

// Pakeisti masyvo isdeliojima taip, kad virsuje butu type cars, o daugiau kaip rusiuos - nesvarbu:
const sortedByCars = [...data];
sortedByCars.sort((a, b) => a.type === 'car' ? -1 : 1);
console.log(sortedByCars);





