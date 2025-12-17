import { useState } from "react";
import "../App.css";

export default function Dropdown({ options, value }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value);

  return (
    <div className="dropdown">
      <div className="edu-level" onClick={() => setOpen(!open)}>
        <div>
          <input type="hidden" name="educationLevel" value={selected} />
          <span className="edu-level-placeholder">{selected}</span>
          <span>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              style={open ? { transform: "rotate(180deg)" } : {}}
            >
              <path
                d="M4.293 8.293a1 1 0 0 1 1.414 0L12 14.586l6.293-6.293a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 0 1 0-1.414Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
          {open ? (
            <ul className="menu">
              {options.map((item, i) => (
                <div onClick={() => setSelected(item)}>
                  <li className="menuItem" key={i}>
                    {item}
                  </li>
                </div>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
