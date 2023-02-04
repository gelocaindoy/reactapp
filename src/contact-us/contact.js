import React, { useState } from "react";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState("Send");
  const [formSuccess, setFormSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Submitting...");

    setTimeout(() => {
      setFormStatus("Send");
      setFormSuccess(true);
    }, 1000);
  };

  return (
    <div>
      <h2 className="mb-3">Contact Us</h2>
      {formSuccess ? (
        <div className="alert alert-success">
          Your message has been sent successfully.
        </div>
      ) : (
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              type="text"
              id="name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              id="email"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
