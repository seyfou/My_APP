import React ,{useEffect,useState}from 'react'
import './adminTabs.css'
import {useSelector,useDispatch} from "react-redux"
import {getUsers} from "../../js/actions/user"
import ReactLoading from "react-loading";
import {deleteOneUser} from "../../js/actions/user"
import UserTab from './UserTab'
import EditResrFin from'./EditResrFin'
import {getReservations,deleteReservation} from '../../js/actions/reservation'
import Message from '../../components/Message'
function AdminTabs() {
  const dispatch = useDispatch()
  const users= useSelector(state => state.userReducer.users);
  const loaduser= useSelector(state => state.userReducer.loaduser);
  const reservations = useSelector(state => state.reservationReducer.reservations)
  const [search, setsearch] = useState("")

  useEffect(()=>{
    dispatch(getUsers());dispatch(getReservations())},[]
)

  return (
    <div>
        <div className="tabset" >
          {/* Tab 1 */}
          <input type="radio" name="tabset" id="tab1" aria-controls="marzen" defaultChecked  />
          <label htmlFor="tab1" style={{marginLeft:-465}}>Users</label>
          {/* Tab 2 */}
          <input type="radio" name="tabset" id="tab2" aria-controls="rauchbier" />
          <label htmlFor="tab2">Reservations</label>
          {/* Tab 3 */}
          <input type="radio" name="tabset" id="tab3" aria-controls="dunkles" />
          <label htmlFor="tab3">Messages</label>
         
          {/*Get users */}
          <div className="tab-panels" >
            <section id="marzen" className="tab-panel">
            <div className="col-md-12" >
            <ol className="breadcrumb" style={{width:777, marginLeft:-22, backgroundColor:"rgb(182 80 80)", color:"white"}}>
                  <h3  style={{fontWeight:'bolder', fontSize:16}}>Liste des utilisateurs </h3>
                </ol>
                </div>

                  <div className="container11" >
                    <UserTab />
  {/*                 {!users? <h2 style={{marginTop:150}}>  <ReactLoading type={"spokes"} color={"blue"} height={50} width={50} /> </h2> : users.map(el=> 
                      
                      
     
      <div className="card1">
        <img src={el.imageUrl} style={{height:110,width:120, borderRadius:50,marginTop:6}} alt="Person" className="card__image" />
        <p className="card__name1">{el.name} {el.lastName}</p>
        <div className="grid-container">
          <div className="grid-child-posts">
       <p> {el.email}</p>
          </div>
          <div className="grid-child-followers">
            
          </div>
        </div>
        <ul className="social-icons">
       <li> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
</svg></li>
<li>
  {el.phone}
</li>
       
          <li >
            <button style={{marginTop:-13,width:35,height:40}} onClick={()=>dispatch(deleteOneUser(el._id))}>
          <svg xmlns="http://www.w3.org/2000/svg" marginLeft="20" width="18" height="18" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg> </button>
          </li>
        </ul>
  
      </div>
               
                    )}  */}
                    </div>

               
        
             
            </section>

            {/*Get reservations */}
            <section id="rauchbier" className="tab-panel">
            <div className="col-md-12">
            <ol className="breadcrumb" style={{width:777, marginLeft:-22, backgroundColor:"rgb(182 80 80)", color:"white"}}>
                  <h3  style={{fontWeight:'bolder', fontSize:16}}>Liste des réservations </h3>
                </ol>
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
                
                <table className="table table-responsive table-borderless">
              <thead>
                <tr className="bg-light" style={{width:700}}>
                  <th scope="col" width="20%" >Prestataire</th>
                  <th scope="col" width="20%">Date</th>
                  <th scope="col" width="20%">Status</th>
                  <th scope="col" width="30%">Client(e)</th>
               
                  <th scope="col" width="2%">Total</th>
                  <th scope="col" ></th>
                  <th scope="col" ></th>


                </tr>
              </thead>
              <tbody>

                {reservations.filter(el=>el. userName.toLowerCase().includes(search.toLowerCase())).map(el=> <tr>

            <td>{el.titleCard}</td>
            <td>{el.dateRes}</td>
            <td><i className="fa fa-check-circle-o green" /><span className="ms-1">{el.status}</span></td>
            <td><img src={el.imageUrl} style={{marginRight:12}} width={25} height={25} ></img>{el.userName}</td>
            <td>{el.total}</td>
            <td><EditResrFin res={el}/> </td>
          <td><button class="btn btn-danger btn-sm rounded-0" type="button" data-toggle="tooltip" data-placement="top" title="Delete"  onClick={()=>{dispatch(deleteReservation(el._id));dispatch(getReservations())}}><i class="fa fa-trash"></i></button></td>
          </tr>)}





              </tbody>
            </table>
              </div>
            </section>

            {/*Get messages */}
            <section id="dunkles" className="tab-panel">
            <div className="col-md-12">
            <ol className="breadcrumb" style={{width:777, marginLeft:-20, backgroundColor:"rgb(182 80 80)", color:"white"}}>
                  <h3  style={{fontWeight:'bolder', fontSize:16}}>Liste des réservations </h3>
                </ol>
                <Message/>
              </div>
            </section>
          </div>
        </div>
       
      </div>
  )
}

export default AdminTabs