import React, { useState, useEffect } from 'react';

function ContactUS() {

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowPopup(true);
    setFormValues({
      name: '',
      email: '',
      message: ''
    });
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  useEffect(() => {
    if (showPopup) {
      setTimeout(() => {
        setShowPopup(false);
      }, 5000);
    }
  }, [showPopup]);

  return (
    <>
      <hr></hr>

      <div className="contact-form-container" id="contact">
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" placeholder="Enter Your Name" required value={formValues.name} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" placeholder="Enter Your Email" required value={formValues.email} onChange={handleInputChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea name="message" placeholder="Enter Your Message" required value={formValues.message} onChange={handleInputChange} ></textarea>
            </div>
            <br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-form-info">
          <img className="image-style" src="https://i.imgur.com/Wyh3mAC.png"></img>
          <h2>Contact Us</h2>
          <p>Please fill out the form to get in touch with us.</p>
          <p>We will get back to you as soon as possible.</p>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <p>Message Sent</p>
        </div>
      )}
    </>
  );
}

export default ContactUS;
