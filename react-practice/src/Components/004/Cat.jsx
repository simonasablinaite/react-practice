function Cat({ cat, i }) {
   return (
      <div style={{ backgroundColor: i % 2 ? 'red' : 'blue' }}>{cat.name} {cat.weight}</div>
   )
}

export default Cat;

// props - propsas patenka i propsu objekta
// props.catName - nurodoma koki propsa pasiimame is propsu objekto

/* UZDUOTIS NR.1:
Perdaryti Cat komponeentą taip, kad jį būtų galima atvaizduoti liste
*/

/*
UZDUOTIS: Nr.2:
Poriniai id rauddonuose kvadratuose, o neporiniai melynuose
<div style={{ backgroundColor: i % 2 ? 'red' : 'blue' }}>{cat.name} {cat.weight}</div>
*/