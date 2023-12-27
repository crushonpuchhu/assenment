// import Meaning from "./meaning/Meaning";
import Navbar from "./navbar/Navbar";
import Popups from "./popups/Popups";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/first" element={<Popups height1={"500px"} widht1={"80%"} who={"first"} isactive={true} />} />
        <Route path="/second" element={<Popups height1={"300px"} widht1={"40%"} who={"second"} isactive={false} />} />
        <Route path="/third" element={<Popups height1={"260px"} widht1={"80%"} who={"third"} isactive={false} />} />
        <Route path="/fouth" element={<Popups height1={"500px"} widht1={"80%"} who={"fouth"} isactive={true} />} />
        <Route path="/nothing" />
        {/* <Route path="/" element={<Meaning/>} /> */}
      </Routes>

    </div>
  );
}

export default App;
