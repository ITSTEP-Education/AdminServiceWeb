import React, {FC} from "react";
import './ListOrders.css';

  const ListTitle: FC = () => {
    return (
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
    )
}
export default ListTitle