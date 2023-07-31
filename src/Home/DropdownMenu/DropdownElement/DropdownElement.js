import React from 'react';

import './dropdownElement.css';

const DropdownElement = ({ item }) => {
  const { title, image } = item;
  return (
    <>
      <div className="dropdown-item">
        <div className="dropdown-item__image">
          <img src={image} alt="cover" />
        </div>

        <div className="dropdown-item__title">{title}</div>
      </div>
      {/* <div>
            <hr/>
        </div> */}
    </>
  );
};

export default DropdownElement;
