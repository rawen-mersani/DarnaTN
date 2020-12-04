import React ,{useState } from 'react';
import './App.css';
import Cookies from 'universal-cookie';
import {BrowserRouter  as Router ,Redirect,Route,Switch} from "react-router-dom";
// import UserRoutes from "./components/user-routes/UserRoutes"
import AdminRoutes from "./components/admin-routes/AdminRoutes"
import MembersPage from "./components/admin-routes/List-members/MembersPage"
import Menu from "./components/admin-routes/Menu/Menu"
import Footer from "./components/admin-routes/Menu/Footer"
import Login from "./components/admin-routes/Login/Login"
import SignUp from "./components/admin-routes/SignUp/SignUp"
import './store.js'
import CreateMember from './components/admin-routes/List-members/CreateMember';
import { Provider } from 'react-redux';
import store from './store';
import MemberDetails from './components/admin-routes/List-members/MemberDetails';
import RubriquesPage from './components/admin-routes/List-rubriques/RubriquesPage'
import CreateRubrique from './components/admin-routes/List-rubriques/CreateRubrique'
import MenuList from './components/admin-routes/List-rubriques/MenuList';
import RubriquesAccueil from './components/admin-routes/List-rubriques/accueil/RubriquesAccueil'





function App() {
  
 
  return (
    <Provider store={store}>
    <div className="App"> 
    {/* <Router>
    <Route exact path="/">
      <Redirect to={'/login'} setUser={setUser} user={user} cookies={cookies}/>
    </Route>
    <Route exact path="/login">
        <Login setUser={setUser} user={user} cookies={cookies}/>
    </Route>
    </Router> */}
    <Router>
        <Switch>
        <>
        <Route exact path="/members/:memberId">
          <Menu/>
          <MemberDetails/>
          <Footer/>
        </Route>
        <Route exact path="/members">
          <Menu/>
          <MembersPage/>
          <Footer/>
        </Route>
        <Route exact path="/menuList">
          <Menu/>
          <MenuList/>
          <Footer/>
        </Route>
        <Route exact path="/rubriques_accueil">
          <Menu/>
          <RubriquesAccueil />
          <Footer/>
        </Route>
        <Route exact path="/rubriques">
          <Menu/>
          <RubriquesPage/>
          <Footer/>
        </Route>
        <Route  exact path="/create_rubrique">
            <Menu/>
            <CreateRubrique/>
            <Footer/>
         </Route>
        <Route  path="/admin">
          <AdminRoutes  />
         </Route>
          
         <Route  path="/login">
          <Login  />
         </Route>
         <Route  path="/signup">
          <SignUp  />
         </Route>
         <Route  exact path="/create_member">
            <Menu/>
            <CreateMember/>
            <Footer/>
         </Route>
         <Route  path="/edit/:id">
            <Menu/>
            <CreateMember />
            <Footer/>
         </Route>
          </>
        </Switch>
       
      </Router>
   
      
     
    </div>
    </Provider>
  );
}

export default App;
