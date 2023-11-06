import React, { useState } from 'react';

function MenuItem(props) {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="itemContainer">
      <div className="leftContainer">
        <div className="imgContainer">
          <img src={props.imgSrc} alt="" />
        </div>
        <div className="itemDescription">
          <h3>{props.itemName}</h3>
          <p>{props.itemDescription}</p>
        </div>
      </div>
      <div className="rightContainer">
        <div>{props.itemPrice} EUR</div>
        <div
          id="favorite"
          onClick={handleClickFavorite}
          className={isFavorite ? 'isFavorite' : 'notFavorite'}
        >
          {isFavorite ? 'Favorite' : 'Not Favorite'}
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
