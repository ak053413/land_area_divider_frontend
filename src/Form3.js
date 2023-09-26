import React, {useState} from "react";


export default function Form3(props) {
  
    const [formData, setFormData] = useState({
        // name: '',
        ab: '',
        bc: '',
        cd: '',
        da: '',
        bd: '',
      });

    const [result, setResult] = useState(null);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        try {
          const response = await fetch('http://127.0.0.1:8000/api/area_calculator/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            // Request was successful, handle the response data
            const responseData = await response.json();
            console.log('API Response:', responseData);
            setResult(responseData);
          } else {
            // Request failed, handle the error
            console.error('API Request Failed');
          }
        } catch (error) {
          console.error('API Request Error:', error);
        }
      };  

    return (
    <>
        <form method="post" noValidate onSubmit={handleSubmit}>
            <h4>This Form is for Calculating Area of Land</h4>
            <p><i>Each length must be in the same unit, and the area must be in unit square</i></p>
  
          {/* <p>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              maxLength="100"
              id="name"
              value={formData.name}
              onChange={handleChange}
              autoComplete="on"
              placeholder="Enter Any Name"
            />
          </p> */}
  
          <p>
          <label htmlFor="id_ab">AB: </label>
          <input
            type="number"
            name="ab"
            step="any"
            required
            id="id_ab"
            value={formData.ab}
            onChange={handleInputChange}
            placeholder="Enter length of AB"
          />
          </p>
  
          <p>
              <label htmlFor="id_bc">BC: </label>
              <input
              type="number"
              name="bc"
              step="any"
              required
              id="id_bc"
              value={formData.bc}
              onChange={handleInputChange}
              placeholder="Enter length of BC"
              />
          </p>
  
          <p>
              <label htmlFor="id_cd">CD: </label>
              <input
              type="number"
              name="cd"
              step="any"
              required
              id="id_cd"
              value={formData.cd}
              onChange={handleInputChange}
              placeholder="Enter length of CD"
              />
          </p>
  
          <p>
              <label htmlFor="id_da">DA: </label>
              <input
              type="number"
              name="da"
              step="any"
              required
              id="id_da"
              value={formData.da}
              onChange={handleInputChange}
              placeholder="Enter length of DA"
              />
          </p>
  
          <p>
              <label htmlFor="id_bd">BD: </label>
              <input
              type="number"
              name="bd"
              step="any"
              required
              id="id_bd"
              value={formData.bd}
              onChange={handleInputChange}
              placeholder="Enter length of BD"
              />
          </p>
    
            <button type="submit" name="form_type" value="ar_cal" className="btnstyle">
                Get Result
            </button>
        </form>
        {result !== null && (
          <div>
            <h2>Result</h2>
            <p>The calculated area is: {result.area} square units</p>
          </div>
        )}
    </>
    );
  }


