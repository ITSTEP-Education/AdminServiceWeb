import React, {FC, useContext, useEffect, useState} from "react";
import ListTitle from "./ListTitle";
import ListRow from "./ListRow";
import './ListOrders.css';
import { GuidToNoneContext } from "../Admin/Admin";

const ListOrders: FC = () => {

    const [isDisplay, setIsDisplay] = useState<boolean>(false);
    const [display, setDisplay] = useState<string>('none');
    const [btnTitle, setBtnTitle] = useState<string>('ЗАВАНТАЖИТИ');

    const handleGuidToNone = useContext(GuidToNoneContext);

    const handleDisplay = () => {
        setIsDisplay(!isDisplay);
        handleGuidToNone();
    };

    useEffect(()=> {   
            if(isDisplay){
                setDisplay('block');
                setBtnTitle('ЗВЕРНУТИ');
            }
            else{
                setDisplay('none');
                setBtnTitle('ЗАВАНТАЖИТИ');
            }
        }
        , [isDisplay]);

    return (
        <div className="table-container">
            <div className="table-header">
                <h2>ЗАМОВЛЕННЯ</h2>
                <button className="download-button" onClick={handleDisplay}>{btnTitle}</button>
            </div>
            <div style={{display: display}}>
                <table>
                    <ListTitle/>
                    <ListRow isLoad={isDisplay}/>
                </table>
            </div>
        </div>
    );
}

export default ListOrders;