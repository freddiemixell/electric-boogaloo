import Helmet from 'react-helmet';
import Header from './Header';
import Footer from './Footer';
const { Fragment } = React;

const Layout = ( { children } ) => {
    return (
        <Fragment>
            <Helmet title="Managed Headless WordPress" />
            <Header/>
            <div id="content" className="site-content">
                <div id="primary" className="content-area">
                    <main id="main" className="site-main">
                        {children}
                    </main>
                </div>
            </div>
            <Footer/>
        </Fragment>
    )
}

export default Layout;