import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Box, Slide } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Img from "gatsby-image"

export const query = graphql`
query ($slug: String!) {
    contentfulTravelBlog(slug: {eq: $slug}) {
      city
      coverImages {
        fluid(maxHeight: 1200){
            ...GatsbyContentfulFluid
        }
      }
      description {
        json
      }
    }
  }
`

const useStyles = makeStyles({
    title: {
        fontFamily: "myfont",
        fontWeight: "300",
        fontSize: "45px",
        letterSpacing: "0.2px",
        textTransform: "capitalize"
    },
    subtitle: {
        fontWeight: "200",
        fontFamily: "myfont",
        fontSize: "32px",
        letterSpacing: "0.2px",
        opacity: 0.4
    },
    img:{
        height : "100%",
        width : "100%"
    }
})

function BlogDetailPage({data : {contentfulTravelBlog}}) {
    console.log("data",contentfulTravelBlog)
    const classes = useStyles()
    return (
        <Layout>
            <SEO title="blog detail page" />
            <Box m={5}>
                <Slide direction="left" in={true} timeout={400} mountOnEnter unmountOnExit>
                    <Box p={10} className={classes.container} textAlign="left">
                        <h4 className={classes.title}>{contentfulTravelBlog.city}</h4>
                        <h4 className={classes.subtitle}>{documentToReactComponents(contentfulTravelBlog.description.json)}</h4>
                    </Box>
                </Slide>
            </Box>
                <Img className={classes.img} fluid={contentfulTravelBlog.coverImages.fluid}/>
        </Layout>
    )
}
export default BlogDetailPage
