import React from 'react';
import Title from '../Title/Title';
import './Body.css'
import Authentication from '../Authentication/Authentication';
import Market from '../Market/Market';
import ImageForTitle from '../ImageForTitle/ImageForTitle';
import List from '../List/List';
import RegisterForm from '../RegisterForm/RegisterForm';
import SearchForm from '../SearchForm/SearchForm';
import ProfileCard from '../ProfileCard/ProfileCard';
const Body = () => {

    return (
        <>
            <div className='mainPage'>

                <Title />
                <Authentication />
                <Market />
                <ImageForTitle />
                <List />
                <RegisterForm />
                <SearchForm />
                <ProfileCard
                    name="Олена Баговець"
                    age={22}
                    phone="+3 80501112233"
                    avatarUrl="https://via.placeholder.com/150" // Замените на реальный URL изображения
                />
            </div>









        </>
    )
}

export default Body