import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Background from "../assets/images/background.png";
import ArcadePlanetImg from "../assets/images/ArcadePlanet.png";
import Arcade from "../assets/images/ARCADE1.png";
import KittyBank from "../assets/images/KittyBank1.png";
import BankPlanetImg from "../assets/images/BankPlanet.png";

const Home = () => {
  return (
    <Container
      className="root"
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        background: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Row className="justify-content-center">
        <Col md="4" sm="12">
          <div className="row">
            <div className="col-lg-8 col-md-8 mx-auto">
                <img className="img-fluid" src={Arcade} alt="arcade" />
            </div>
          </div>
          <div className="planet-div">            
            <img
              className="zoom"
              style={{ cursor: "pointer" }}
              src={ArcadePlanetImg}
              alt="arcadeImg"
            />
          </div>
         </Col>
        <Col md="4" sm="12">
        <div className="row">
            <div className="col-lg-8 col-md-8 mx-auto">
            <img className="img-fluid" src={KittyBank} alt="arcade" />
            </div>
          </div>
          <div className="planet-div">            
            <Link to="/1">
            <img className="zoom" src={BankPlanetImg} />
            </Link>
          </div>
        </Col>
        {/* <Col md="4" sm="12">
          <div className="planet-div">
            <img style={{ width: "200px" }} src={KittyBank} alt="arcade" />
            <Link to="/1">
            <img className="zoom" src={BankPlanetImg} />
            </Link>
          </div>
        </Col> */}
      </Row>
        
    </Container>
  );
};

export default Home;
