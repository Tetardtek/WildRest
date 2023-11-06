import React from "react";
import "./App.css";
import MenuList from "./components/MenuList";
import foodItems from "./data/foodItems";

const App = () => {
  return (
    <div>
      <h1>Wild Restaurant Menu</h1>
      <MenuList foodItems={foodItems} />
    </div>
  );
};

export default App;
