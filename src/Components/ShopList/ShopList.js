import React from 'react';
import ShopItem from '../../Components/ShopItem/ShopItem';
import './ShopList.css';

function ShopList() {
  return (
    <div className="shops-list">
      <ShopItem />
      <ShopItem />
      <ShopItem />
      <ShopItem />
    </div>
  );
}

export default ShopList;
