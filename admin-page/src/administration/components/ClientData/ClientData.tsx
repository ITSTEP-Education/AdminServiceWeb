import React, {FC, useState} from "react";
import { ClientDataWrapper } from "./ClientData.styled";
import SearchForm from "../SearchForm/SearchForm";
import ProfileCard from "../ProfileCard/ProfileCard";

const ClientData: FC = () => {

    const [userName, setUserName] = useState<string | null>(null);
    const handleUserName = (e: React.FormEvent<HTMLElement>) => {
        e.preventDefault();

        let values: Array<string> = [];
        e.currentTarget.parentElement?.querySelectorAll('input').forEach(item => {values.push(item.value)});
        if(values[0].length == 0 || values[1].length == 0){
            setUserName(null);
        }
        else{
            setUserName(`${values[0]}-${values[1]}`);
        }

        (e.currentTarget.parentElement as HTMLFormElement).reset();
    }

    return(
        <ClientDataWrapper>
            <SearchForm handleUserName={handleUserName}/>
            <ProfileCard userName={userName}/>
        </ClientDataWrapper>
    );
}

export default ClientData;