import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import './SignIn.css'
import {loginUser, registerUser} from "../../js/actions/user";
import {useHistory} from "react-router-dom";
import { Link } from 'react-router-dom';


function SignIn() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  
  const dispatch = useDispatch();
  const history=useHistory();
    return (
        <div style={{marginTop:130,height:812,backgroundImage:"url('https://th.bing.com/th/id/R.805fced120ade1c11d4bc015a331456e?rik=oDmWLmgY%2fyAbQw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f268714-Ferrari_California_T-Convertible-road-sea-sunset-car.jpg&ehk=QVq2vp7xHN%2fiQBfC0SjHfOsn7SnMwg9j%2fevYdSui9YQ%3d&risl=&pid=ImgRaw&r=0')", backgroundRepeat: "no-repeat", marginLeft:43, backgroundSize: "96% 100%"}}>
   
  
    
      <div className="login-box" style={{  width: "500px",left: "-72px", padding:50,marginTop:20}}>
        <div className="login-snip">
          {" "}
          <input
            id="tab-1"
            type="radio"
            name="tab"
            className="sign-in"
            defaultChecked
          />
          <label htmlFor="tab-1" className="tab">
            Connexion
          </label>{" "}
          <input id="tab-2" type="radio" name="tab" className="sign-up" />
          <label htmlFor="tab-2" className="tab">
            S'inscrire
          </label>

          {/* login part (sign in) */}
          <div className="login-space">
            <div className="login">
              <div className="group">
                {" "}
                <label htmlFor="user" className="label">
                  Addresse Email
                </label>{" "}
                <input
                  id="user"
                  type="text"
                  className="input"
                  placeholder="Entrer votre adresse mail"
                  onChange={(e)=>setEmail(e.target.value)}
                  
                />{" "}
              </div>
              <div className="group">
                {" "}
                <label htmlFor="pass" className="label">
                  Mot de passe
                </label>{" "}
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  placeholder="Entrer votre mot de passe"
                  onChange={(e)=>setPassword(e.target.value)}
                />{" "}
              </div>
              <div className="group">
                {" "}
                <input
                  id="check"
                  type="checkbox"
                  className="check"
                  defaultChecked
                />{" "}
            
              </div>
              <div className="group">
                {" "}
                <Link to="/">
                <input
                  type="submit"
                  className="button"
                  defaultValue="Connexion"
                  onClick={()=>dispatch(loginUser({email,password},history))}
                /> </Link>{" "}
              </div>
              <div className="hr" />
             
            </div>

            {/* sign up part */}

            <div className="sign-up-form">
              <div className="group">
                {" "}
                <label htmlFor="user" className="label">
                  Prénom
                </label>{" "}
                <input
                  id="userLastname"
                  type="text"
                  className="input"
                  placeholder="Entrer votre prénom"
                  onChange={(e)=>setLastName(e.target.value)}
                />{" "}
              </div>
              <div className="group">
                {" "}
                <label htmlFor="user" className="label">
                  Nom: 
                </label>{" "}
                <input
                  id="user"
                  type="text"
                  className="input"
                  placeholder="Entrer votre nom"
                  onChange={(e)=>setName(e.target.value)}
                />{" "}
              </div>
              <div className="group">
                {" "}
                <label htmlFor="pass" className="label">
                  Adresse Email
                </label>{" "}
                <input
                  id="pass"
                  type="text"
                  className="input"
                  placeholder="Entrer votre adresse email"
                  onChange={(e)=>setEmail(e.target.value)}
                />{" "}
              </div>
              <div className="group">
                {" "}
                <label htmlFor="pass" className="label">
                  Numéro de téléphone
                </label>{" "}
                <input
                  id="pass"
                  type="text"
                  className="input"
                  placeholder="Entrer votre numéro de téléphone "
                  onChange={(e)=>setPhone(e.target.value)}
                />{" "}
              </div>
              <div className="group">
                {" "}
                <label htmlFor="pass" className="label">
                  Mot de passe
                </label>{" "}
                <input
                  id="pass"
                  type="password"
                  className="input"
                  data-type="password"
                  placeholder="créer votre mot de passe"
                  onChange={(e)=>setPassword(e.target.value)}
                />{" "}
              </div>
             
              <div className="group">
                {" "}

             <Link to='/'>
                <input
                  type="submit"
                  className="button"
                  defaultValue="S'inscrire"
                  onClick={()=>dispatch(registerUser({name,lastName,email,password,imageUrl,isAdmin,phone},history))}
                /> </Link>{" "} 
              </div>
              <div className="hr" />
              <div className="foot">
                {" "}
                <label htmlFor="tab-1">déjà membre?</label>{" "}
              </div>
            </div>
          </div>
          
         
  
      </div>
 
  
  
</div>   
        </div>
    )
}

export default SignIn
