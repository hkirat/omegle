import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Send from "../assets/sendBg.png";

export const Landing = () => {
  const [name, setName] = useState("");
  const [joined, setJoined] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="main">
      <div>
        <h1 className="s-1">Omegle 2.0</h1>
        <h1 className="s-2">Connect, Chat, Discover</h1>
        <div className="submit">
          <input
            type="text"
            placeholder="Enter your name"
            className="input"
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
          <Link to={`/room/?name=${name}`}>
            <button>
              {" "}
              <img src={Send} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
