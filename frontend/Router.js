import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Index from './pages/index';

const AwesomeRouter = () => {
    return (
        <Router>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="*" component={Index} />
            </Switch>
        </Router>
    );
  };

  export default AwesomeRouter;
  