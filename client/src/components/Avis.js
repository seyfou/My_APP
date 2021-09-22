import React, { useEffect,useState } from "react";
import "./gallery.css";
import { useSelector, useDispatch } from "react-redux";

import { getAviss,postAvis,deleteAvis } from "../js/actions/avis";
import Footer from "./Footer"
import {Link} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Avis() {
  const notify = () => toast.warn("Votre avis nous intéresse, Merci!");
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user)

  const aviss = useSelector((state) => state.avisReducer.aviss);


  // const weekday=["Sunday","Monday","Thuesday","Wednesday","Thursday","Friday","Saturday"]
  // let day=new Date().getDay()
    let dt=new Date().toLocaleDateString();
    // let time=new Date().toLocaleTimeString();

  const [visitName, setvisitName] = useState(user?user.name:"")
  const [visitAvis, setvisitAvis] = useState("")
  const [visitEmail, setvisitEmail] = useState("")
  const [visitDate, setvisitDate] = useState(  `${dt}`)
  const [visitImg, setvisitImg] = useState(user?user.imageUrl:"https://i.imgur.com/yTFUilP.jpg")

  useEffect(() => {
    dispatch(getAviss());
  }, []);

  return (
    <div
      style={{
        marginTop: 20,
        marginBottom: 50,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="container2" style={{ marginBottom: 50 }}>
        <div className="carousel">
          <div className="carousel__face">
            <span className="spann" style={{ marginTop: 103, fontSize: 9 }}>
             
            </span>
          </div>
          <div className="carousel__face">
            <span className="spann" style={{ marginTop: 103, fontSize: 9 }}>
         
            <br />
              
            </span>
          </div>
          <div className="carousel__face">
            <span className="spann" style={{ marginTop: 103, fontSize: 9 }}>
              {" "}
        
             
              {" "}
            
            </span>
          </div>
          <div className="carousel__face">
            <span className="spann" style={{ marginTop: 103, fontSize: 9 }}>
             <br/>
            
         
            </span>
          </div>
          <div className="carousel__face">
            <span className="spann" style={{ marginTop: 103, fontSize: 9 }}>
            
              <br />
           
            </span>
          </div>
          <div className="carousel__face">
            <span className="spann" style={{ marginTop: 103, fontSize: 9 }}>
             
            </span>
          </div>
          <div className="carousel__face">
            <span className="spann" style={{ marginTop: 103, fontSize: 9 }}>
            
            </span>
          </div>
          <div className="carousel__face">
            <span className="spann" style={{ marginTop: 103, fontSize: 9 }}>
         
            </span>
          </div>
          <div className="carousel__face">
            <span className="spann" style={{ marginTop: 103, fontSize: 9 }}>
            
            </span>
          </div>
        </div>
      </div>

      {/* Main Body */}
      <section style={{ marginTop: 400, width: 1280, marginLeft: 58, }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-md-6 col-12 pb-4" style={{width:200,marginLeft:16}}>
              <h1 className="h11" style={{  width:138}}>
               Avis
              </h1>

            { aviss.map(el=><div className="comment mt-4 text-justify float-left" style={{width:639,height:150, marginRight:20,backgroundColor:"rgb(0, 80, 80)", border:"none"}}>
                {" "}
                <div style={{display:"flex", flexWrap:"wrap", marginTop:20}}>
                <img
                  src={el.visitImg}
                  alt=""
                  className="rounded-circle"
                  width={40}
                  height={40}
                />
                <h4 className="h44" style={{marginLeft:20, width: 120,color:"#eae2e2",fontSize:"9"}}>{el.visitName}</h4>{" "}
                <span style={{marginLeft:232}}>{visitDate} </span>
             {(user && user.isAdmin)?<button style={{backgroundColor:"white",marginTop:-5, marginLeft:16,width:20,height:30}} onClick={()=>{dispatch(deleteAvis(el._id)); dispatch(getAviss())}}><svg style={{marginTop:-20,marginLeft:-8}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>:null}
<div ></div>
                <p style={{width:569, marginTop:20 ,color:"rgb(230 228 228)"}} >
                  {el.visitAvis}
                </p>
 
                </div>
              
              </div>) }
              
             
             
            </div>

            {/* Post comment */} 
            <div className="col-lg-4 col-md-5 col-sm-4 offset-md-1 offset-sm-1 col-12 mt-4" style={{backgroundColor:"rgb(0, 80, 80)", border:"none"}}>
        
              <form className="form2" id="algin-form" style={{backgroundColor:"rgb(0, 80, 80)", border:"none"}}>
                <div className="form-group">
                  <h4 className="h11">Laissez votre avis</h4>{" "}
                  <label className="label2" htmlFor="message">
                    Message
                  </label>{" "}
                  <textarea
                    name="msg"
                    id
                    msg
                    cols={30}
                    rows={5}
                    className="form-control"
                    style={{ backgroundColor: "black" }}
                    defaultValue={""}
                    onChange={(e)=>setvisitAvis(e.target.value)}
                    style={{backgroundColor:"rgb(255 255 255)", border:"none"}}
                  />
                </div>
                <div className="form2-group">
                  {" "}
                  <label className="label2" htmlFor="name">
                    Nom
                  </label>{" "}
                  <input
                    type="text"
                    name="name"
                    id="fullname"
                    className="form-control"
                  onChange={!user?(e)=>setvisitName(e.target.value):null}
                  style={{backgroundColor:"rgb(255 255 255)", border:"none"}}
                  />{" "}
                </div>
                <div className="form2-group">
                  {" "}
                  <label className="label2" htmlFor="email">
                    Email
                  </label>{" "}
                  <input
                    type="text"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={(e)=>setvisitEmail(e.target.value)}
                    style={{backgroundColor:"rgb(255 255 255)", border:"none"}}
                  />{" "}
                </div>
                <div className="form2-group">
                 
                </div>
            
                <div className="form2-group">
               
               {user? 
               <button style={{backgroundColor:"#b7a2a2",border:"none", color:"white"}} type="button" id="post" className="btn" onClick={()=>{dispatch(postAvis({visitName,visitAvis,visitEmail,visitImg,visitDate})); dispatch(getAviss());notify()}}>
              
                    Ajouter avis
                    <ToastContainer position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover></ToastContainer>
                  </button>:
                  <Link to="/signIn"><button style={{backgroundColor:"#b7a2a2",border:"none", color:"white"}} type="button" id="post" className="btn" >
              
              Ajouter avis
            </button></Link>}
                </div>
                <div>
                <h5>vous devez vous connecter avant d'ajouter votre avis</h5></div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default Avis;
