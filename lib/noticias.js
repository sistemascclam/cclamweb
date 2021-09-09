import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client"

export async function getAllPagesUri() {
  const client = new ApolloClient({
    uri: process.env.graphuri,
    cache: new InMemoryCache()
  });
  const response = await client.query({
    query: gql`
        query getPagesOfNews {
            page(id: "cG9zdDo1MzY0", idType: ID) {
              children {
                edges {
                  node {
                    ... on Page {
                      id
                    }
                  }
                }
              }
            }
          }
      `});
  const pages = response.data.page.children.edges;
  return pages.map(page => {
    return {
      params: {
        id: page.node.id
      }
    }
  })
}

export async function getPageData(id) {
  const client = new ApolloClient({
    uri: process.env.graphuri,
    cache: new InMemoryCache()
  });
  const response = await client.query({
    query: gql`
        query getSpecificNew {
            page(
              id: "${id}"
              idType: ID
            ) {
              date
              title
              content
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
      `});
  const page = response.data.page;
  return page;
}