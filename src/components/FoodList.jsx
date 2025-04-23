import React from 'react';
import { hairGrowthFoods } from '../data/foods';
import './FoodList.css';

const FoodList = () => (
  <div>
    <h2>Top Foods for Hair Growth</h2>
    <ul>
      {hairGrowthFoods.map((food, index) => (
        <li key={index} className="list-item">
          <strong>{food.name}</strong>: {food.benefit}
        </li>
      ))}
    </ul>
  </div>
);

export default FoodList;
