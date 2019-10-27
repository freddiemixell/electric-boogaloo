const { useEffect } = React;
import AwesomeRouter from './Router';
import AwesomeDataLayer from './store/DataProvider';

import WebFont from 'webfontloader';

function App() {
    const fontStack = { google: { families: ['Chivo:900', 'Open Sans:300,500', 'sans-serif'] } }

    useEffect(() => {
        WebFont.load( fontStack );
    });

    return (
        <AwesomeDataLayer>
            <AwesomeRouter/>
        </AwesomeDataLayer>
    );
}

export default App;
