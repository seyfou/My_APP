import React, {useState,useEffect} from 'react'
import { Button, Modal } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {postContact} from "../js/actions/contact"
import './contact.css'
import Footer from "./Footer"
import emailjs from 'emailjs-com';
import swal from 'sweetalert'

function Contact() {

  const dispatch = useDispatch()
  const contact = useSelector(state => state.contactReducer.contact)

  const weekday=["Sunday","Monday","Thuesday","Wednesday","Thursday","Friday","Saturday"]
  let day=weekday[new Date().getDay()]
    let dt=new Date().toLocaleDateString();
    let time=new Date().toLocaleTimeString();
  
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [message, setMessage] = useState("");
const [date, setDate] = useState(  `${day} :${dt}`)

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_nk836em', 'template_9sudbl2', e.target, 'user_PRY1vJWabl7tf8g84GOa8')
    .then((result) => {
        console.log(result);
    }, (error) => {
        console.log(error);
    });
  e.target.reset()
}


    return (
             <div className="container-fluid px-1 py-5 mx-auto" style={{marginTop:100, backgroundImage: "url('https://th.bing.com/th/id/R.a91bf5423a043921c1a0ba7f9d8c0cfc?rik=MYTAS0wzi1i7SA&pid=ImgRaw&r=0')", backgroundRepeat: "no-repeat", marginLeft:43, backgroundSize: "100% 100%"}}>
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div className="card" style={{backgroundColor:'transparent',width:691,marginLeft:-40,marginTop:20}}>
              <h5 className="text-center mb-4" style={{color:'white'}}>Nous contacter</h5>
              <form className="form-card"  onSubmit={sendEmail}>
                <div className="row justify-content-between text-left">

                  <div className="form-group col-sm-6 flex-column d-flex"> 
                  <label className="form-control-label px-3" style={{color:'white'}}>Nom:<span className="text-danger"> *</span></label>
                 <input type="text" id="fname" name="name" placeholder="Entrer votre nom" onblur="validate(1)"  onChange={(e)=>setFirstName(e.target.value)} /> </div>
                  
                  
                  <div className="form-group col-sm-6 flex-column d-flex"> 
                  <label className="form-control-label px-3" style={{color:'white'}}>Prénom<span className="text-danger"> *</span></label>
                 <input type="text" id="lname" name="lname" placeholder="Entrer votre prénom" onblur="validate(2)" onChange={(e)=>setLastName(e.target.value)} /> </div>
                </div>

                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex"> 
                  <label className="form-control-label px-3" style={{color:'white'}}>Adresse mail:<span className="text-danger"> *</span></label> 
                  <input type="text" id="email" name="email" placeholder="Entrer votre addresse mail" onblur="validate(3)" onChange={(e)=>setEmail(e.target.value)} /> </div>
                  
                  <div className="form-group col-sm-6 flex-column d-flex">
                     <label className="form-control-label px-3" style={{color:'white'}}>Numéro de téléphone<span className="text-danger"> *</span></label>
                     <input type="text" id="mob" name="mob" placeholder="Entrer votre numéro de téléphone" onblur="validate(4)" onChange={(e)=>setPhoneNumber(e.target.value)} /> </div>
                </div>

              
                <div className="row justify-content-between text-left">
                  <div className="form-group col-12 flex-column d-flex">
                     <label className="form-control-label px-3" style={{color:'white'}}>Message<span className="text-danger"> *</span></label>
                      <textarea cols="20" rows="5" id="ans" name="message" placeholder="Saisir votre message" onblur="validate(6)" onChange={(e)=>setMessage(e.target.value)} /> </div>
                </div>
                <div className="row justify-content-end">
                 
                <input type="submit" value="Envoyer"  onClick={()=>{dispatch(postContact({firstName,lastName,email,phoneNumber,message,date}));swal({
  title: "Génial!",
  text: "Votre message a été envoyé!",
  icon: "success",
  button: "D'accord!",
})}}/> {/* <div className="form-group col-sm-6"> <Link to='/'><button type="submit" className="btn-block btn-primary" onClick={()=>{dispatch(postContact({firstName,lastName,email,phoneNumber,message,date}));alert("Votre message a été envoyé avec succès")}}>Envoyer</button></Link> </div> */}
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer/> 
      </div>
       
    )
}

export default Contact