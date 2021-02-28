import React from "react";
import "./ContactForm.css";
import emailjs from "emailjs-com";
import { Button, TextField, ThemeProvider } from "@material-ui/core";
import { useForm } from "react-hook-form";

function ContactForm() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("service_7p0mjwc", "template_w92sr9i", e.target, "user_2ZYeoiqMXJQdG4Ve4ldKe")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div className="contactForm">
      <h1 className="contractForm__headerH1">Не можете выбрать?</h1>
      <h3 className="contractForm__headerH3">Оставьте свой номер и мы вам перезвоним.</h3>
      <form onSubmit={sendEmail} className="contactForm__formInputs">
        <div className="contactForm__formInnerWrapper">
          <TextField
            className="contactForm__textField"
            type="text"
            placeholder="Ваше имя"
            name="name"
            variant="outlined"
            multiline="true"
            rowsMax="10"
          />
          <TextField
            className="contactForm__textField"
            type="number"
            required
            inputProps={{ maxLength: 20, minLength: 9 }}
            placeholder=" Ваш номер"
            name="number"
            variant="outlined"
          />
          <TextField
            className="contactForm__textField"
            type="text"
            placeholder="Комментарий"
            name="comment"
            variant="outlined"
            multiline="true"
            rowsMax="10"
          />
        </div>
        <button className="form__submitBtn" type="submit">
          Заказать звонок
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
