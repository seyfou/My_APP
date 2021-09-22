import SignIn from './components/connection/SignIn';
import {Switch, Route} from "react-router-dom";
// import Footer from './components/Footer'
import Gallery from './components/Gallery'
import { current } from './js/actions/user';
import './App.css';
import  Navbar  from "./components/Navbar";
import Home from "./components/Home"
import Services from "./components/services/Services"
import Activités from "./components/services/Activités";
import Contact from "./components/Contact"
import Dashbord from "./components/admin/Dashbord";
import UserProfile from "./components/admin/UserProfile"
import Basket from "./components/services/reservation/Basket"
import EditRes from "./components/services/reservation/EditRes"
import PrivateRouteA from "./components/router/PrivateRouteA"
import PrivateRouteP from "./components/router/PrivateRouteP"
import Avis from "./components/Avis"
// import Message from "./components/Message"
import UserTab from "./components/admin/UserTab"
// import Devis from "./components/services/reservation/Devis"
import AvisHome from "./components/AvisHome";
import DevisFinal from "./components/services/reservation/DevisFinal"
import About2 from "./components/About2";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import fileUpload from 'express-fileupload';








function App() {
 const dispatch = useDispatch()
 const getUser = ()=>dispatch(current())
 useEffect(() => {getUser()},[])

  return (
    <div className="App">
 
     <Navbar />
     <  fileUpload/>
   
 <Switch>

       <Route exact path="/" component={Home} />
       <Route  path="/contact" component={Contact} />   
        
       <Route  path="/signIn" component={SignIn} />    
       <Route  path="/services" component={Services}/>  
  
       <Route  path="/Activités" component={Activités} /> 
       <PrivateRouteA  path="/dashbord" component={Dashbord}/> 
       <PrivateRouteP  exact path="/userProfile" component={UserProfile}/> 
      
       <PrivateRouteP  path="/basket" component={Basket}/>  
       <Route  path="/gallery" component={Gallery} /> 
       
       <Route  path="/edit" component={EditRes} /> 
       <Route  path="/avis" component={Avis} /> 
       {/* <Route  path="/carousel" component={Carousel} />  */}
       <Route  path="/userTab" component={UserTab} /> 
       <Route path="/devisFinal" component={DevisFinal}/>
       <Route path="/avisHome" component={AvisHome}/>
       <Route path="/about2" component={About2}/>
     
 

    


  </Switch>
    </div>
  );
}

export default App;