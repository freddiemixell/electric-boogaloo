import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { Query } from 'react-apollo';

import Index from './pages/index';
import Page from './pages/page';

import { ROUTE_QUERY } from './store/Queries';

const AwesomeRouter = () => (
  <Query query={ROUTE_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

        return data.pages.edges.map(({ node: { slug } }) => {
          return (
            <Router>
                <Switch>
                  <Route exact path="/" component={Index} />
                  <Route path={`/${ slug }`} component={Page} />
                  <Route path="*" component={Index} />
                </Switch>
            </Router>
          );
        }) 
    }}
  </Query>
);

export default AwesomeRouter;


  