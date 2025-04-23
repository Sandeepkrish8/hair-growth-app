import React from 'react';
import { hairGrowthVitamins } from '../data/vitamins';

const VitaminList = () => (
  <div>
    <h2>Essential Vitamins for Hair Growth</h2>
    <ul>
      {hairGrowthVitamins.map((vitamin, index) => (
        <li key={index} className="list-item">
          <strong>{vitamin.name}</strong>: {vitamin.benefit}
        </li>
      ))}
    </ul>
  </div>
);

export default VitaminList;
