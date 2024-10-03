import React, {FC} from "react";

interface ProductOrder {
    name: string;
    typeEngeeniring: string;
    timeStudy: number;
    sumPay: number;
    guid: string;
    dateTime: string;
}

const ListRow: FC = () => {
    return (
        <tbody>
            {/* {orders.map(order => (
                <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.language}</td>
                <td>{order.type}</td>
                <td>{order.hours}</td>
                <td>{order.amount}</td>
                <td>{order.date}</td>
                <td>{order.guid}</td>
                </tr>
            ))} */}
        </tbody>
    );
}

export default ListRow;