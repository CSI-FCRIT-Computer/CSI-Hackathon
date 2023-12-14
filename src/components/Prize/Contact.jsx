import React, { useState } from 'react';
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle form submission
    console.log('Form submitted:', formData);
    // You can send this data to your backend or handle it as needed
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
        <div className="form-head">
            Contact Us
        </div>
        <div className='form-body'>
        <input
          placeholder='Name'
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <div>
        <input
          placeholder='Email'
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <input
          placeholder='Subject'
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <textarea
          placeholder='//Enter you queries here.'
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
        </div>
        <div>
        </div>
      <button className="form-sub-btn" type="submit">Submit</button>
    </form>
    </div>
  );
};

export default Contact;
