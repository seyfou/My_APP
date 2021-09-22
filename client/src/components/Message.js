import React, {useEffect,useState} from "react";
import "./message.css";
import {getContacts,deleteContact} from "../js/actions/contact"
import {useSelector,useDispatch} from "react-redux"

function Message() {
    
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contactReducer.contacts)
    const [search, setsearch] = useState("")
    useEffect(()=>{
        dispatch(getContacts())},[]
    )
  return (
    <div className="bodyMsg">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container">
        {/* Page header start */}
        <div className="page-title">
          <div className="row gutters" >
           
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12"> </div>
          </div>
        </div>
        {/* Page header end */}
        {/* Content wrapper start */}
        <div className="content-wrapper">
          {/* Row start */}
          <div className="row gutters" >
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{marginLeft:-25,marginTop:20}}>
              <div className="card m-0"  >
                {/* Row start */}
                <div className="row no-gutters">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3" style={{width:200}}>
                    <div className="users-container" style={{width:461}}>
                      <div className="chat-search-box">
                        <div className="input-group">
                          <input
                            className="form-control"
                            placeholder="Search"
                            onChange={(e)=>setsearch(e.target.value)}
                          />
                          <div className="input-group-btn">
                            <button type="button" className="btn btn-info">
                              <i className="fa fa-search" />
                            </button>
                          </div>
                        </div>
                      </div>
                    
                      <ul className="users">
                        
                      {/* {contacts.filter(el=>el.firstName.toLowerCase().includes(search.toLowerCase())).map(el=>
                        <li className="person" data-chat="person1">
                          <div className="user" >
                            <img 
                              src="https://www.bootdey.com/img/Content/avatar/avatar3.png"
                              alt="Retail Admin"
                              style={{width:"45", height:"45"}}
                            />
                            <span className="status busy" />
                          </div>
                          <p className="name-time">
                            <span className="name" style={{marginLeft:-4}}>{el.firstName} {el.lastName}</span>
                            <span className="time">{el.date}</span>
                            <button onClick={()=>{dispatch(deleteContact(el._id));dispatch(getContacts())}} style={{marginLeft:46,width:50,height:43,backgroundColor:"none",border:"none"}}><svg  style={{width:11,height:17}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
</svg></button>
                          </p>
                          <div style={{width:394, marginLeft:20,marginTop:5}}>
                             {el.message}
                         </div>
                        
                              <table style={{border:"1px solid", marginTop:10,width:394,textAlign:"left",marginLeft:20}}>
                              <tr>
                                <td style={{marginTop:5,fontSize:"bolder", color:"gray"}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
</svg></td><td>{el.email} </td>
                            </tr><tr>
                                  <td style={{marginTop:5}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg></td><td> {el.phoneNumber}</td>
                             </tr>
                            </table>
                       
                        </li>)} */}
                      </ul>
                    </div>
                  </div>
           
                </div>
                {/* Row end */}
              </div>
            </div>
          </div>
          {/* Row end */}
        </div>
        {/* Content wrapper end */}
      </div>
    </div>
  );
}

export default Message;
