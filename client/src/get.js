import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Get = () => {
  const [form, setForm] = useState([]);

  const gonder = async () => {
    await axios
      .get("/uye")
      .then((response) => {
        setForm(response.data);
        console.log(setForm);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    gonder();
  });
  return (
    <>
      <div className="container-fluid rger">
        <div
          className="container "
          style={{ paddingTop: "10%", justifyContent: "center" }}
        >
   <h4 className="text-center mb-4"><b>Üye Listesi</b></h4>
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Ad</th>
                  <th scope="col">Soyad</th>
                  <th scope="col">üye</th>
                  <th scope="col">icon</th>
                </tr>
              </thead>
              {form.map((a, index) => {
                return (
                  <>
                    <tbody>
                      <tr>
                        <td>{a._id[6]}</td>
                        <td>{a.title}</td>
                        <td>{a.message}</td>
                        <td>{a.creator} </td>
                        <td>
                          {" "}
                          <Link to={`/${a._id}`}><button type="button" class="btn btn-light"><b>DETAY</b></button></Link>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })}
            </table>
      
          <h5>
            {" "}
            <Link to="/uye/ekle" className="pr-4" style={{color:"black", textDecoration:"none",float:"right"}}><button type="button" class="btn btn-dark"><b>Ekle</b></button></Link>
          </h5>
        </div>
      </div>
    </>
  );
};

export default Get;
