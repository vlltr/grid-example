import { useState } from "react";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

import GridLayout from "react-grid-layout";
import { Table } from "./Table";
function App() {
  const [count, setCount] = useState(0);
  const layout = [
    { i: "0", x: 0, y: 0, w: 1, h: 1, static: true },
    { i: "1", x: 10, y: 0, w: 1, h: 1, static: true },
    { i: "2", x: 2, y: 1, w: 1, h: 1, static: true },
    { i: "3", x: 3, y: 0, w: 1, h: 1, static: true },
    { i: "4", x: 4, y: 0, w: 1, h: 1, static: true },
    { i: "5", x: 5, y: 1, w: 1, h: 1, static: true },
    { i: "6", x: 6, y: 1, w: 1, h: 1, static: true },
    { i: "7", x: 7, y: 4, w: 1, h: 1, static: true },
    { i: "8", x: 1, y: 0, w: 1, h: 1, static: true },
  ];
  return (
    <>
      <GridLayout
        className="layout"
        cols={12}
        rowHeight={50}
        autoSize={false}
        width={1200}
        allowOverlap={true}
      >
        {layout.map((item) => {
          return (<div key={item.i} data-grid={{x: item.x, y: item.y, w: item.w, h: item.h, static: false}} >
            <Table id={item.i} />
          </div>)
        })}
      </GridLayout>
    </>
  );
}

export default App;
