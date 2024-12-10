import './App.css'
import DragonNames from './DragonNames'
import ErrorMessage from './ErrorMessage'

function App() {
  let dragonNames = ['Caraxes', 'Syrax', 'Vhagar', 'Sunfyre', 'Dreamfyre', 'Vermax']

  return <>
    <h1>List of Dragon Names</h1>
    <ErrorMessage dragons={dragonNames}></ErrorMessage>
    <DragonNames dragons={dragonNames}></DragonNames>
  </>
}

export default App;
