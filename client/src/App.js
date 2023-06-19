import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import Post from "./post";
import { Route, Routes } from "react-router-dom";
import Get from "./get";
import Detay from "./detay"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Get />}></Route>
        <Route path="/:id" element={<Detay />}></Route>
        <Route path="/uye/ekle" element={<Post />}></Route>
      </Routes>
    </>
  );
}

export default App;
