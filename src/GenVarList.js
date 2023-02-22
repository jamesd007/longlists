import React, {useState} from 'react';
import { VariableSizeList } from 'react-window';
import * as faker from "faker";


const GenVarList = () => {

  const [items, setItems] = useState(() =>
    Array.from({ length: 10000 }, faker.address.city)
  );

  const Row = ({ index, style }) => (
    <div>
        People
    </div>
    // <div style={{
    //     display:"flex",
    //     flexDirection:"row",
    //     justifyContent:"flex-start",
    //     alignItems:"flex-start"
    //     }}>
    //     test
    //     <li style={{
    //         display:"flex",
    //         flexDirection:"row",
    //         justifyContent:"flex-start",
    //         alignItems:"flex-start"
    //         }}>
    //             {items[index]}
    //             test
    //           </li>
    //           test
    //    {/* define the row component using items[index] */}
    // </div>
   );
  
    const getItemSize = index => {
        // return a size for items[index]
    }

  return (
    <div>
        "red violet blue green yellow orange"
  <VariableSizeList
    height={500}
    width={500}
    itemCount={items.length}
    itemSize={getItemSize}
  >
    {Row}
  </VariableSizeList>
  </div>
  )
}

export default GenVarList;
