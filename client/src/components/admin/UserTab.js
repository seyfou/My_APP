import React, {useEffect} from 'react'
import './userTab.css'

import {useSelector,useDispatch} from "react-redux"
import {getUsers} from "../../js/actions/user"
import ReactLoading from "react-loading";
import {deleteOneUser} from "../../js/actions/user"



function UserTab() {
    const dispatch = useDispatch()
    const users= useSelector(state => state.userReducer.users);
    const loaduser= useSelector(state => state.userReducer.loaduser);
    const reservations = useSelector(state => state.reservationReducer.reservations)
     

  useEffect(()=>{
    dispatch(getUsers())},[]
)
  
    return (
   
        <div style={{display:"flex",flexWrap:"wrap",marginTop:-221,justifyContent:"space-around", backgroundColor:'white'}}  >
        
        {!users? <h2 style={{marginTop:150}}>  <ReactLoading type={"spokes"} color={"blue"} height={50} width={50} /> </h2> : users.map(el=> 
       
       
        
                      <div className="card2" style={{minWidth:219,maxWidth:300,minHeight:200,marginLeft:-30,marginBottom:10}}>
                        <div className="card2-body textcenter" style={{width:263, height:331}}> 
                          <p><img className=" img-fluid" src={el.imageUrl} alt="card image" /></p>
                          <h4 className="card2-title">{el.name} {el.lastName}</h4>
                     {el.isAdmin?     <h6>Admin</h6>:<h6>Client(e)</h6>}
                          <p className="card2-text" style={{marginTop:15, fontSize:14,color:"black"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg> {el.email}</p>
                          <p className="card2-text" style={{ fontSize:14,color:"black"}}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg> {el.phone}</p>
                    <button onClick={()=>dispatch(deleteOneUser(el._id))}      style={{marginTop:20,backgroundColor:"rgb(182 80 80)",border:"none",color:"white"}} className="btn btn-primary btn-sm"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button> 
                        </div>
                
                  
                  </div>
           
        )}
      </div>

    )
}

export default UserTab
