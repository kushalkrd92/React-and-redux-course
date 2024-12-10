import './App.css'
import FoodItems from './FoodItems'
import ErrorMessage from './ErrorMessage'
import Container from './Container'
import FoodInput from './FoodInput'

function App() {
  const foodItems = ['Fruits', 'Salad', 'Milk', 'Egg', 'Cold Drink', 'Chips']

  const handleOnChange = (event) => {
    console.log(event.target.value);
  }

  const handleButtonClicked = (event) => {
    console.log(`${foodItems} being bought.`)
}

  return <>
  <Container>
      <h1 className='heading'>Healthy Foods</h1>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <ErrorMessage foodItems={foodItems}></ErrorMessage>
      <FoodItems foodItems={foodItems} 
      handleButtonClicked={handleButtonClicked}></FoodItems>
  </Container>
  </>
}

export default App
