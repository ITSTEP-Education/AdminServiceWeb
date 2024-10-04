import React, {FC, useState, useEffect} from "react";
import { ClientDataWrapper } from "./ClientData.styled";
import SearchForm from "../SearchForm/SearchForm";
import ProfileCard from "../ProfileCard/ProfileCard";
import axios from "axios";

type ClientData = {
    firstName: string,
    lastName: string, 
    age: number,
    mobile: string,
}

const getClientDataByName = async (userName: string) => {
    try{
        const responce = await axios.get(`https://localhost:7209/api/v2/Administrate/client-data/${userName}`);
        return responce.data;
    }catch{
        return null;
    }
}

const ClientData: FC = () => {

    const [userName, setUserName] = useState<string | null>(null);
    const [clientData, setClientData] = useState<ClientData | null>(null);

    const handleUserName = async (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        let values: Array<string> = [];
        e.currentTarget.parentElement?.querySelectorAll('input').forEach(item => {values.push(item.value)});
        (e.currentTarget.parentElement as HTMLFormElement).reset();

        if(values[0].length == 0 || values[1].length == 0){
            setUserName(null);
            setClientData(null);
        }
        else{
            setUserName(`${values[0]}-${values[1]}`);
            const data = await getClientDataByName(`${values[0]}-${values[1]}`);
            setClientData(data);
        } 
        
        console.log(clientData);
    }

    return(
        <ClientDataWrapper>
            <SearchForm handleUserName={handleUserName}/>
            <ProfileCard userName={userName} clientData={clientData} />
        </ClientDataWrapper>
    );
}

export default ClientData;