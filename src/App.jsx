
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div style={{justifyContent: "center", alignItems: "center", display:"flex", padding:"30px"}}>
        <h1 style={{ border: "2px solid black", padding: "10px", backgroundColor:"black", color:"white"}}>!!   React BackGround Changer  !!</h1>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl shadow-lg">

          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-black"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>

          <button
            onClick={() => setColor("orange")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "orange" }}
          >
            Orange
          </button>


          <button
            onClick={() => setColor("White")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "white", color:"black" }}
          >
            White
          </button>

          <button
            onClick={() => setColor("Black")}
            className="outline-none px-4 py-1 rounded-full text-white"
            style={{ backgroundColor: "Black", color:"white" }}
          >
            Black
          </button>

        </div>
      </div>
    </div>
  );
}

export default App;
