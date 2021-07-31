import './App.css';
import {PublicRoute,VerifyRoute} from './utils/customRouter'
import { 
  BrowserRouter as Router,
  Switch,
  // Route,
  Redirect,
} from 'react-router-dom';
import Register from './containers/Auth/Register'
import Login from './containers/Auth/Login'
import Verify from './containers/Auth/VerifyOTP'

import Home from './containers/Home/Home'
import Course from './containers/Course/Course'
import NotFound from './containers/NotFound';

function App() {
  return (
    <>

      <Router>
        <Switch>
          <PublicRoute exact path='/register' >
              <Register></Register>
          </PublicRoute>
          <PublicRoute exact path='/login' >
              <Login></Login>
          </PublicRoute>
          <VerifyRoute exact path='/verify' >
              <Verify></Verify>
          </VerifyRoute>
          <PublicRoute exact path='/' >
              <Home></Home>
          </PublicRoute>
          <PublicRoute exact path='/course/:courseId' >
              <Course></Course>
          </PublicRoute>
          <PublicRoute path="/not-found" ><NotFound></NotFound></PublicRoute>
          <Redirect to="/not-found"></Redirect>
          {/* <LoginRoute path="/login" exact component={Login}></LoginRoute>
          <SRoute path="/check-out" exact component={CheckOut}></SRoute>
          <SRoute path="/cart" exact component={Cart}></SRoute>
          <SRoute path="/profile" exact component={Profile}></SRoute>
          <PublicRoute path="/not-found" component={NotFound}></PublicRoute>
          <PublicRoute path="/" exact component={Home}></PublicRoute>
          <Route path="/book-detail/:id" exact>
            <ProductDetail/>
          </Route>
          <SRoute path="/my-shop" exact component={Myshop}></SRoute>
          <SRoute path="/add-book" exact component={AddBook}></SRoute>
          <Redirect to="/not-found"></Redirect> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
