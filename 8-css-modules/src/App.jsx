import './App.css'
import DragonNames from './DragonNames'
import ErrorMessage from './ErrorMessage'

function App() {
  let dragonNames = ['Caraxes', 'Syrax', 'Vhagar', 'Sunfyre', 'Dreamfyre', 'Vermax']

  return <div className='k-container'>
    <h1 className='heading'>List of Dragon Names</h1>
    <ErrorMessage dragons={dragonNames}></ErrorMessage>
    <DragonNames dragons={dragonNames}></DragonNames>
  </div>
}

export default App
