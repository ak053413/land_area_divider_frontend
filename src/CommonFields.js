import React, {useState} from "react";

export default function CommonFields() {
    const [formData, setFormData] = useState({
      name: '',
      ab: null,
      bc: null,
      cd: null,
      da: null,
      bd: null,
    });
    const [result, setResult] = useState(null);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Calculate the area here using the provided formula
      const { ab, bc, cd, da, bd } = formData;
      const area = /* Perform your area calculation here */
      setResult(area);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
  
    return (
      <>
          <input type="hidden" name="csrfmiddlewaretoken" value={ window.CSRF_TOKEN } />
  
          <p>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              maxLength="100"
              required
              id="name"
              value={formData.name}
              onChange={handleChange}
            />
            <span className="helptext">
              <small style={{ color: 'green' }}>Enter the name of the landowner</small>
            </span>
          </p>
  
          <p>
          <label htmlFor="id_ab">AB:</label>
          <input
            type="number"
            name="ab"
            step="any"
            required
            id="id_ab"
            value={formData.ab}
            onChange={handleInputChange}
          />
          </p>
  
          <p>
              <label htmlFor="id_bc">BC:</label>
              <input
              type="number"
              name="bc"
              step="any"
              required
              id="id_bc"
              value={formData.bc}
              onChange={handleInputChange}
              />
          </p>
  
          <p>
              <label htmlFor="id_cd">CD:</label>
              <input
              type="number"
              name="cd"
              step="any"
              required
              id="id_cd"
              value={formData.cd}
              onChange={handleInputChange}
              />
          </p>
  
          <p>
              <label htmlFor="id_da">DA:</label>
              <input
              type="number"
              name="da"
              step="any"
              required
              id="id_da"
              value={formData.da}
              onChange={handleInputChange}
              />
          </p>
  
          <p>
              <label htmlFor="id_bd">BD:</label>
              <input
              type="number"
              name="bd"
              step="any"
              required
              id="id_bd"
              value={formData.bd}
              onChange={handleInputChange}
              />
          </p>
      </>
    );
  }


