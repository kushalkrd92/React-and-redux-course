import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let dragonNames = ['Caraxes', 'Syrax', 'Vhagar', 'Meleys', 'Sunfyre', 'Dreamfyre', 'Vermax', 'Arrax'];

  return (
    <>
      <h1>List of Dragon names</h1>
      <ul className="list-group">
        {dragonNames.map((item) => (
          <li key={item} class="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
