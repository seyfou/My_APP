import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import AvisHome from "./AvisHome";
import Footer from "./Footer"
function Home() {
  return (
    <div className="home">
      <img
        className="ImHome"
        src="https://www.hdcarwallpapers.com/walls/range_rover_sentinel_2019_4k-HD.jpg"
      />

      <div class="text-on-image">
        <h1
          style={{
            fontFamily: "Dancing Script ,cursive",
            fontSize: "71px",
            marginBottom: "100px",
            marginLeft:"-50px",
            color: "yellow",
            textShadow: "1px 1px 1px #333",
          }}
        > Welcome
          {" "}
          
          
        </h1>
      </div>
      
      <div className="section2">
        <div className="div-services">
          <div>
            <span className="ser"> Services </span>{" "}
          </div>
          <div>
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-car-car-service-kiranshastry-gradient-kiranshastry.png"/>
          </div>
          
          <div
            style={{
              width: 300,
              height: 100,
              marginTop: 30,
              textAlign: "center",
              paddingLeft: 90,
            }}
          >
            <span
              style={{
                color: "whitesmoke",
                fontFamily: "Arial,Helvetica,sans-serif",
                fontSize: "20px",
                letterSpacing: "0.33em",
                paddingRight: 5,
                textAlign: "center",
              }}
            >
              Transformez vos rêves en réalité
            </span>
          </div>
          <div className="decouvrir">
            <Link to="/services">
              <p className="pp"> Découvrir </p>
            </Link>
          </div>
        </div>
        <div style={{ marginLeft: 2, marginTop: 60 }}>
          <img
            style={{ width: 823, height: 530 }}
            src="https://cdn.openpr.com/T/7/T707192034_g.jpg"
          ></img>
        </div>
      </div>
<div   className="section5"
        style={{ widht: 800, height: 500, marginTop: -36 }}
      >
<AvisHome/>
</div>
            <div className="section4" style={{marginTop:-150}}>
        <div style={{ width: 910, paddingTop: 60 }}>
          {" "}
          
          <img
            style={{ width: 853, height: 530, marginLeft: 56 }}
            src="https://th.bing.com/th/id/R.6f842db9c447614b07eee6672a3dd679?rik=CZzqu3fXlTcMwg&riu=http%3a%2f%2f5b0988e595225.cdn.sohucs.com%2fimages%2f20171221%2f2c138e2010e7450f8e30a07c3c017606.jpeg&ehk=e5FVZZ3vgMTJLWLo11aQ7p4Y9GhDbc%2fkZpgTUFuvvts%3d&risl=&pid=ImgRaw&r=0"
          ></img>
        </div>

        <div className="div-galerie">
          <div>
            <span className="ser"> Galerie </span>{" "}
          </div>
          <div>
          <img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-car-car-service-kiranshastry-gradient-kiranshastry.png"/>
          </div>
          <div
            style={{
              width: 300,
              height: 100,
              marginTop: 30,
              textAlign: "center",
              paddingLeft: 90,
            }}
          >
            
          </div>
          <div className="decouvrir">
            <Link to="/gallery">
              <p className="pp"> Découvrir </p>
            </Link>
          </div>
        </div>
      </div>
      <Footer/> 
    </div>

  );
}

export default Home;
