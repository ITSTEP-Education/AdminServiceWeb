import React, {FC, useEffect} from 'react';
import './RegisterForm.css';

type TRegisterForm = {
  guid: string,
}

const handleDisabled = (isDisabled: boolean): void => {
  console.log(isDisabled);
  const formRegisterUserData = document.getElementById('form-register_user-data')?.querySelectorAll('input');
  formRegisterUserData?.forEach(item => item.disabled = isDisabled);
}

const RegisterForm: FC<TRegisterForm> = (props) => {

  useEffect(() => {
    handleDisabled(props.guid == 'none');
  }, [props.guid]);
  
  return (
    <div className="form-container">
      <h2>РЕЄСТРАЦІЯ ЗАМОВЛЕННЯ</h2>
      <form className="register-form">
        <div className="form-group">
          <input type="text" placeholder="Логін" required disabled/>
          <span className="required">*</span>
        </div>
        <div className="form-group">
          <input type="password" placeholder="Пароль" required disabled/>
          <span className="required">*</span>
        </div>
        <div id='form-register_user-data'>
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
          <button type="button" className="register-button">ЗАРЕЄСТРУВАТИ</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
