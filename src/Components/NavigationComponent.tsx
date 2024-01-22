import { useState } from "react";
import Data from "./Data";
import "../Navigation.css";

let data = "";

function NavigationComponent() {
  let items = ["Year", "Month", "Meeting", "Proposals"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>Navigation</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item "
            }
            key={item}
            onClick={() => {
              console.log(item, index);
              data = item;
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="infoBox">
        <Data input={data}></Data>
      </div>
    </>
  );
}

export default NavigationComponent;
