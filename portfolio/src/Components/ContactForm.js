import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import styled from "styled-components";

const FormSection = styled.form`
  position: relative;
  height: 400px;
  background-size: cover !important;
  padding: 15px;
  overflow: hidden !important;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  background: rgb(211, 211, 211);

  @media (max-width: 768px) {
    height: 1500px;
  }
`;

const FormTitle = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  text-align: center;
  color: white;
  transition: transform 0.3s cubic-bezier(0.175, 0.85, 0.3, 1.275);

  &:hover {
    transform: scale(1.5);
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
`;

const FormData = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormTop = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
`;

const FormBottom = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FormName = styled.input`
  width: 300px;
  height: 40px;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #fff;
  border-radius: 3px;
  transition: all 0.1s ease;

  &::placeholder {
    color: rgba(46, 49, 49, 1);
  }
  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.6);
  }
  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
  }
`;

const FormEmail = styled(FormName)``;

const FormTextarea = styled.textarea`
  width: 608px;
  height: 120px;
  margin-bottom: 0.5rem;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 0.5rem;

  &::placeholder {
    color: rgba(46, 49, 49, 1);
  }
  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.6);
  }
  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
  }
`;

const FormButton = styled.button`
  width: 608px;
  height: 40px;
  cursor: pointer;
  border: 1px solid #fff;
  border-radius: 3px;
  outline: none;
  color: rgba(46, 49, 49, 1);

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.6);
  }
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");

  const changeText = (text) => setButtonText(text);

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted 👍");
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <FormSection onSubmit={handleSubmit}>
      <FormTitle>
        <h2>Contact Me</h2>
      </FormTitle>
      <FormData>
        <FormTop>
          <FormName
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormEmail
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormTop>
        <FormBottom>
          <FormTextarea
            placeholder="  Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <FormButton
            onClick={() => setButtonText("Message Send")}
            type="submit"
            style={{
              background: loader ? "rgba(0, 0, 0, 0.6)" : "#fff",
              color: loader ? "white" : "",
              fontWeight: loader ? "bolder" : "bold",
            }}
          >
            {buttonText}
          </FormButton>
        </FormBottom>
      </FormData>
    </FormSection>
  );
};

export default ContactForm;
