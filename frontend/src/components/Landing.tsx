import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export const Landing = () => {
    const [name, setName] = useState("");
    const [joined, setJoined] = useState(false);
    

    useEffect(() => {

    }, []);
    
    return <div>
        <input type="text" onChange={(e) => {
            setName(e.target.value);
        }}>
        </input>
        <Link to={`/room/?name=${name}`}>Join</Link>
    </div>
}