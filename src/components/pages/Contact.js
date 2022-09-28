import React, { useState } from 'react';
import validateEmail from '../../helpers/validation';

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  function handleChange(form) {
    console.log("data: ", form)
    if (form.name === "email") {
      const isValid = validateEmail(form.value);
      if (!isValid) {
        alert("Please enter a valid email address.");
      }
    } else {
      if (form.name === "name") {
        const value = name.length
        if (value.length = 0) {
          alert("Please enter your name.");
        }
      } else {
        if (form.name === "message") {
          const value = message.length
          if (value.length = 0) {
            alert("Please enter your message.");
          }
        }
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("data: ", document.getElementsByName('name').value)
    handleChange(e);
    setFormState({
      name: "",
      email: "",
      message: "",
    });
    return;
  }


  return (
    <div id='bg'>
      <h2>Contact Me</h2>
      <div id="contact">
        <form id="form">
          <input type="hidden" name="contact" />
          <label>Name</label>
          <input type="text" name="name" />
          <label>Email</label>
          <input type="email" name="email" defaultValue={email} />
          <label>Message</label>
          <textarea name="message" defaultValue={message}></textarea>
          <button
            data-testid="button"
            className="btn btn-outline-dark"
            type="submit"
            onSubmit={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
