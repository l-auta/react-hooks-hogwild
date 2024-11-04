import React, { useState } from 'react';

const NewHogForm = ({ onAddHog }) => {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    weight: '',
    greased: false,
    'highest medal achieved': '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert weight to number
    const newHog = {
      ...formData,
      weight: parseFloat(formData.weight)
    };
    onAddHog(newHog);
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <label>Specialty</label>
        <input
          type="text"
          name="specialty"
          value={formData.specialty}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <label>Weight</label>
        <input
          type="number"
          step="0.1"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <label>Highest Medal Achieved</label>
        <select
          name="highest medal achieved"
          value={formData['highest medal achieved']}
          onChange={handleChange}
          required
        >
          <option value="">Select a medal</option>
          <option value="bronze">Bronze</option>
          <option value="silver">Silver</option>
          <option value="gold">Gold</option>
          <option value="platinum">Platinum</option>
          <option value="diamond">Diamond</option>
        </select>
      </div>
      <div className="field">
        <label>Image URL</label>
        <input
          type="url"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </div>
      <div className="field">
        <div className="ui checkbox">
          <input
            type="checkbox"
            name="greased"
            checked={formData.greased}
            onChange={handleChange}
          />
          <label>Greased</label>
        </div>
      </div>
      <button className="ui button primary" type="submit">Add Hog</button>
    </form>
  );
};

export default NewHogForm;