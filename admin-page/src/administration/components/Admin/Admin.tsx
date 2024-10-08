import React, {FC, useState, createContext} from 'react';
import Title from '../Title/Title';
import './Admin.css'
import Authentication from '../Authentication/Authentication';
import Market from '../Market/Market';
import ImageForTitle from '../ImageForTitle/ImageForTitle';
import ListOrders from '../List/LIstOrders';
import RegisterForm from '../RegisterForm/RegisterForm';
import { Display } from '../styles/General.styled';
import ClientData from '../ClientData/ClientData';

export const GuidOrderContext = createContext((e: React.FormEvent<HTMLElement>):void =>{});
export const GuidToNoneContext = createContext(():void => {});

const Admin: FC = () => {

    const [guid, setGuid] = useState<string>('none');

    const handleGuid = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();
        setGuid(e.currentTarget.lastChild?.textContent || 'none');
    };

    const handleGuidToNone = () => {
        setGuid('none');
    }

    return (
        <div className='mainPage'>
            <Title />
            <Authentication />
            <Market />
            <ImageForTitle />
            <GuidToNoneContext.Provider value={handleGuidToNone}>
            <GuidOrderContext.Provider value={handleGuid}>
                <ListOrders />
            </GuidOrderContext.Provider>
            </GuidToNoneContext.Provider>
            <Display>
                <RegisterForm guid={guid}/>       
                <Display _direction='column'>
                    <ClientData/>
                </Display>   
            </Display>
        </div>
    )
}

export default Admin