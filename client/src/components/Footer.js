import React from 'react'
import "./footer.css"
import {Link} from "react-router-dom"
function Footer() {
    return (
        
    
      <div style={{marginTop:150,height:100}}>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
      
        {/*footer starts from here*/}
        <footer className="footer">
          <div className="container bottom_border">
            <div className="row">
              <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Nos contacts</h5>
                {/*headin5_amrc*/}
                <p className="mb10">Kélibia, Nabeul, Tunisie</p>
   
                <p><i className="fa fa-phone" />  +216 26 825 447</p>
                <p><i className="fa fa fa-envelope" /> GaussCars@gmail.com</p>
              </div>
              <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Liens</h5>
                {/*headin5_amrc*/}
                <ul className="footer_ul_amrc">
                  <li><Link to="/">Accueil</Link></li>
                  <li><Link to="/about2">A propos</Link></li>
                  <li><Link to="/services">Services</Link></li>
                 
                 
                </ul>
                {/*footer_ul_amrc ends here*/}
              </div>
              <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Liens</h5>
                {/*headin5_amrc*/}
                <ul className="footer_ul_amrc">
                  <li> <Link to="/gallery">Gallerie</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                  <li><Link to="/avis">Avis</Link></li>
                
                
                </ul>
                {/*footer_ul_amrc ends here*/}
              </div>
              <div className=" col-sm-4 col-md  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Suivez-nous</h5>
                {/*headin5_amrc ends here*/}
                <ul className="footer_ul2_amrc">
                  <li><a href="#"> </a><a href="#">https://www.GaussCars.com/</a></li>
                  
                
                </ul>
                {/*footer_ul2_amrc ends here*/}
              </div>
            </div>
          </div>
          <div className="container">
           
            {/*foote_bottom_ul_amrc ends here*/}
            <p style={{marginTop:10}}className="text-center">Copyright @2021 | Designed With by <a href="#">Gauss Cars</a></p>
            <ul className="social_footer_ul">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="https://www.linkedin.com/in/seifeddine-kadhi/"><i className="fab fa-linkedin" /></a></li>
              <li><a href="#"><i className="fab fa-instagram" /></a></li>
            </ul>
            {/*social_footer_ul ends here*/}
          </div>
        </footer>
      </div>
    );
  }


export default Footer
