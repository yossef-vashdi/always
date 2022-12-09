import React from 'react';
import Item from './Item';

function ListItems({ list, itemHandler }) {
  return (
    <div>
      {list.map((item, i) => {
        return (
          <Item
            key={item._id}
            data={item}
            itemHandler={itemHandler}
          />
        );
      })}
    </div>
  );
}

export default ListItems;
