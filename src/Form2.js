import React, {useState} from "react";

export default function Form2(props) {
    const [formData, setFormData] = useState({
        // name: '',
        ab: '',
        bc: '',
        cd: '',
        da: '',
        bd: '',
        ap1: '',
        area_of_section: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const [result, setResult] = useState(null);

       
      const handleSubmit = async (e) => {
        e.preventDefault();

        // Changing the background image
        props.func("/landareadivider_result2.png")

        console.log(formData);
        try {
          const response = await fetch('http://127.0.0.1:8000/api/cut_section_area/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          if (response.ok) {
            // Request was successful, handle the response data
            const responseData = await response.json();
            console.log('API Response:', responseData.points.DQ1);
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
            <h4>This Form is for Cutting Section from Land</h4>
            <p><i>Each length must be in same unit and area must be unit square</i></p>
            
  
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
            autoComplete="on"
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
              autoComplete="on"
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
              autoComplete="on"
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
              autoComplete="on"
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
              autoComplete="on"
              />
          </p>

            <p>
                <label htmlFor="id_ap1">AP: </label>
                <input
                type="number"
                name="ap1"
                step="any"
                required
                id="id_ap1"
                value={formData.ap1}
                onChange={handleInputChange}
                placeholder="Enter length of AP1"
                autoComplete="on"
                />
            </p>

            <p>
                <label htmlFor="id_area_of_section">Area of Section: </label>
                <input
                type="number"
                name="area_of_section"
                step="any"
                required
                id="id_area_of_section"
                value={formData.area_of_section}
                onChange={handleInputChange}
                placeholder="Enter Area of Section P1ADQ1"
                className="padq"
                autoComplete="on"
                />
            </p>

            <button type="submit" name="form_type" value="form2" className="btnstyle">
            Get Result
            </button>
        </form>
        {result !== null && (
          <div>
            <h2>Result</h2>
            <p>DQ : { result.points.DQ1 }</p>
            <p>AP : { result.points.AP1 }</p>
          </div>
        )}
    </>
    );
  }


  