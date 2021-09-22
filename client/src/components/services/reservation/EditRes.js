import React,{useState,useEffect}  from 'react'
import {useDispatch,useSelector} from "react-redux"
import {editReservation} from "../../../js/actions/reservation"
import {Link} from "react-router-dom"
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditRes({res}) {
  const notify = () => toast.warn("Votre réservation a été modifié!");
    
        
            const dispatch = useDispatch()
            const [show, setShow] = useState(false);
  
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);
const [titleCard, setTitleCard] = useState(res.titleCard)
const [dateRes, setDateRes] = useState(res.dateRes)
const [num, setNum] = useState(res.num)
const [total, setTotal] = useState(res.total)
const [reservation1, setReservation1] = useState(res)
console.log(reservation1)
const reservationReducer = useSelector(state => state.reservationReducer.reservation)
const edit = useSelector(state => state.editResReducer.edit)
useEffect(() => {
   setReservation1(reservationReducer)

}, [edit,reservationReducer]) 

 const handlechange=(e)=>{
    e.preventDefault();
    setReservation1({...reservation1,[e.target.name]:e.target.value})
} 
const Multi=(a,b)=>{
  return a*b;
}

return (
    <div>
    <Button bsPrefix="edit_btn"  onClick={handleShow}  > 
    
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="faEdit" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"></path></svg>
            </Button>
 
       <Modal  show={show} onHide={handleClose}
          size="lg">
         <Modal.Header closeButton>
         <Modal.Title>Editer la réservation</Modal.Title>
         </Modal.Header>
         <Modal.Body >
         <table>
         <tr><td style={{width:200, height:20, marginRight:20}}><label >Nom article:</label></td><td><input type="titlecard" name="titleCard" value={titleCard}  onChange={(e)=>setTitleCard(e.target.value)}></input></td></tr>
         <tr><td><label>Date de réservation</label></td><td><input type="dateRes" name="dateRes" value={dateRes}  onChange={(e)=>setDateRes(e.target.value)}></input></td></tr>
         <tr><td><label>Qte</label></td><td><input type="num" name="num" value={num} onChange={(e)=>{setNum(e.target.value); setTotal(Multi(e.target.value,res.total))}}></input></td></tr>
         <tr><td><label>Total</label></td><td><input type="total" name="total" value={total}  onChange={(e)=>setTotal(e.target.value)}></input></td></tr>
         </table>
         {console.log(typeof(num))}
         
         </Modal.Body>
         <Modal.Footer>
           
           <Link to="/basket">
           <Button style={{width:120,fontWeight:"bold", height:36,backgroundColor:"rgb(222 113 113)", padding:".375rem .75re",fontSize:"1rem",lineHeight:"1.5",borderRadius:".25rem", border:"none"}} onClick={()=> {dispatch(editReservation(res._id,{titleCard,dateRes,num,total}));handleClose();notify()}}>
             
          Modifier
           </Button>
           <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover></ToastContainer>
           </Link>



           
         </Modal.Footer>
       </Modal>
       </div>
   );


    
}

export default EditRes
