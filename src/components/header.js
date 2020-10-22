import {
  AppBar,
  Box,
  makeStyles,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { Link } from "gatsby"
import React from "react"
import searchImage from "../images/search.png"

const useStyles = makeStyles({
  title: {
    fontFamily: "myfont",
    textTransform: "uppercase",
    fontWeight: "100",
    letterSpacing: "3px",
    paddingTop: "40px",
  },
  appbar: {
    boxShadow: "none",
    background: "white",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    width: "500px",
    color: "black",
    justifyContent: "space-between",
  },
  logo: {
    marginTop: "6px",
  },
})
const Header = () => {
  const classes = useStyles()
  return (
    <AppBar className={classes.appbar} position="static">
      <Toolbar>
        <Box className={classes.toolbar}>
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            <Typography className={classes.title} variant="subtitle1">
              citadela
            </Typography>
          </Link>
          <Box
            mt={3}
            display="flex"
            justifyContent="space-around"
            width="300px"
          >
            <img
              width="28px"
              alt="search icon"
              height="28px"
              className={classes.logo}
              src={searchImage}
            />
            <TextField placeholder="Where do you want to go..." />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
