import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {

  const [foodItems, setFoodItem] = useState([]);
  
  const handleOnKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem = event.target.value;
      event.target.value = '';
      let newFoodItems = [...foodItems, newFoodItem];
      setFoodItem(newFoodItems);
    }
  };

  // let textStateArr = useState('Entered food item');
  // let textStateValue = textStateArr[0];
  // let setTextState = textStateArr[1];
  
  let [textToShow, setTextState] = useState();

  const handleOnChange = (event) => {
    setTextState(event.target.value);
  };


  return (
    <>
      <Container>
        <h1 className="heading">Healthy Foods</h1>
        <FoodInput handleOnKeyDown={handleOnKeyDown} 
        handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <ErrorMessage foodItems={foodItems}></ErrorMessage>
        <FoodItems
          foodItems={foodItems}
        ></FoodItems>
      </Container>
    </>
  );
}

export default App;
