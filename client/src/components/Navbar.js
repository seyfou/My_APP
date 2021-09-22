import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { Switch, Route } from "react-router";
import { Link, useHistory } from "react-router-dom";
import Dashbord from "./admin/Dashbord";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../js/actions/user";

import { Dropdown, ButtonGroup, NavDropdown, Nav } from "react-bootstrap";

function Navbar() {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.userReducer.user);
  return (
    <div>
      <div className="navv">
        {/*  Meta  */}
        <meta charSet="UTF-8" />
        <title>Smooth navigation</title>
        {/*  Styles  */}
        <link rel="stylesheet" href="styles/index.processed.css" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <header className="main-header" style={{ left: -45 }}>
          <div className="container">
            <nav
              className="navbar navbar-expand-lg main-nav px-0"
              style={{
                width: 1350,
                height: 56,
                marginTop: -26,
                backgroundColor: "#FFE600",
              }}
            >
            
              <ul
                className="navbar-nav ml-auto text-uppercase f1"
                style={{ marginTop: -36, paddingLeft: 20 }}
              ><li>
                <img style={{marginTop:40,width:50}} src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-car-car-service-kiranshastry-gradient-kiranshastry.png"/>
              </li>
                
                <li className="name" style={{ marginTop:15, color: "Blue" }}>
                  {" "}
                  Gauss Cars
                </li>
                
                {user ? null:<li style={{ paddingTop: 65, paddingLeft: 8, color: "teal" }}>
                  {" "}
                  <Link to="/signIn" style={{ color: "#000000c4" }}>
                    Connexion
                  </Link>
                </li>}
              </ul>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mainMenu"
                aria-controls="mainMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar icon-bar-1" />
                <span className="icon-bar icon-bar-2" />
                <span className="icon-bar icon-bar-3" />
              </button>
              <div
                className="collapse navbar-collapse"
                id="mainMenu"
                style={{ paddingRight: 77 }}
              >
                <ul className="navbar-nav ml-auto text-uppercase f1">
                  <li style={{ marginTop: 20 }}>
                    <Link to="/">Accueil</Link>
                  </li>
                  <li style={{ marginTop: 20 }}>
                    <a href="/about2">A propos</a>
                  </li>
                  <li style={{ marginTop: 20 }}>
                    <Link to="/services">services</Link>
                  </li>
                  <li style={{ marginTop: 20 }}>
                    <a href="/gallery">gallerie</a>
                  </li>
             

                  <li style={{ marginTop: 20 }}>
                    <Link to="/contact">contact</Link>
                  </li>
                  <li style={{ marginTop: 20 }}>
                    <Link to="/avis">Avis</Link>
                  </li>
                  {user && user.isAdmin ? (
                    <li style={{ marginTop: 20 }}>
                      <Link to="/dashbord"> Tableau de bord</Link>
                    </li>
                  ) : null}

                  {user ? (
                    <li style={{ marginTop: 10 }}>
                      <Link to="/basket">
                        {" "}
                      
                        <i class="bi bi-cart-check"></i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
  <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
</svg>
                      </Link>
                    </li>
                  ) : null}
                  {user ? (
                    <li style={{ marginTop: 10 }}>
                      <Dropdown as={ButtonGroup}>
                       
                         
                        <Dropdown.Toggle
                          
                          variant="info"
                          id="dropdown-split-basic"
                          
                         
                        />
                         <img
                          style={{
                            backgroundSize: "32px 32px",
                            borderRadius: "50%",
                            height: "32px",
                            width: "32px",
                            
                          }}
                          src={user.imageUrl}
                          alt=""
                          aria-hidden="true"
                          data-noaft=""
                        />
                        {user.name}

                        <Dropdown.Menu >
                          <Dropdown.Item >
                            {" "}
                            <Link to="/userProfile"> <svg style={{marginRight:8}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16">
  <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
</svg>Mon compte</Link>
                          </Dropdown.Item>
                          <Dropdown.Item>
                            <button
                              onClick={() => {
                                dispatch(logout());
                                history.push("/");
                              }}
                            >
                              {" "}
                              <svg  style={{marginRight:8}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
</svg>    Déconnexion
                            </button>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </li>
                  ) : null}
                </ul>
              </div>
            </nav>
          </div>
          {/* /.container */}
        </header>
        {/*

    Wow! What do you want to build?

    You have so many possibilities right now... Looking for something to kick off?
    How about a simple folio page to show off everything you're going to make!
   
  */}
        {/* Bootstrap core JavaScript
    ================================================== */}
        {/* Placed at the end of the document so the pages load faster */}
        {/* Scripts */}
      </div>
    </div>
  );
}

export default Navbar;
