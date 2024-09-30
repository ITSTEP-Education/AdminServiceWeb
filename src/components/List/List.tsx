import React from "react";
import './List.css';
interface Order {
    id: number;
    language: string;
    type: string;
    hours: number;
    amount: number;
    date: string;
    guid: string;
  }
  
  const orders: Order[] = [
    { id: 1, language: 'C++', type: 'back-end', hours: 200, amount: 1700, date: '24.03.2024, 15:30', guid: 'xsx12dssf11c' },
    { id: 2, language: 'C#', type: 'back-end', hours: 200, amount: 1700, date: '24.03.2024, 15:30', guid: 'xsx12dssf11c' },
    { id: 3, language: 'Python', type: 'back-end', hours: 200, amount: 1700, date: '24.04.2024, 13:30', guid: 'xszds23xdxcx' },
    { id: 4, language: 'JS', type: 'front-end', hours: 200, amount: 1700, date: '24.03.2024, 15:30', guid: 'xsx12dssf11c' },
  ];
  
  const List = () => {
    return (
      <div className="table-container">
        <div className="table-header">
          <h2>ЗАМОВЛЕННЯ</h2>
          <button className="download-button">ЗАВАНТАЖИТИ</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Назва мови</th>
              <th>Тип розробки</th>
              <th>Кількість, год.</th>
              <th>Сума, грн.</th>
              <th>Дата</th>
              <th>GUID</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(order => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.language}</td>
                <td>{order.type}</td>
                <td>{order.hours}</td>
                <td>{order.amount}</td>
                <td>{order.date}</td>
                <td>{order.guid}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}
export default List