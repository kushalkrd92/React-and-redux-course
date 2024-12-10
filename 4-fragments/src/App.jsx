import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return <React.Fragment>
  <h1>List of Dragon names</h1>
  <ul class="list-group">
  <li class="list-group-item">Caraxes</li>
  <li class="list-group-item">Syrax</li>
  <li class="list-group-item">Vhagar</li>
  <li class="list-group-item">Meleys</li>
  <li class="list-group-item">Sunfyre</li>
  <li class="list-group-item">Dreamfyre</li>
  <li class="list-group-item">Arrax</li>
  <li class="list-group-item">Vermax</li>
</ul>
</React.Fragment>
}

export default App;

// use fragments without importing React using <> .... </>
