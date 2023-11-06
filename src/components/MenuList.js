import React from 'react';
import MenuItem from './MenuItem';

function MenuList({ foodItems }) {
  return (
    <div>
      {foodItems.map((item, index) => (
        <MenuItem
          key={index}
          imgSrc={item.foodImage}
          itemName={item.itemName}
          itemDescription={item.description}
          itemPrice={item.price}
          isFavorite={item.isFavorite}
        />
      ))}
    </div>
  );
}

export default MenuList;
