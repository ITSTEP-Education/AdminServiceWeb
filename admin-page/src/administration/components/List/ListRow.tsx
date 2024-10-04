import React, {FC, useState, useEffect, useContext} from "react";
import axios from "axios";
import './ListOrders.css';
import { GuidOrderContext } from "../Admin/Admin";

interface ProductOrder {
    name: string;
    typeEngeeniring: string;
    timeStudy: number;
    sumPay: number;
    guid: string;
    dateTime: string;
}

interface IError {
    message: string,
}

type TListRow = {
    isLoad: boolean,
    // _handleGuid: (e: React.FormEvent<HTMLElement>) => void,
}

const ListRow: FC<TListRow> = (props) => {

    const [productOrders, setProductOrders] = useState<Array<ProductOrder>>([]);
    const [productError, setProductError] = useState<IError | null>(null)
    const handleGuid = useContext(GuidOrderContext);

    const productOrderRequest = axios.create({
        baseURL: 'https://localhost:7209/api/v1/Administrate',
        method: 'get',
        responseType: 'json'
    });

    const handleRequest = () => {
        // console.log('get product-orders');

        if(props.isLoad){
            productOrderRequest.get('product-orders')
            .then(responce => {
                setProductOrders(responce.data);
                console.log(productOrders);
            })
            .catch(error => {
                setProductError(error);
                console.log(productError);
            });
        }
    };

    useEffect(() => {
        handleRequest();
    }, [props.isLoad]);

    return (
        <tbody>
            {productOrders.map((order, i) => (
                <tr key={i + 1} onClick={e => {handleGuid(e)}}>
                    <td>{i + 1}</td>
                    <td>{order.name}</td>
                    <td>{order.typeEngeeniring}</td>
                    <td>{order.timeStudy}</td>
                    <td>{order.sumPay}</td>
                    <td>{order.dateTime}</td>
                    <td key='guid'>{order.guid}</td>
                </tr>
            ))}
        </tbody>
    );
}

export default ListRow;