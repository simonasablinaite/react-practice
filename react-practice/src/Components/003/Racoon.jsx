import rand from "../../Functions/rand";

function Racoon() {
   return <h2 style={{color: rand(0, 1) ? 'yellowgreen' : 'blue'}}>Racoon</h2>
}

export default Racoon;