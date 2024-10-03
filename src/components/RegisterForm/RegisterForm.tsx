import React from 'react';
import './RegisterForm.css'; 

const RegisterForm = () => {
  return (
    <div className="form-container">
      <h2>РЕЄСТРАЦІЯ ЗАМОВЛЕННЯ</h2>
      <form className="register-form">
        <div className="form-group">
          <input type="text" placeholder="Логін" required />
          <span className="required">*</span>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Пароль" required />
          <span className="required">*</span>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Ім'я" required />
          <span className="required">*</span>
        </div>
        <div className="form-group">
          <input type="text" placeholder="Прізвище" required />
          <span className="required">*</span>
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Номер телефону" required />
          <span className="required">*</span>
        </div>
        <div className="form-group">
          <input type="date" placeholder="Дата народження" required />
          <span className="required">*</span>
        </div>
        <p className="note">* Ці поля повинні бути заповнені</p>
        <button type="submit" className="register-button">ЗАРЕЄСТРУВАТИ</button>
      </form>
    </div>
  );
};

export default RegisterForm;
