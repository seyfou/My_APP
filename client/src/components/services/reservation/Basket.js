import React,{useState,useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {getReservations} from "../../../js/actions/reservation"
import './basket.css'
import {deleteReservation} from "../../../js/actions/reservation"
import {Link} from "react-router-dom"
import EditRes from "./EditRes"
import Footer from "../../Footer"
import swal from 'sweetalert'


function Basket(props) {
 const dispatch = useDispatch()
  const reservations = useSelector(state => state.reservationReducer.reservations)
  useEffect(()=>{
    dispatch(getReservations())},[]
)
const user = useSelector(state => state.userReducer.user)

const sum=(TabRes)=>{

  let s=0;
 for (let i = 0; i < TabRes.length; i++) {
 
  
   s= TabRes[i].total+s
   console.log(TabRes[i].total)
   
 }
 return s
}
    return (
        
             <div style={{marginTop:180}}> 
        <link rel="stylesheet" type="text/css" href="//netdna.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" />
        <div className="container bootstrap snippets bootdey">
          <div className="col-md-9 col-sm-8 content" style={{marginLeft:48,marginTop:-55}}>
            <div className="row" style={{width:1000,marginLeft:20}} >
              <div className="col-md-12">
                <ol className="breadcrumb">
                  <h6  style={{fontWeight:'bolder', fontSize:24}}>Réservations</h6>
                </ol>
              </div>
            </div>
            <div className="row" style={{width:1000,marginLeft:20}}>
              <div className="col-md-12">
                <div className="panel panel-info panel-shadow">
                  <div className="panel-heading" style={{marginLeft:-620}}>
                    <h3>
                      {user?<div><img  class="rounded-circle p-1 bg-light" width="100" height="90" src={user.imageUrl} />
                      {user.name} {user.lastName}</div>:<h1>loading</h1>}
                    </h3>
                  </div>
                  <div className="panel-body" style={{marginLeft:20}}> 
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Produit</th>
                            <th>Description</th>
                            <th>Qte</th>
                           
                            <th>Prix</th>
                            <th></th>
                          
                          </tr>
                        </thead>  
      
                        <tbody>
{reservations.filter(el=>el.userName==user.name)!==[] ?reservations.filter(el=>el.userName==user.name).map(el=>                        <tr>
                            <td style={{width:205, height:70,marginRight:20}}><img src={el.imgCard} className="img-cart"  /></td>
                            <td style={{width:379}}><strong>{el.titleCard}</strong><p>{el.dateRes}</p></td>
                            <td>
                              <form className="form-inline"  style={{width:51}}>
                                <span> {el.num}</span>
                                {/* <input className="form-control" style={{width:61, height:43,marginLeft:-4}} type="text" defaultValue={el.num} maxLength="6" /> */}
                              </form>
                            </td>
                            <td style={{width:204}} >{el.total}Dt</td>
                            <td style={{display:"flex", width:197, height:69, marginLeft:10, border:"none"}}>
                            <EditRes res={el}/>
                <button    style={{marginLeft:5}} bsPrefix="delete_btn" onClick={()=>
                swal({
                  title: "Vous êtes sûr?",
                  text: "Une fois supprimé, vous ne pourrez pas la récupérer",
                  icon: "warning",
                  buttons: true,
                  dangerMode: true,
                })
                .then((willDelete) => {
                  if (willDelete) {
                    dispatch(deleteReservation(el._id))
                    swal("Poof! Votre réservation a été supprimée !", {
                      icon: "success",
                   
                    });
                  } else {
                    swal("La suppression est annulée!");
                  }
                })}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="faTrash" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg></button>
                </td>
                     
                          </tr>):<tr><td>pas de commande</td></tr>}
                          
                      
          
                          <tr>
                            <td colSpan={4} className="text-right"><strong>Total</strong></td>
                            <td>{sum(reservations.filter(el=>el.userName==user.name))}</td>

                        
                          </tr>
                
  </tbody>
                      </table>
                      <span style={{display:"flex", marginLeft:683, marginBottom:20}}>
                     <Link to='/Activités' style={{width:120,fontWeight:"bold", height:49,backgroundColor:"rgb(0 196 255)", padding:".375rem .75re",fontSize:"1rem",lineHeight:"1.5",borderRadius:".25rem", border:"none", color:"white"}}>Poursuivre les achats<span className="glyphicon glyphicon-chevron-right" /></Link> 
    <Link to="/devisFinal" style={{width:120,fontWeight:"bold", height:49,marginLeft:11,backgroundColor:"rgb(75 171 27)",color:"white", padding:".375rem .75re",fontSize:"1rem",lineHeight:"1.5",borderRadius:".25rem", border:"none"}}>Confirmer<span className="glyphicon glyphicon-chevron-right" /></Link>
    </span>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
        <Footer/> 
      </div>
    
    )
}

export default Basket
