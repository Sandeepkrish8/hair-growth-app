import React from 'react';
import FoodList from './components/FoodList';
import VitaminList from './components/VitaminList';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Hair Growth App</h1>

      <LoginForm />
      <hr className="my-4" />

      <FoodList />
      <hr className="my-4" />

      <VitaminList />
    </div>
  );
}

export default App;
