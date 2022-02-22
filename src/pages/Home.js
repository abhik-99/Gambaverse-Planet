
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import {
  Container,
  Grid,
  Box
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRecoilState, useRecoilValue } from "recoil";
import { ethers } from "ethers";

import Background from "../assets/images/background.png";
import ArcadePlanetImg from "../assets/images/ArcadePlanet.png";
import Arcade from "../assets/images/ARCADE1.png";
import KittyBank from "../assets/images/KittyBank1.png";
import BankPlanetImg from "../assets/images/BankPlanet.png";
import Bifrost from "../assets/images/Bifrost.png";
import BifrostPlanetImg from "../assets/images/BifrostPlanet.png";
import HomeCard from "../ui/HomeCard";
import { accountAtom, containsTokenAtom, metamaskPresentAtom, v1DetailsAtom } from "../store/auth";
import NoTokensFoundDialog from "../modals/NoTokensFoundDialog";



const Home = () => {
  const theme = useTheme();
  const v1Details = useRecoilValue(v1DetailsAtom);
  const [account, setAccount] = useRecoilState(accountAtom);
  const [metamaskPresent, setMetamaskPresent] = useRecoilState(metamaskPresentAtom);
  const [ , setContainsToken ] = useRecoilState(containsTokenAtom);
  const [open, setOpen] = useState(false);


  const handleArcadeClick = async () => {
    console.log("Hey")
    if(metamaskPresent) {

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      if(account) {
        const contract = new ethers.Contract(v1Details.contract_address, v1Details.contract_abi, provider);
        const balance = await contract.balanceOf(account);
        if(parseInt(balance.toString()) > 0) {
          setContainsToken(true);
        } else {
          setOpen(true);
        }

      } else {
        // setAccounts()
        const signer = provider.getSigner();
        setAccount(await signer.getAddress());

      }

    } else {
      setMetamaskPresent((prev) => false)
    }
  }
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
            <HomeCard>
              <Box sx={{mt: 1}}>
                <img src={KittyBank} alt="arcade" height={theme.spacing(15)} width={theme.spacing(30)}/>
              </Box>
              <Box>
                <img title="Holders Only" src={BankPlanetImg} alt="Bank" height={theme.spacing(45)} width={theme.spacing(40)}/>
              </Box>
            </HomeCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} align="center">
            <HomeCard onClick={handleArcadeClick}>
              <Box>
                <img src={Arcade} alt="arcade" height={theme.spacing(15)} width={theme.spacing(30)}/>
              </Box>
              <Box>
                <img title="Holders Only" src={ArcadePlanetImg} alt="Arcade" height={theme.spacing(45)} width={theme.spacing(40)} />
              </Box>
            </HomeCard>
          </Grid>
          <Grid item xs={12} sm={6} md={4} align="center">
            <HomeCard>
              <Box>
                <img src={Bifrost} alt="arcade" height={theme.spacing(15)} width={theme.spacing(30)}/>
              </Box>
              <Box>
                <img title="Holders Only" src={BifrostPlanetImg} alt="Bifrost" height={theme.spacing(45)} width={theme.spacing(40)} />
              </Box>
            </HomeCard>
          </Grid>
        </Grid>

      </Container>
      <NoTokensFoundDialog open={open} onClose={() => setOpen(false)} />
    </div>
  )
};


export default Home;
