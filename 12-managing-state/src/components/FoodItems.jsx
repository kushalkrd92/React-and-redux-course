import Items from "./Items";
import styles from "./FoodItems.module.css";
import { useState } from 'react';

let FoodItems = ({ foodItems}) => {

  const [activeItems, setActiveItems] = useState([]);

  const handleBuyButtonClicked = (event, foodItems) => {
    let newFoodItems = [...activeItems, foodItems]
    setActiveItems(newFoodItems);
  };

  return (
    <>
      <ul className={`${styles["k-list-group"]} list-group`}>
        {foodItems.map((foodItems) => (
          <Items
            key={foodItems}
            foodItems={foodItems}
            bought = {activeItems.includes(foodItems)}
            handleButtonClicked={(event) => handleBuyButtonClicked(event,foodItems)}
          ></Items>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
