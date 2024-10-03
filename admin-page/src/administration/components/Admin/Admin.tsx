import React, {FC} from 'react';
import Title from '../Title/Title';
import './Admin.css'
import Authentication from '../Authentication/Authentication';
import Market from '../Market/Market';
import ImageForTitle from '../ImageForTitle/ImageForTitle';
import ListOrders from '../List/List';
import RegisterForm from '../RegisterForm/RegisterForm';
import SearchForm from '../SearchForm/SearchForm';
import ProfileCard from '../ProfileCard/ProfileCard';


const Admin: FC = () => {
    return (
        <div className='mainPage'>

            <Title />
            <Authentication />
            <Market />
            <ImageForTitle />
            <ListOrders />
            <RegisterForm />
            <SearchForm />
            <ProfileCard
                name="Олена Баговець"
                age={22}
                phone="+3 80501112233"
                avatarUrl="https://via.placeholder.com/150" // Замените на реальный URL изображения
            />
        </div>
    )
}

export default Admin