import React , {useState, useEffect} from 'react'
import './userProfile.css'
import {useSelector,useDispatch} from 'react-redux'
import {editUser} from "../../js/actions/user"
import Footer from '../Footer'
import EditProfile from "./EditProfile"

import ReactLoading from "react-loading";


function UserProfile() {
const user = useSelector(state => state.userReducer.user)
const dispatch = useDispatch()


    return (  
       <div style={{marginTop:150} }>
     
            <div className="row" style={{width:1148,marginLeft:48}} > 
              <div className="col-md-12">
                <ol className="breadcrumb">
                  <h6  style={{fontWeight:'bolder', fontSize:24}}>Informations personnelles</h6>
                </ol>
              </div>
            </div>
            {user? <div className="container" style={{marginTop:110}} >
                 
          <div className="main-body" style={{margin:20}}>
    
           {/* /Breadcrumb */}
            <div className="row gutters-sm">
              <div className="col-md-4 mb-3" style={{marginTop:20}}>
                <div className="card" style={{marginLeft:-100, marginTop:-120, width:400, height:350}}>
                  <div className="card-body">
                    <div className="d-flex flex-column align-items-center text-center" >
                      <img src={user.imageUrl} alt="Admin" class="rounded-circle p-1 bg-light" width="120" height="130"  />
                      <div className="mt-3">
                        <h4>{user.name} {user.lastName}</h4>
                        <p className="text-secondary mb-1">Full Stack Developer</p>
                        <p className="text-muted font-size-sm"></p>
                      
                        {/* <button className="btn btn-primary">Changer votre photo</button> */}
                       
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>

              <div className="col-md-8">
                <div className="card mb-3" style={{marginLeft:-10, marginTop:-100, width:665}}>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{color:"blue"}}>Prénom</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                      <input type="text" class="form-control" type="name" name="name" value={user.name} />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{color:"blue"}}>Nom</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value={user.lastName} />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{color:"blue"}}>Email</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value={user.email}  />
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0" style={{color:"blue"}}>Téléphone</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                      <input type="text" class="form-control" value={user.phone} />
                      </div>
                    </div>
                    <hr />
                   {/*  <div className="row">
                      <div className="col-sm-3">
                        <h6 className="mb-0">Address</h6>
                      </div>
                      <div className="col-sm-9 text-secondary">
                        Bay Area, San Francisco, CA
                      </div>
                    </div>
                    <hr /> */}
                    <div className="row">
                      <div className="col-sm-12">
{/* <button variant="primary" onClick={()=> {dispatch(editUser(user._id,{name,lastName,email,password,imageUrl,isAdmin,phone})); alert("Votre profile est modifié")}}> Enregistrer </button> */}
                       <EditProfile user={user}/> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>:<h2 style={{marginTop:150,marginLeft:600}}>  <ReactLoading type={"spokes"} color={"blue"} height={50} width={50} /> </h2> }


        {/*Reservation List */}

          <Footer/>
        </div>
   
    )
}

export default UserProfile



  