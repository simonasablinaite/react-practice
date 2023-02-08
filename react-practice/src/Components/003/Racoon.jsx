import rand from "../../Functions/rand";
import randColor from "../../Functions/randColor";

function Racoon() {
   return <h2 style={{color: randColor(0, 1)}}>Racoon</h2>
}

export default Racoon;