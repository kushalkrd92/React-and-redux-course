import './App.css'
import DragonNames from './FoodItems'
import ErrorMessage from './ErrorMessage'
import Container from './Container'
import FoodInput from './FoodInput'

function App() {
  let foodItems = ['Fruits', 'Salad', 'Milk', 'Egg', 'Cold Drink', 'Chips']

  return <>
  <Container>
      <h1 className='heading'>Healthy Foods</h1>
      <FoodInput></FoodInput>
      <ErrorMessage foodItems={foodItems}></ErrorMessage>
      <DragonNames foodItems={foodItems}></DragonNames>
  </Container>
  </>
}

export default App
