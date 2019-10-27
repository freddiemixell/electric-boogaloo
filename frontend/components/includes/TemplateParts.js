import { Link } from 'react-router-dom';

const SiteBranding = () => {
    return (
        <div className="site-branding">
            <Logo/>
            <SiteTitle/>
            <SiteDescription/>
        </div>
    );
}

export {
    SiteBranding,
}

const Logo = ( { siteLogo = 'https://digital-reactor.s3.amazonaws.com/logo.png' } ) => {
    return (
        <Link to="/" rel="home" aria-current="page">
            <img height="52" className="custom-logo-link" src={ siteLogo } />
        </Link>
    )
};

const SiteTitle = ({ isHome = true, homeUrl = '/', siteName = 'Digital Reactor' }) => {
    return isHome ? (
        <h1 className="site-title">
            <a href={ homeUrl } rel="home">
                { siteName }
            </a>
        </h1>
    ) :
    (
        <p className="site-title">
            <a href={ homeUrl } rel="home">
                { siteName }
            </a>
        </p>
    )
}

const SiteDescription = ( {
    siteDescription = 'Managed Headless WordPress.',
    isCustomizer = false
} ) => {
   return ! isCustomizer ? <p className="site-description"> { siteDescription } </p> : null;
}
