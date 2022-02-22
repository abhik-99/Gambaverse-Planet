import {
  ButtonBase,
  Fade
} from "@mui/material";
const HomeCard = ({children, onClick}) => {
  return (
    <Fade in={true} timeout={1500}>
      <ButtonBase onClick={onClick} sx={{display: 'inline-block', borderRadius: 10, backdropFilter: 'blur(10px)', background: 'linear-gradient(to left, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))', boxShadow: '0 0 5px 10px rgba(255, 255, 255, 0.04)'}}>
        {children}
      </ButtonBase>
    </Fade>
  )
}

export default HomeCard