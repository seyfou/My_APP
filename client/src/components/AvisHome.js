import React from 'react'
import './avisHome.css'
import {Link} from "react-router-dom"

function AvisHome() {
    return (
        <div style={{marginTop:"100px"}}>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Untitled</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <div className="testimonials-clean">
          <div className="container">
         
            <div className="row people">
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description">Travailler avec vous a été la meilleure décision que nous ayons jamais prise.</p>
                </div>
                <div className="author"><img className="rounded-circle" src="https://th.bing.com/th/id/R.957647a3f52fd1b1b70bae8457d6110d?rik=eJ2WmnCisL4xFA&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_508995.png&ehk=QABMi%2fccGxPdufybVIpAWXYaAAQTiBWzTESK94u7A9k%3d&risl=&pid=ImgRaw&r=0" />
                  <h5  className={{marginTop:20}}>... ....</h5>
                  <p className="title">... ....</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description">  je recommande à 100%!</p>
                </div>
                <div className="author"><img className="rounded-circle" src="https://th.bing.com/th/id/OIP.dJ7jq5pPEFtvOqSjT5TP6AAAAA?pid=ImgDet&w=343&h=343&rs=1" />
                  <h5 >... ...</h5>
                  <p className="title">... ....</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 item">
                <div className="box">
                  <p className="description"> Merci Gauss Cars pour votre service.</p>
                </div>
                <div className="author"><img className="rounded-circle" src="https://www.pngitem.com/pimgs/m/247-2472306_admin-anonymous-person-icon-hd-png-download.png" />
                  <h5 style={{marginTop:20}} >.... ....</h5>
                  <p className="title">.... .....</p>
                </div>
              </div>
           <Link to="/avis">  <button style={{backgroundColor:"rgb(0, 80, 80)",color:"white"}}>Voir Plus</button></Link> 
            </div>
          </div>
        </div>
      </div>
    )
}

export default AvisHome
