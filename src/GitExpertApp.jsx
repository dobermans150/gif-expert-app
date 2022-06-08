import React from 'react';
import { useState } from 'react/cjs/react.development';
import CategroyAdd from './components/CategroyAdd';
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {
  const [categories, setcategories] = useState(['one punch']);

  /*
  
  
  const handleAdd = () => {
    setcategories([...categories, 'Hunter X Hunter']);
  };
  
  */

  return (
    <>
      <h2>Git Expert App</h2>
      <hr />

      <CategroyAdd setcategories={setcategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GitExpertApp;
