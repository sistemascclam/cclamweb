import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client"

export async function getNoticiasData(first) {
    const client = new ApolloClient({
        uri: process.env.graphuri,
        cache: new InMemoryCache()
    });
    const response = await client.query({ //cG9zdDo1MzY0 //5364
        query: gql`
          query getPagesOfNews {
              page(id: "cG9zdDo1MzY0", idType: ID) {
                id
                databaseId
                title
                uri
                children(first: ${first}, where: {orderby: {field: MENU_ORDER, order: DESC}}) {
                  edges {
                    node {
                      ... on Page {
                        uri
                        id
                        menuOrder
                        title
                        date
                        featuredImage {
                          node {
                            mediaItemUrl
                            mediaDetails {
                              height
                              width
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
        `});
    const page = response.data.page;
    return page;

}

export async function getPronunciamientosData(first) {
    const client = new ApolloClient({
        uri: process.env.graphuri,
        cache: new InMemoryCache()
    });
    /* 2 PARA PRUEBAS, PONER 4*/
    const response = await client.query({
        query: gql`
        query getPosts {
            posts(
              where: {categoryName: "pronunciamientos", orderby: {field: DATE, order: DESC}}
              first: ${first}
            ) {
              nodes {
                date
                featuredImage {
                  node {
                    mediaItemUrl
                    mediaDetails {
                      width
                      height
                    }
                  }
                }
              }
            }
          }          
      `});
    const posts = response.data.posts.nodes;
    return posts;
}