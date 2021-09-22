import React, {useState} from 'react'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {postReservation} from "../../../js/actions/reservation"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



toast.configure()
function ModalRes({card,tabD}) {
  const notify = () => toast.warn("Votre réservation a été ajoutée");

  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [dateRes, setDateRes] = useState("");
    const [num, setNum] = useState(0);
    const [titleCard, setTitleCard] = useState(card.agentName);
    const [imgCard,setImgCard] = useState(card.cardImg);
    const [total, setTotal] = useState(0)
    const [userName, setUserName] = useState(user?user.name:"")
    const [userLastName, setUserLastName] = useState(user?user.lastName:'')
    const [imageUrl, setImageUrl] = useState(user?user.imageUrl:"")
    const [status, setStatus] = useState("")





const Multi=(a,b)=>{
  return a*b
  }


    return (
      <div>

      <span style={{marginLeft:162,fontSize:"bolder" ,height:"40px",border:"none",marginTop:2}}  onClick={handleShow}>
               <font style={{fontSize:"30",color:'#f37474'}}>Réserver</font>
              
                    </span> 
                      
      
            <Modal show={show} onHide={handleClose}
               size="lg">
              <Modal.Header closeButton>
                <Modal.Title>{card.agentName}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div style={{display:"flex", width:600, height:253, marginTop:20}}>
                <div style={{marginTop:-25}}>
                <img src={card.cardImg} style={{width:460, height:296 }} alt="img"/>
                </div>
           <div style={{marginLeft:20,marginTop:-22}}>
              <h6>{card.details[0]}</h6>
              <h6>{card.details[1]}</h6>
              <h6>Date:<input type="date" name="date"  onChange={(e)=>setDateRes(e.target.value)}></input></h6>
              

         {card.titleCard==="Vente des nouveaux voitures"?<h6>Nombre de voiture</h6>:null}
         {card.titleCard==="Vente des voitures occasion"?<h6>Nombre de voiture</h6>:null}
         {card.titleCard==="Pièces de rechange"?<h6>Nombre de pièce</h6>:null}
         {card.titleCard==="Service de réparation"?<h6>Nombre d'heures</h6>:null}
         {card.titleCard==="vidange des voitures"?<h6>Nombre d'heures </h6>:null}
         {card.titleCard==="Lavage des voitures"?<h6>Nombre d'heures</h6>:null}
         {card.titleCard==="Diagnostique des voitures"?<h6>Nombre d'heures</h6>:null}
         
                <input type="text" name="number" style={{width:90}}   onChange={(e)=>{setNum(e.target.value);setTotal(Multi(e.target.value,card.prix) )}} />
                 
                  {console.log(typeof(num),typeof(dateRes))}
     <h6>Total:</h6>
     <input type="text" name="total" style={{width:90}}  value={Multi(num,card.prix)}  />
     </div>
     
     
     
                </div>
              </Modal.Body>
              <Modal.Footer>
          
         <Link to={{pathname:"/basket",Props:{imgCard:card.imgCard,agentName:card.agentName,prix:card.prix,dateRes:dateRes, num:num,status:status}}}>  
         <Button variant="light" style={{width:120,fontWeight:"bold", height:36,backgroundColor:"rgb(222 113 113)", padding:".375rem .75re",fontSize:"1rem",lineHeight:"1.5",borderRadius:".25rem", border:"none",color:"white"}}
          onClick={()=>{dispatch(postReservation({imgCard,titleCard,dateRes,num,total,userName,userLastName,imageUrl}));notify()}} > 
             Réserver
           </Button></Link>
         </Modal.Footer>
       </Modal>
       </div>
   );
 }
 

      
  
export default ModalRes