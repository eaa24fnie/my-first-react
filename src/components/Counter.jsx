import { useState } from "react";

export default function Counter() {
const [count, setCount] = useState(0);

function updateCount() {
    console.log("Updating count");
    setCount(count + 1);
}

return (
    <div>
    <p>klik: {count}</p>
    <button onClick={updateCount}>Hvor mange gange har du klikket?</button>
    </div>
);

}