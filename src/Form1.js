import React, { useState } from 'react';

export default function Form1(props) {
    const [formData, setFormData] = useState({
      // name: '',
      ab: '',
      bc: '',
      cd: '',
      da: '',
      bd: '',
      n: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value });
      };

    const [result, setResult] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      // Changing the background image
      props.func("/landareadivider_result1.png")

      // console.log(formData);
      try {
        const response = await fetch('http://127.0.0.1:8000/api/land_division/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          // Request was successful, handle the response data
          const responseData = await response.json();
          console.log('API Response:', responseData.points);
          setResult(responseData.points);
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
      <form method="post" onSubmit={handleSubmit} noValidate>
          <h4>This Form is for Land Division in Equal Part</h4>
          <p><i>Each length must be in the same unit</i></p>

  
          {/* <p>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              maxLength="100"
              id="name"
              placeholder='Enter Any Name'
              value={formData.name}
              onChange={handleChange}
              autoComplete='on'
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
            placeholder='Enter length of AB'
            value={formData.ab}
            onChange={handleInputChange}
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
              placeholder='Enter length of BC'
              value={formData.bc}
              onChange={handleInputChange}
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
              placeholder='Enter length of CD'
              value={formData.cd}
              onChange={handleInputChange}
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
              placeholder='Enter length of DA'
              value={formData.da}
              onChange={handleInputChange}
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
              placeholder='Enter length of BD'
              value={formData.bd}
              onChange={handleInputChange}
              />
          </p>

          <p>
            <label htmlFor="id_n">n: </label>
            <input
            type="number"
            name="n"
            step="any"
            required
            id="id_n"
            placeholder='Enter Number of People'
            title='Number of People'
            value={formData.n}
            onChange={handleInputChange}
            />
        </p>
  
          <button type="submit" name="form_type" value="form1" className="btnstyle">
            Get Result
          </button>
        </form>
        <p className="pstyle"><i><b>Note: </b></i>we have to make equal section on front side of field</p>
        <p className="pstyle">AP<sub>1</sub>=P<sub>1</sub>P<sub>2</sub>=P<sub>2</sub>P<sub>3</sub>=...=P<sub>n-1</sub>B</p>
        {result !== null && (
          <div>
            <h2>Result</h2>
          </div>
        )}
        {result !== null && 
          Object.keys(result).map((key) => (
            <div key={key}>
              <p>{key}: {result[key]}</p>
            </div>
          )
        )}
      </>
    );
  }

  