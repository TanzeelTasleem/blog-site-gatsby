exports.createPages = async ({graphql , actions})=>{
    const response = await graphql(`
    query MyQuery {
      allContentfulTravelBlog {
        edges {
          node {
            slug
          }
        }
      }
    }
    
    `)
     response.data.allContentfulTravelBlog.edges.forEach(edge => {
        actions.createPage({
            path : `/${edge.node.slug}`,
            component : require.resolve('./src/templates/blog-detail-page'),
            context : {
                slug : edge.node.slug
            }
        })     
     });
     
}