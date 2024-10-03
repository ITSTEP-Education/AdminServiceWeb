import React, {FC} from "react";
import './List.css';

  const ListTitle: FC = () => {
    return (
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
      </table>
    )
}
export default ListTitle