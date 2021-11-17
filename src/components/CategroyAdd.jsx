import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CategroyAdd = ({ setcategories }) => {
  const [inputValue, setinputValue] = useState('');

  const handleInputChange = ({ target }) => {
    console.log(target.value);
    setinputValue(target.value);

    console.log('Hay un cambio');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length) {
      setcategories((categories) => [inputValue, ...categories]);
      setinputValue('');
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </>
  );
};

CategroyAdd.propTypes = {
  setcategories: PropTypes.func.isRequired,
};

export default CategroyAdd;
