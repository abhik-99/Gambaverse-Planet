
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Container,
  Grid,
  Box,
  ButtonBase,
  Fade
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Background from "../assets/images/background.png";
import ArcadePlanetImg from "../assets/images/ArcadePlanet.png";
import Arcade from "../assets/images/ARCADE1.png";
import KittyBank from "../assets/images/KittyBank1.png";
import BankPlanetImg from "../assets/images/BankPlanet.png";
import Bifrost from "../assets/images/Bifrost.png";
import BifrostPlanetImg from "../assets/images/BifrostPlanet.png";


const Home = () => {
  const theme = useTheme();
  console.log("In home component", window.ethereum);
  return (
    <div css={css`
    min-height: 100vh;
    min-width: 100vw;
    background: url(${Background});
    background-repeat: no-repeat;
    background-size: cover;
    `}>
      <Container sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', pt: { xs: 10, md: 20}}}>
        <Grid container spacing={2} justify="space-evenly">
          <Grid item xs={12} sm={6} md={4} align="center">
            <Fade in={true} timeout={1000}>
              <ButtonBase sx={{display: 'inline-block', borderRadius: 10}}>
                <Box>
                  <img src={KittyBank} alt="arcade" height={theme.spacing(15)} width={theme.spacing(30)}/>
                </Box>
                <Box>
                  <img title="Holders Only" src={BankPlanetImg} alt="Bank" height={theme.spacing(45)} width={theme.spacing(40)}/>
                </Box>
              </ButtonBase>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={4} align="center">
            <Fade in={true} timeout={1200}>
              <ButtonBase sx={{display: 'inline-block', borderRadius: 10}}>
                <Box>
                  <img src={Arcade} alt="arcade" height={theme.spacing(15)} width={theme.spacing(30)}/>
                </Box>
                <Box>
                  <img title="Holders Only" src={ArcadePlanetImg} alt="Arcade" height={theme.spacing(45)} width={theme.spacing(40)} />
                </Box>
              </ButtonBase>
            </Fade>
          </Grid>
          <Grid item xs={12} sm={6} md={4} align="center">
            <Fade in={true} timeout={1500}>
              <ButtonBase sx={{display: 'inline-block', borderRadius: 10}}>
                <Box>
                  <img src={Bifrost} alt="arcade" height={theme.spacing(15)} width={theme.spacing(30)}/>
                </Box>
                <Box>
                  <img title="Holders Only" src={BifrostPlanetImg} alt="Bifrost" height={theme.spacing(45)} width={theme.spacing(40)} />
                </Box>
              </ButtonBase>
            </Fade>
          </Grid>
        </Grid>

      </Container>
    </div>
  )
}

// const Home = () => {
//   return (
//     <Container
//       className="root"
//       style={{
//         minHeight: "100vh",
//         minWidth: "100vw",
//         background: `url(${Background})`,
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Row className="justify-content-center">
//         <Col md="4" sm="12">
//           <div className="row">
//             <div className="col-lg-8 col-md-8 mx-auto">
//                 <img className="planet-name" src={Arcade} alt="arcade" />
//             </div>
//           </div>
//           <div className="planet-div">
//             <img
//               className="zoom"
//               data-bs-toggle="tooltip" data-bs-placement="right" title="Holders Only"
//               style={{ cursor: "pointer" }}
//               src={ArcadePlanetImg}
//               alt="arcadeImg"
//             />
//           </div>
//          </Col>
//         <Col md="4" sm="12">
//         <div className="row">
//             <div className="col-lg-8 col-md-8 mx-auto">
//             <img className="planet-name" src={KittyBank} alt="arcade" />
//             </div>
//           </div>
//           <div className="planet-div">
//             {/* <Link to="/1"> */}
//             <img className="zoom" src={BankPlanetImg} alt="kitty"/>
//             {/* </Link> */}
//           </div>
//         </Col>
//         <Col md="4" sm="12">
//         <div className="row">
//             <div className="col-lg-8 col-md-8 mx-auto">
//             <img className="planet-name" src={Bifrost}  alt="bifrost" />
//             </div>
//           </div>
//           <div className="planet-div">
//             <img className="zoom" src={BifrostPlanetImg} alt="bifrostplanet"/>
//           </div>
//         </Col>
//       </Row>

//     </Container>
//   );
// };

export default Home;
