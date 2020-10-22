import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Box, createStyles, makeStyles,Slide} from "@material-ui/core"
import { Cards } from "../components/cards"

const useStyles = makeStyles(()=>createStyles({
    title:{
      fontFamily : "myfont",
      fontWeight : "300",
      fontSize : "45px",
      letterSpacing : "0.2px",
    },
    subtitle :{
      fontWeight : "300",
      fontFamily : "myfont",
      fontSize : "40px",
      letterSpacing : "0.2px",
      opacity : 0.3
    },
    container:{
      padding : "80px"
    }
}))

const IndexPage = () =>{
  const classes= useStyles()
  return (
  <Layout>
    <SEO title="Home" />
    <Box display="flex" justifyContent="center" maxWidth="1200px">
      <Slide direction="left" in={true} timeout = {400} mountOnEnter unmountOnExit>
      <Box className={classes.container} textAlign="left">
        <h4 className={classes.title}>I'm going on an adventure!</h4>
        <h4 className={classes.subtitle}>Find essential information for your next journey</h4>
      </Box>
      </Slide>
    </Box>
    <Cards/>
  </Layout>
)
}
export default IndexPage;
