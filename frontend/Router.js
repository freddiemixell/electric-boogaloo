import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Index from './pages/index';

import GlobalStyle from './components/includes/GlobalStyles';

const AwesomeRouter = () => {
    return (
        <Router>
          {/* <GlobalStyle/> */}
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="*" component={Index} />
            </Switch>
        </Router>
    );
  };

  export default AwesomeRouter;
  