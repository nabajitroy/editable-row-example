
import React, { useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import HeaderComponent from "./components/common/HeaderComponent";
//import MenuLinks from './components/common/MenuLinks';
import LoginForm from './components/LoginComponent'
import PrivateRoute from './components/common/routes/PrivateRoute';
import PublicRoute from './components/common/routes/PublicRoute';
import ProfileComponent from './components/ProfileComponent';
import HomeComponent from './components/HomeComponent';


//import loader from './images/200.gif';
function App() {

  const dispatch = useDispatch();
  useEffect(() => {

  }, [dispatch])



  return (
    <BrowserRouter basename="/ProcureToPayProcess">
      <div className="wrapper">
        <div className="content">
          <HeaderComponent />


        </div>
        <Switch>
          <PublicRoute restricted={true} component={LoginForm} path="/login" exact />
          <PrivateRoute restricted={true} component={ProfileComponent} path="/profile" exact />
          <PrivateRoute restricted={true} component={HomeComponent} path="/" exact />
        </Switch>

      </div>
    </BrowserRouter >

  );
}

export default App;

