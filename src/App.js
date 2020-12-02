
import './App.css';
import Cabecera from './hola';
import Nombres from './nombres';

import {BrowserRouter, Route, Link} from 'react-router-dom'
function App() {



  return (
    <BrowserRouter>
    <Cabecera/>
    <Route path="/nombres">
                <Nombres />
            </Route>
    </BrowserRouter>
  );

}

export default App;
