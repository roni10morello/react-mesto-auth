import React, { useState } from "react";
import AuthFrom from "./AuthForm";

function Register({ onRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onRegister({ email, password });
  }

  return (
    <AuthFrom
      name="register"
      title="Регистрация"
      textButton="Зарегистрироваться"
      textLabel="Уже зарегистрированы?"
      textLink={"Войти"}
      onSubmit={handleSubmit}
    >
      <input
        value={email || ""}
        className="form__input form__input_form_authorize"
        type="email"
        id="email"
        name="email"
        minLength="2"
        maxLength="40"
        required
        placeholder="Email"
        onChange={handleChangeEmail}
      />
      <span
        id="email-error"
        className="form__error form__error_visible form__error_email_error"
      ></span>
      <input
        value={password || ""}
        className="form__input form__input_form_authorize"
        type="password"
        name="password"
        id="password"
        minLength="4"
        maxLength="16"
        placeholder="Пароль"
        required
        onChange={handleChangePassword}
      />
      <span
        id="password-error"
        className="form__error form__error_visible form__error_password-error"
      ></span>
    </AuthFrom>
  );
}
export default Register;
