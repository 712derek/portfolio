import React, { useState } from "react";
import { db } from "../firebase";
import styled, { css, keyframes } from "styled-components";
import { StyledH2 } from "./titleStyles";
import { IoIosArrowDropup } from "react-icons/io";
import { animateScroll as scroll } from "react-scroll";

const appear = keyframes`
  from{
    transform: translateY(100%);
  }
  to{
    transform: translateY(0%);
  }
`;

const pulse = keyframes`
  0%{
    transform: scale(1);
  }
  40%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1);
  }
`;

const FormSection = styled.form`
  position: relative;
  height: 100vh;
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
    height: cacl(100% + 10vh);
  }
`;

const FormTitle = styled(StyledH2)``;

const FormData = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormTop = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const FormBottom = styled(FormTop)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FormStyle = css`
  width: 300px;
  height: 40px;
  margin-right: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #fff;
  border-radius: 3px;
  transition: all 0.1s ease;
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: rgba(46, 49, 49, 1);
  }
  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.6);
  }
  &:focus {
    outline: none;
    background: rgba(0, 0, 0, 0.6);
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);

    color: #fff;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

const FormName = styled.input`
  ${FormStyle}
`;

const FormEmail = styled.input`
  ${FormStyle}
`;

const FormTextarea = styled.textarea`
  ${FormStyle}
  width: 608px;
  height: 120px;
  margin-bottom: 0.5rem;
  font-family: sans-serif;

  @media (max-width: 768px) {
    margin-top: -0.5rem;
    width: 300px;
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
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.2);
  transition: all 0.1s ease;

  &:hover {
    border: 2px solid rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    width: 200px;
  }
`;

const LinkToTop = styled.i`
  display: flex;
  justify-content: center;
  width: 100%;
  z-index: 10;
  bottom: 15px;
  color: #fff;
  font-size: 2rem;

  svg {
    cursor: pointer;
    animation: ${pulse} 1.5s linear infinite;

    &:hover {
      color: rgba(96, 219, 249);
    }
  }
`;

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonText, setButtonText] = useState("Send");
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
    <FormSection onSubmit={handleSubmit} id="contact">
      <FormTitle>Contact Me</FormTitle>
      <FormData>
        <FormTop>
          <FormName
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <FormEmail
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormTop>
        <FormBottom>
          <FormTextarea
            placeholder="Write your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <FormButton
            onClick={() => setButtonText("Message Send")}
            type="submit"
            style={{
              background: loader ? "rgba(0, 0, 0, 0.6)" : "#fff",
              color: loader ? "white" : "rgba(46, 49, 49, 1)",
              fontWeight: loader ? "bolder" : "bold",
            }}
          >
            {buttonText}
          </FormButton>
        </FormBottom>
      </FormData>
      <LinkToTop>
        <IoIosArrowDropup onClick={() => scroll.scrollToTop()} />
      </LinkToTop>
    </FormSection>
  );
};

export default ContactForm;
