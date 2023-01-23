import React from 'react';
import { ItensProps, ListProps } from './List.types';

const List: React.FC<ListProps> = (props) => {
  const { listTitle, itens } = props;
  return (
    <aside>
      <h1>{listTitle}</h1>
      <ul>
        {itens?.map((item, index) => (
          <li key={index}>
            <h3>{item.itemTitle}</h3>
            <p>{item.descriptiom}</p>
            <span>{item.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default List;
