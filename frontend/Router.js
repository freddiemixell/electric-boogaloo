const { Suspense, lazy } = React;
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import { Query } from 'react-apollo';

import Index from './pages/index';
const Page = lazy(() => import('./pages/page'));

import { ROUTE_QUERY } from './store/Queries';

const Loading = () => <div>Loading...</div>;

const AwesomeRouter = () => (
  <Query query={ROUTE_QUERY}>
    {({ loading, error, data }) => {
      if (loading) return <Loading/>;
      if (error) return <p>Error :(</p>;
        return (
          
            <Router>
                  <Switch>
                    <Route exact path="/" component={Index} />
                    <Suspense fallback={<Loading/>}>
                      {
                        data.pages.edges.map(({ node: { slug } }) => <Route key={slug} path={`/${ slug }`} render={() => <Page/>} />)
                      }
                    </Suspense>
                    <Route path="*" component={Index} />
                  </Switch>
            </Router>
        )
    }}
  </Query>
);

export default AwesomeRouter;


  