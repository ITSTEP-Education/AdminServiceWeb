import React, {FC, useEffect, useState} from 'react';
import './RegisterForm.css';
import axios from 'axios';

type TRegisterForm = {
  guid: string,
}

type TClientData = {
  firstName: string,
  lastName: string,
  age: number,
  mobile: string,
}

const handleDisabled = (isDisabled: boolean): void => {
  const formRegisterUserData = document.getElementById('form-register_user-data')?.querySelectorAll('input');
  formRegisterUserData?.forEach(item => item.disabled = isDisabled);
}

const getGlientDataForm = (e: React.FormEvent<HTMLElement>): TClientData => {
  const clientDataTegs = e.currentTarget.parentElement?.querySelectorAll('input');
  let values: Array<string> = [];
  clientDataTegs?.forEach(item => values.push(item.value));

  return {firstName: values[0], lastName: values[1], age: Number.parseInt(values[2]), mobile: values[3]};
}

const RegisterForm: FC<TRegisterForm> = (props) => {
  
  const [clientData, setClientData] = useState<TClientData | null>(null);
  const [isposted, setIsposted] = useState<boolean>(false);

  useEffect(() => {
    handleDisabled(props.guid == 'none');
  }, [props.guid]);

  const handleRegister = (e: React.FormEvent<HTMLElement>): void => {
    setClientData(getGlientDataForm(e));
    (e.currentTarget.parentElement?.parentElement as HTMLFormElement).reset();
  }

  const handlePostClientData = (clientData: TClientData |null): void => {

    const postClientData = axios.create({
      baseURL: 'https://localhost:7209/api/v2/Administrate',
      method: 'post',
      responseType: 'json',
    });
  
    postClientData.post(`client-data?guid=${props.guid}`, clientData)
    .then(responce => {
      console.log(responce.data);
      setIsposted(true);
    })
    .catch(error => {
      console.log(error);
      setIsposted(false);
    });
  }

  const handleDeleteOrder = () => {
    const deleteClientData = axios.create({
      baseURL: 'https://localhost:7209/api/v1/Administrate',
      method: 'delete',
      responseType: 'json',
    });

    deleteClientData.delete(`product-order?guid=${props.guid}`)
    .then(responce => {
      console.log(responce.data);
    })
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    handlePostClientData(clientData);

    if(isposted){
      handleDeleteOrder();
    }

  }, [clientData]);

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
            <input type="number" placeholder="Вік" required />
            <span className="required">*</span>
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Номер телефону" required />
            <span className="required">*</span>
          </div>
          <p className="note">* Ці поля повинні бути заповнені</p>
          <p>selected: {props.guid}</p>
          <button type="button" className="register-button" onClick={handleRegister}>ЗАРЕЄСТРУВАТИ</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
