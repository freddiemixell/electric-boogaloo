import { Query } from 'react-apollo';
import Content from './Content';
import { POSTS_SEARCH_QUERY } from '../../store/Queries';

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