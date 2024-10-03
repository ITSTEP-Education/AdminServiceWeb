import React from 'react';
import './ProfileCard.css';

interface ProfileCardProps {
  name: string;
  age: number;
  phone: string;
  avatarUrl: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, age, phone, avatarUrl }) => {
  return (
    <div className="profile-card">
      <div className="profile-details">
        <img className="avatar" src={avatarUrl} alt={`${name}'s avatar`} />
        <div className="profile-info">
          <h2>{name}</h2>
          <p>{age} роки</p>
          <p>{phone}</p>
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
