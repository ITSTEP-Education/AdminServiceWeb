import React, {FC, useEffect, useState} from 'react';
import './ProfileCard.css';

type ClientData = {
  firstName: string,
  lastName: string, 
  age: number,
  mobile: string,
}

type TProfileCard = {
  userName: string | null,
  clientData: ClientData | null
}

const ProfileCard: FC<TProfileCard> = (props) => {

  return (
    <div className="profile-card">
      <div className="profile-details">
        <img className="avatar" src={'https://via.placeholder.com/150'} alt={`${props.userName || 'none'}'s avatar`}/>
        <div className="profile-info">
          <h2>{props.clientData?.firstName || 'Ім\'я'}</h2>
          <h2>{props.clientData?.lastName || 'Фамилія'}</h2>
          <p>{props.clientData?.age || 'вік'}, роки</p>
          <p>{props.clientData?.mobile || 'моб. телефон'}</p>
        </div>
      </div>
      <div className="actions">
        <button className="edit-btn">Редагувати</button>
        <button className="delete-btn">Видалити</button>
      </div>
    </div>
  );
};

export default ProfileCard;
