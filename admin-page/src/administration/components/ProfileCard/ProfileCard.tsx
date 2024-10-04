import React, {FC, ReactNode, useEffect, useState} from 'react';
import './ProfileCard.css';
import axios from 'axios';

type ClientData = {
  firstName: string,
  lastName: string, 
  age: number,
  mobile: string,
}

type StatusCode200 = {
  property: string,
  code: number,
  message: string,
}

type TProfileCard = {
  userName: string | null,
  clientData: ClientData | null
}

const deleteClientDataByName = async (userName: string) => {
  try{
    const responce = await axios.delete(`https://localhost:7209/api/v2/Administrate/client-data/${userName}`);
    return responce.data;
  }
  catch{
    return null;
  }
}

const ProfileCard: FC<TProfileCard> = (props) => {

  const [statusCode200, setStatusCode200] = useState<StatusCode200 | null>(null);

  const handleBtnDelete = async (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    let values: Array<string | null> = [];
    e.currentTarget.parentElement?.previousElementSibling?.querySelectorAll('h2').forEach(item => {values.push(item.textContent)});
    console.log(values);

    if(values[0] != null && values[1] !=  null){
      const data = await deleteClientDataByName(`${values[0]}-${values[1]}`);
      setStatusCode200(data);
      console.log(statusCode200)
    }
  }

  const handleTextField = (): boolean => {
    if(props.clientData == null || statusCode200 != null) {
      return true;
    }
    return false;
  };

  const btnDelete = (): ReactNode => {
    if(handleTextField()){
      return <button className="delete-btn" onClick={handleBtnDelete} disabled style={{backgroundColor: 'gray'}}>Видалити</button>
    }
    else{
      return <button className="delete-btn" onClick={handleBtnDelete}>Видалити</button>
    }
  }

  useEffect(() => {
    // console.log(props.clientData);
    setStatusCode200(null);
  }, [props.userName]);

  return (
    <div className="profile-card">
      <div className="profile-details">
        <img className="avatar" src={require("../../assets/images/UserAvatar.png")} alt={`${props.userName || 'none'}`}/>
        <div className="profile-info">
          <h2>{handleTextField()? 'Ім\'я' : props.clientData?.firstName}</h2>
          <h2>{handleTextField()? 'Фамилія' : props.clientData?.lastName}</h2>
          <p>{handleTextField()? 'вік' : props.clientData?.age}, роки</p>
          <p>{handleTextField()? 'моб. телефон' : props.clientData?.mobile}</p>
          {!handleTextField()? <p>{`\"${statusCode200?.property}\" is deleted`}</p> : <></>}
        </div>
      </div>
      <div className="actions">
        <button className="edit-btn" disabled>Редагувати</button>
        {btnDelete()}
      </div>
    </div>
  );
};

export default ProfileCard;
