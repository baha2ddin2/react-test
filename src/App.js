import CalulPTTC from './ex1/calcul';
import Ex1 from './ex3/methode 1/produits'
import Ex2 from './ex3/methode 2/produits'
import Ex3 from './ex3/methode 3/produits'
import Ex4 from './ex4/Bibliotheque'
import Ex5 from './ex5/Principal'
import Ex6 from './ex6/prod'
import Ex7 from './ex7/Principale'
import ExForm from './TestForm'
import Crud from './crud/principal'
import Api1 from './ex8/tp1'
import Api2 from './ex8/tp2'
import Efm1 from './efm/ex1'
import Efm2 from './efm/ex2'
import Efm3 from './efm/ex3'
import Test from './test/all'
import TestRedux from './redux/test'
import ReduxCrud from './redux-crud/crudReduxUser'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import reducer from './redux/reducer';
import reducer1 from './redux-crud/reducer'

function App() {
  const store = legacy_createStore(reducer1)
  return (
    <Provider store={store}>
      <ReduxCrud/>
    </Provider>

  );
}
export default App;