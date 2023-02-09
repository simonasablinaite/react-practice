function Cat({ cat, i }) {
   return (
      <div style={{
         backgroundColor: i % 2 ? 'red' : 'blue',
         borderRadius: cat.weight > 3 ? 50 : null
      }}>{cat.name} {cat.weight}</div>
   )
}

export default Cat;

// props - propsas patenka i propsu objekta
// props.catName - nurodoma koki propsa pasiimame is propsu objekto

/* UZDUOTIS NR.1:
Perdaryti Cat komponentą taip, kad jį būtų galima atvaizduoti liste
*/
/*
UZDUOTIS: Nr.2:
Poriniai id rauddonuose kvadratuose, o neporiniai melynuose
<div style={{ backgroundColor: i % 2 ? 'red' : 'blue' }}>{cat.name} {cat.weight}</div>
*/
/*
UZDUOTIS Nr.3:
Katinus, sunkesnius nei 3kg atvaizduoti apskritimo formos figuroje:
      <div style={{ borderRadius: (cat.weight > 3) ? 50 : 0 }}>{cat.name} {cat.weight}</div>
*/