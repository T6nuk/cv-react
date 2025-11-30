import { useState } from "react";
import "../App.css";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  const eduLevels = [
    "Elementary school",
    "Middle school",
    "High school",
    "Vocational school",
    "Bachelor",
    "Master",
    "Doctorate",
  ];

  const test = () => {
    alert("works");
  };

  return (
    <div className="dropdown">
      <button onClick={() => setOpen(!open)}>Drop</button>
      {open ? (
        <ul className="menu">
          {eduLevels.map((item, i) => (
            <div onClick={test}>
              <li className="menuItem" key={i}>
                {item}
              </li>
            </div>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
