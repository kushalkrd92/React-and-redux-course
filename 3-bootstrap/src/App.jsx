import './App.css'
import "bootstrap/dist/css/bootstrap.css"
import Heading from './assets/components/Heading'
import Buttons from './assets/components/Buttons'

function App() {
  return <div className='my-container'>
    <Heading></Heading>
    <div className='btn-container'>
      <Buttons />
    </div>
  </div>
}

export default App
