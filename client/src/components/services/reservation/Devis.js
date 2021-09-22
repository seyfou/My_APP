import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./devis.css";
import { getReservations } from "../../../js/actions/reservation";
import { Link } from "react-router-dom";

import swal from 'sweetalert'


function Devis() {
  const dispatch = useDispatch();
  const reservations = useSelector(
    (state) => state.reservationReducer.reservations
  );
  useEffect(() => {
    dispatch(getReservations());
  }, []);
  const user = useSelector((state) => state.userReducer.user);
  const sum=(TabRes)=>{

    let s=0;
   for (let i = 0; i < TabRes.length; i++) {
   
    
     s= TabRes[i].total+s
     console.log(TabRes[i].total)
     
   }
   return s
  }
  return (
    <div className="bodyD" >
      <div className="cardD">
        <div className="cardD-top border-bottom text-center"> </div>
        <div className="cardD-body">
          <div className="rowD" style={{ width: 471 }}>
            <div className="colD-md-5">
              <div className="right border" style={{width:690, marginLeft:186}}>
                <div className="headerD">Devis</div>
                {reservations!==[] ?reservations.filter(el=>el.userName==user.name).map(el=>           
                <div
                  className="rowD item"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-around",
                  }}
                >
                  <div className="col-4 align-self-center">
                    <img
                      style={{ width: 83, height: 60 }}
                      className="img-fluid"
                      src={el.imgCard}
                    />
                  </div>
                  <div className="col-8">
                    <div className="rowD">
                      <b>{el.total} Dt</b>
                    </div>
                    <div className="rowD text-muted">
                      {el.titleCard}
                    </div>
                  </div>
                </div>):null}
                <hr />
                <div
                  className="rowD lower"
                  style={{ display: "flex", flexWrap: "no-wrap" ,marginLeft:76 }}>
                  <div>Total partiel</div>
                  <div style={{ marginLeft: 287 }}>{sum(reservations.filter(el=>el.userName==user.name))} Dt</div>
                </div>

                <div
                  className="rowD lower"
                  style={{ display: "flex", flexWrap: "no-wrap" ,marginLeft:76}}>
                  <div>Honoraire</div>
                  <div style={{ marginLeft: 318 }}> 2 %</div>
                </div>
             
                
                <div
                  className="rowD lower"
                  style={{ display: "flex", flexWrap: "no-wrap" ,marginLeft:76}}
                >
                  <div>
                    <b>Total</b>
                  </div>
                  <div style={{ marginLeft: 324}}>
                    <b>{(sum(reservations.filter(el=>el.userName==user.name))*0.02)+sum(reservations.filter(el=>el.userName==user.name))} Dt</b>
                  </div>
                </div>
                <div
                  className="rowD lower"
                  style={{ display: "flex", flexWrap: "no-wrap",marginLeft: 76 }}
                >
                  <div className="colD text-left">
                  
                  </div>
                </div>{" "}
                <Link to="/"><button style={{backgroundColor:"rgb((75 171 27)",border:"none",color:"white"}} className="btnD" onClick={()=>swal({
  title: "Génial!",
  text: "Votre réservation est validée!",
  icon: "success",
  button: "D'accord!",
})}>Confirmer</button></Link>
              </div>
             
            </div>
          </div>
        </div>
        <div> </div>
      </div>
  
    </div>
  );
}

export default Devis;
