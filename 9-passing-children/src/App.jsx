import './App.css'
import DragonNames from './DragonNames'
import ErrorMessage from './ErrorMessage'
import Container from './Container'

function App() {
  let dragonNames = ['Caraxes', 'Syrax', 'Vhagar', 'Sunfyre', 'Dreamfyre', 'Vermax']

  return <>
  <Container>
      <h1 className='heading'>List of Dragon Names</h1>
      <ErrorMessage dragons={dragonNames}></ErrorMessage>
      <DragonNames dragons={dragonNames}></DragonNames>
  </Container>

  <Container>
    <h1>Good Bye</h1>
  </Container>

  <Container>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium in dolore recusandae voluptatum.</p>
  </Container>
  </>
}

export default App
