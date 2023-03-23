import React, { useState } from 'react';
import axios from 'axios';
import { Alert, Button, Input, Textarea } from '@mantine/core';


const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  const validateName = () => {
    if (name.trim().length === 0) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const validateEmail = () => {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };
  
  
  const validateMessage = () => {
    if (message.trim().length < 5) {
      setMessageError('Message must be at least 5 characters long');
    } else {
      setMessageError('');
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    validateName();
    validateEmail();
    validateMessage();
    if (nameError !== '' || emailError !== '' || messageError !== '') {
      return;
    }


   // `${import.meta.env.VITE_SERVER}/mail`   ---- Deployed

    // http://localhost:3001/mail' ---- local

    const data = { name, email, message };
    try {
      await axios.post(`${import.meta.env.VITE_SERVER}/mail`, data);
      setName('');
      setEmail('');
      setMessage('');
      setShowAlert(true);
      setShowError(false);
      setTimeout(() => {
        setShowAlert(false);
      }, 5000);
    } catch (error) {
      console.error(error);
      setError('An error occurred');
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 7000);
    }
  };


 return (
    <div className="contact">
      <Alert
        title="Success!"
        color="teal"
        radius="md"
        variant="filled"
        className={`contact__alert ${showAlert ? 'visible' : ''}`}
      >
        Your request has been sent, you will here back from us soon.
      </Alert>
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit} className="contact__form">
        <Input.Wrapper
          label="Your Name"
          required
          className="contact__input">
          <Input
            placeholder="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            onBlur={validateName}
          />
          {nameError && <div className="contact__error">{nameError}</div>}
        </Input.Wrapper>
        <Input.Wrapper
          label="Your Email"
          required
          className="contact__input"
        >
          <Input
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onBlur={validateEmail}
          />
          {emailError && <div className="contact__error">{emailError}</div>}
        </Input.Wrapper>
        <Textarea
          placeholder="Setup needed, replace tuners and strings."
          label="Description of Issue"
          description="In as much detail as possible describe the problem with your instrument"
          radius="md"
          withAsterisk
          className="contact__input"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onBlur={validateMessage}
        />
        {messageError && <div className="contact__error">{messageError}</div>}
        <Button color="orange" size="lg" uppercase type="submit" className="contact__button">
          Submit
        </Button>
      </form>
      <Alert
        title="Error"
        color="red"
        radius="md"
        variant="filled"
        className={`contact__alert ${showError ? 'visible' : ''}`}
      >
        {error}
      </Alert>
    </div>
  );
};

export default Contact;