import './App.css'

function App() {
  let dragonNames = ['Caraxes', 'Syrax', 'Vhagar', 'Meleys', 'Sunfyre', 'Dreamfyre', 'Vermax', 'Arrax']
  // let dragonNames = []

  // using if/else
  // if(dragonNames.length === 0){
  //   return <h3>I am still hungry.</h3>
  // }

  return <>
    <h1>List of Dragon names</h1>

    {/* using ternary operators */}
    {/* {dragonNames.length === 0 ? <h3>I am still hungry.</h3>: null} */}
    {dragonNames.length === 0 ? <h3>I am still hungry.</h3>: <ul className="list-group">
        {dragonNames.map((item) => (
          <li key={item} class="list-group-item">{item}</li>
        ))}
      </ul>}

    {/* using logical operators && */}
    {/* {dragonNames.length === 0 && <h3>I am still hungry.</h3>} */}

    {/* normal way */}
      {/* <ul className="list-group">
        {dragonNames.map((item) => (
          <li key={item} class="list-group-item">{item}</li>
        ))}
      </ul> */}
  </>
}

export default App
