import React,{useState}  from 'react'
import {useDispatch} from "react-redux"
import {editReservation,getReservations} from "../../js/actions/reservation"
// import {Link} from "react-router-dom"
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditResrFin({res}) {

    
        
            const dispatch = useDispatch()
            const [show, setShow] = useState(false);
  
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);



const [titleCard, setTitleCard] = useState(res.titleCard)
const [dateRes, setDateRes] = useState(res.dateRes)
const [num, setNum] = useState(res.num)
const [total, setTotal] = useState(res.total)
const [status, setStatus] = useState(res.status)


const Multi=(a,b)=>{
  return a*b;
}

return (
    <div>
   
 

            <button onClick={handleShow} class="btn btn-success btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-edit"></i></button>
       <Modal  show={show} onHide={handleClose}
          size="lg">
         <Modal.Header closeButton>
         <Modal.Title>Modifier la réservation</Modal.Title>
         </Modal.Header>
         <Modal.Body >
         <table>
         <tr><td style={{width:200, height:20, marginRight:20}}><label >Agent Name:</label></td><td><input type="agentName" name="titleCard" value={titleCard}  onChange={(e)=>setTitleCard(e.target.value)}></input></td></tr>
         <tr><td><label>Date de réservation</label></td><td><input type="dateRes" name="dateRes" value={dateRes}  onChange={(e)=>setDateRes(e.target.value)}></input></td></tr>
         <tr><td><label>Qte</label></td><td><input type="num" name="num" value={num} onChange={(e)=>{setNum(e.target.value); setTotal(Multi(e.target.value,res.total))}}></input></td></tr>
         <tr><td><label>Total</label></td><td><input type="total" name="total" value={total}  onChange={(e)=>setTotal(e.target.value)}></input></td></tr>
         <tr><td><label>Status</label></td><td><input type="status" name="status" value={status}  onChange={(e)=>setStatus(e.target.value)}></input></td></tr>
         </table>
         
         </Modal.Body>
         <Modal.Footer>
           
           
           <Button style={{width:120,fontWeight:"bold", height:60,color:"white", backgroundColor:"rgb(222 113 113)",padding:".375rem .75re",fontSize:"1rem",lineHeight:"1.5",borderRadius:".25rem", border:"none"}} onClick={()=> {dispatch(editReservation(res._id,{titleCard,dateRes,num,total,status}));dispatch(getReservations());handleClose()}}>
             
          Modifier
           </Button>
        
         </Modal.Footer>
       </Modal>
       </div>
   );


    
}

export default EditResrFin