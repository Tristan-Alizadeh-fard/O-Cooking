import React from 'react';
import './shoppingList.scss';

const ShoppingList = () => (
<>
  <div className="app">
    <input type="checkbox" id="scales" name="scales"
    checked></input>
    <label for="scales">Scales</label>
  </div>

  <div>
    <input type="checkbox" id="horns" name="horns"></input>
    <label for="horns">Horns</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="horns"></input>
    <label for="horns">Horns</label>
  </div>
  <div>
    <input type="checkbox" id="horns" name="horns"></input>
    <label for="horns">Horns</label>
  </div>

</>

);

export default ShoppingList;
