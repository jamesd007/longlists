import React, { useState } from "react";
import * as faker from "faker";
import { FixedSizeList as List } from "react-window";

const GenList = () => {
    
    const [data, setData] = useState(() =>
      Array.from({ length: 10000 }, faker.address.city)
    );

    const reverse = () => {
      setData((data) => data.slice().reverse());
    };
  
    return (
      <main>
        <button onClick={reverse}>Reverse</button>
        <List
          innerElementType="ul"
          itemCount={data.length}
          itemSize={40}
          height={250}
          width={400}
        >
          {({ index, style }) => {
            return (
              <li style={style}>
                {data[index]}
              </li>
            );
          }}
        </List>
      </main>
    );
  };

// const GenList = () => {
//   const [data, setData] = useState(() =>
//     Array.from({ length: 10000 }, faker.address.city)
//   );

//   return (
//     <main>
//       <ul style={{ width: "400px", height: "700px", overflowY: "scroll" }}>
//         {data.map((city, i) => (
//           <li key={i + city}>{city}</li>
//         ))}
//       </ul>
//     </main>
//   );
// };

export default GenList