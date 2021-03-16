import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ProductDetail from './components/ProductDetail/ProductDetail';
import Login from './components/Login/Login';
import Shipment from './components/Shipment/Shipment';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <h4>Email: {loggedInUser.email}</h4>
      <Router>
      <Header></Header>
        <Switch>

          <Route path="/shop">
            <Shop></Shop>
          </Route>

          <Route path="/review">
            <Review></Review>
          </Route>

          <PrivateRoute path="/inventory"> 
              <Inventory></Inventory>
          </PrivateRoute>

          <Route path="/login"> 
              <Login></Login>
          </Route>

          <PrivateRoute path="/shipment"> 
              <Shipment></Shipment>
          </PrivateRoute>

          <Route path='/product/:productKey'>
              <ProductDetail></ProductDetail>
          </Route>

          <Route exact path="/">
              <Shop></Shop>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
