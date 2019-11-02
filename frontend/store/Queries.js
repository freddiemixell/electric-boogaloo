import gql from 'graphql-tag';

const ROUTE_QUERY = gql`
  query ROUTE_QUERY {
    pages {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

const POSTS_SEARCH_QUERY = gql`
  query POSTS_SEARCH_QUERY {
    posts {
      edges {
        node {
          slug
          content
          postId
          title
          date
          author {
            name
          }
          featuredImage {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export {
    ROUTE_QUERY,
    POSTS_SEARCH_QUERY,
}
