import React from 'react';
import './ProfileCard.css';

interface IProfileCard {
  userName: string | null,
}

const ProfileCard: React.FC<IProfileCard> = ({userName}) => {
  return (
    <div className="profile-card">
      <div className="profile-details">
        <img className="avatar" src={'https://via.placeholder.com/150'} alt={`${userName || 'none'}'s avatar`}/>
        <div className="profile-info">
          <h2>{userName || 'Ім\'я Фамилія'}</h2>
          <p>вік, роки</p>
          <p>моб. телефон</p>
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
