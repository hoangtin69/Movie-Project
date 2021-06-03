import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  film: {
    "&:hover $hoverThumbnail": {
      opacity: "1",
      visibility: "visible",
    },
  },
  detail__topBG: {
    filter: "blur(15px)",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    position: "absolute",
    zIndex: "1",
  },
  topBG__img: {
    width: "100%",
    height: "550px",
  },
  detail__bgGradient: {
    position: "absolute",
    top: "0",
    left: "0",
    background: "linear-gradient(to top, rgb(10, 32, 41), transparent 100%)",
    height: "150%",
    width: "100%",
    zIndex: "2",
  },
  detail__shiftCenter: {
    position: "absolute",
    zIndex: "4",
    top: "30%",
    left: "50%",
    margin: "auto",
    transform: "translateX(-50%)",
  },
  detail__filmImg: {
    position: "relative",
    borderRadius: "4px",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "block",
    marginBottom: "10px",
    height: "314px",
  },
  hoverThumbnail: {
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    borderRadius: "4px",
    // background: "linear-gradient(to top,#000,transparent 100%)",
    opacity: "0",
    visibility: "hidden",
    transition: "all 0.3s ",
  },
  buttonPlay: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: 3,
    border: "none",
    background: "transparent",
    width: "70px",
    height: "70px",
    "&:hover": {
      opacity: 0.7,
      background: "transparent",
    },
  },
  imgButtonPlay: {
    width: "100%",
  },
  colorWhite: {
    color: theme.palette.common.white,
  },
  detail__filmInfo: {
    width: "30%!important",
    position: "absolute",
    zIndex: "3",
    top: "10%",
  },
  detail__bticket: {
    borderRadius: "4px",
    color: theme.palette.common.white,
    fontSize: theme.typography.h3.fontSize,
    textDecoration: "none",
    textAlign: "center",
    padding: theme.spacing(0.9, 3),
    backgroundColor: theme.palette.primary.main,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.primary.bloodRed,
    },
  },
  progessBar: {
    width: "110px!important",
    height: "110px!important",
    color: theme.palette.primary.lightGreen,
  },
  speFont: {
    color: theme.palette.common.white,
    fontSize: "50px",
  },
  progressBarBg: {
    left: "5px",
    width: "110px!important",
    height: "110px!important",
    zIndex: "-1",
    backgroundColor: "rgba(0,0,0,.4)",
    borderRadius: "50%",
  },
  detail__flexColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));
