console.log('Labutis');
// random skaicius generuojanti f-ja
function rand(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(rand(5, 10));

// UZDUOTIS Nr.1 
// Sugeneruoti masyvą, kuriame yra 10 elementų, o tie elementai atsitiktiniai skaičiai nuo 100 iki 999 DONE!

const randNums = [...Array(10)].map(_ => rand(100, 999));

console.log(randNums);

// Map ir forEach skirtumas:
const fe = randNums.forEach(e => 1);
const map = randNums.map(e => e + 1);

console.log(fe);
console.log(map);

const cats = [
   { name: 'Pilkis', weight: 4 },
   { name: 'Murka', weight: 7 },
   { name: 'Keris', weight: 3 }
];
// UZDUOTIS Nr.2:
// Sukurti nauja masyva, kuriame katinu svoris butu +1 kg sunkesni:
const heavierCats = cats.map(c => ({ ...c, weight: c.weight + 1 }));

// UZDUOTIS Nr.3:
// Sukurti masyva, kuriame katinu svoris butu random nuo 3 iki 10 kg:
const randWeight = cats.map(c => ({ ...c, weight: rand(3, 10) }))

// UZDUOTIS Nr.4:
// Kiekvienas katinukas gauna papildomą savybę takesPill kuri atsitiktiniu būdu yra arba 'yes' arba 'no'
const newProperty = cats.map(c => ({ ...c, takesPill: rand(0, 1) ? 'No' : 'Yes' }))

console.log(cats);
console.log(heavierCats);
console.log(randWeight);
console.log(newProperty);
