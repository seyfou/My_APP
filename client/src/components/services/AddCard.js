import React from 'react'
import {useEffect,useState} from 'react'

import { useSelector,useDispatch } from 'react-redux'
import { postCard} from '../../js/actions/card'
import {Link} from 'react-router-dom'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios"
import { cardReducer } from '../../js/reducers/card'

function AddCard() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()


  const [card, setCard] = useState({titleCard:"",agentName:"",cardImg:"",details:[],category:[],prix:0})
  const userReducer = useSelector(state => state.cardReducer.card)
 
  useEffect(() => {
    setCard({titleCard:"",agentName:"",cardImg:"",details:[],category:[],prix:0})
  
  }, [cardReducer]) 
  
  const handlechange=(e)=>{
      e.preventDefault();
      setCard({...card,[e.target.name]:e.target.value})
  }
  
  const user = useSelector(state => state.userReducer.user)
  const [cardImg, setCardImg] = useState(false)
  const [loading, setLoading] = useState(false)
  
  

  const styleUpload = {
      display: cardImg ? "block" : "none"
  }

  const handleUpload = async e =>{
      e.preventDefault()
      try {
         
          const file = e.target.files[0]
          if(!file) return alert("File not exist.")
          
          if(file.size > 1024 * 1024) // 1mb
              return alert("Size too large!")

          if(file.type !== 'image/jpeg' && file.type !== 'image/png') // 1mb
              return alert("File format is incorrect.")

          let formData = new FormData()
          formData.append('file', file)
          setLoading(true)
          const res = await axios.post('/upload', formData, {
              headers: {'content-type': 'multipart/form-data'}
          })

          setLoading(false)
          setCardImg(res.data)   
                
         }
          

       catch (err) {
          alert(err.response.data.msg)
      }
  }

  const handleDestroy = async () => {
      try {
        
          setLoading(true)
          await axios.post('/destroy', {public_id: cardImg.public_id})
          setLoading(false)
          setCardImg(false)
      } catch (err) {
          alert(err.response.data.msg)
      }
  }

  
return (
    <div>
       {(user && user.isAdmin)?
    <Button bsPrefix="add_btn"  onClick={handleShow}  > 
    
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
</svg>
            </Button> :null}
 
       <Modal  show={show} onHide={handleClose}
          size="lg">
         <Modal.Header closeButton>
         <Modal.Title>Ajouter carte</Modal.Title>
         </Modal.Header>
         <Modal.Body >

               
         <table>
         <tr><td style={{width:200, height:20, marginRight:20}}><label >Nom de la carte:</label></td><td><select name="titleCard"  value={card.titleCard} onChange={handlechange} >
         <option selected>Vente des nouveaux voiture</option>
           <option>Vente des voitures occasion</option>
           <option>Pièces de rechange</option>
           <option>Service de réparation</option>
           <option>vidange des voitures</option>
           <option>Lavage des voitures</option>
            <option>Diagnostique des voitures</option>
             

           </select></td></tr>
        
         <tr><td><label>image</label></td><td> <input type="file" name="file" id="file_up" onChange={handleUpload} />
                <div id="file_img" style={styleUpload}>
                        <img style={{width:300,height:300}} src={cardImg ? cardImg.url : ''} alt=""/>
                      
                    </div>
                    {console.log(cardImg.url)}
                      
                     </td></tr>
                     <tr><td><label>Nom de l'agent</label></td><td><input type="text" name="agentName" value={card.agentName} onChange={handlechange} ></input></td></tr>
         <tr><td><label>Detailles</label></td><td><input type="text" name="details" value={card.details} onChange={handlechange} ></input></td></tr>
         <tr><td><label>Catégorie</label></td><td><input type="text" name="category" value={card.category} onChange={handlechange} ></input></td></tr>
         <tr><td><label>Prix</label></td><td><input type="text" name="prix" value={card.prix} onChange={handlechange}  ></input></td></tr>
         </table>
         
         </Modal.Body>
         <Modal.Footer>
           
           <Link to="/Activités">
           <Button  style={{width:120,fontWeight:"bold", height:36,backgroundColor:"rgb(222 113 113)", padding:".375rem .75re",fontSize:"1rem",lineHeight:"1.5",borderRadius:".25rem", border:"none"}} onClick={()=>{dispatch(postCard({...card,cardImg:cardImg.url}));handleClose()}}>
             
          Ajouter
           </Button>
           </Link>
         </Modal.Footer>
       </Modal>
       </div>
   );


    
}

export default AddCard
