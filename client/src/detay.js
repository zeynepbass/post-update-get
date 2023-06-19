import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Detay = () => {
  const { id } = useParams();
  const initialState = {
    title: '',
    message: '',
    creator: '',
  };
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const Navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/uye/${id}`, form);
      console.log('Form submitted successfully');
    } catch (error) {
      console.log(error);
    }
    Navigate("/")
  };
  useEffect(() => {
    axios
      .get(`/uye/${id}`)
      .then((response) => {
        setForm(response.data);
        console.log(setForm);
      })
      .catch((error) => {
        console.log(error);
      });
    }, [id]);
  
  return (
    <div>
      <h1>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center pb-4" style={{ color: 'white', textShadow: '2px 2px black' }}>
            Randevu Düzenle
          </h2>
          <div className="d-flex justify-content-center">
            <div className="form-group col-md-5 col-12">
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="title"
               
                value={form.title}
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
                value={form.message}
     
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
                value={form.creator}
                onChange={handleChange}
         
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-success col-2"
            style={{ display: 'block', margin: 'auto' }}
          >
            Düzenle
          </button>
        </form>
      </h1>
    </div>
  );
};
export default Detay