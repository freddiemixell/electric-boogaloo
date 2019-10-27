import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Content from './Content';

// This is the query that Apollo Client will send to the WP site.
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

const PostsList = () => (
  <Query query={POSTS_SEARCH_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
      if (!data.posts.edges.length) return <p>No matching posts found.</p>;

      return data.posts.edges.map(edge => {
        const { node: post } = edge;
        const { postId } = post;

        return (
          <Content key={postId} post={post} />
        );
      });
    }}
  </Query>
);

export default PostsList;