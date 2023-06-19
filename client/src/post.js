import axios from "axios";
import { useState } from "react";

import "./style.css"
import { useNavigate } from "react-router-dom";
function App() {
  const initialState = {
    title:"",
    message:"",
    creator:"",

  };
  const [form, setForm] = useState(initialState);
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const gonder = async () => {
 
    await axios.post("/uye/ekle",form).then((response) => {
    
      })
      .catch((error) => {
        console.log(error)
      });
  };
  const Navigate=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    gonder();
    console.log(form);
    Navigate("/")
  };

  
  return (
    <div className="container-fluid rger">


    <div className="container " style={{ paddingTop: "10%",   justifyContent: "center" }}>

      <form onSubmit={handleSubmit}>
        <h2 className="text-center pb-4 " style={{color:"white",textShadow:"2px 2px black"}}>Randevu Ekle</h2>
        <div className="d-flex justify-content-center">
            <div className="form-group col-md-5 col-12">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="title"
        
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <div className="form-group col-md-5 col-12">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="message"
            
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <div className="form-group col-md-5 col-12">
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                type="text"
                name="creator"
                onChange={handleChange}
              
              />
            </div>
          </div>


  


        <button
          type="submit"
          className="btn btn-success col-2"
          style={{ display: "block", margin: "auto" }}
        >
          Ekle
        </button>
      </form>
    </div>
    </div>
  );
}

export default App;
