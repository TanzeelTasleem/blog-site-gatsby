import { Box, makeStyles } from "@material-ui/core"
import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import BackgroundImage from "gatsby-background-image"

const useStyles = makeStyles({
  scrollmenu: {
    overflow: "auto",
    display: "flex",
    whiteSpace: "nowrap",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  wrapper: {
    display: "inline-block",
    color: "white",
    textAlign: "center",
    padding: "14px",
    textDecoration: "none",
  },
  text: {
    fontSize: "20px",
    letterSpacing: "1.5px",
    paddingTop: "15px",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "myfont",
    color: "#ffffff",
  },
  subtitle: {
    fontSize: "17px",
    letterSpacing: "1.5px",
    fontWeight: "bold",
    textTransform: "uppercase",
    fontFamily: "myfont",
    color: "#ffffff",
  },
})

export const Cards = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allContentfulTravelBlog {
        edges {
          node {
            slug
            city
            country
            thumbnailImages {
              fluid(maxWidth: 360) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <Box>
      <Box
        mb={1}
        width="350px"
        textAlign="right"
        style={{ color: "black", opacity: "0.5", fontWeight: "lighter" }}
        className={classes.subtitle}
      >
        popular places
      </Box>
      <div className={classes.scrollmenu}>
        {data.allContentfulTravelBlog.edges.map(({ node }, index) => (
          <Link key={index} className={classes.wrapper} to={`/${node.slug}`}>
            <BackgroundImage
              style={{
                width: "360px",
                height: "560px",
                filter: `brightness(85%)`,
                backgroundRepeat: "no-repeat",
              }}
              Tag="section"
              fluid={node.thumbnailImages.fluid}
            >
              <Box
                height="100%"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
              >
                <p className={classes.text}>{node.country}</p>
                <Box>
                  <p className={classes.text}>{node.city}</p>
                  <p className={classes.subtitle}>historic hearts</p>
                </Box>
              </Box>
            </BackgroundImage>
          </Link>
        ))}
      </div>
    </Box>
  )
}
