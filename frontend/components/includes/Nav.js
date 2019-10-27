import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SiteNav = styled.nav.attrs(() => ({
    id: 'site-navigation',
    className: 'main-navigation',
}))``;

const NavLink = ( { to, pageTitle } ) => {
    return (
        <li>
            <Link to={ to }>
                { pageTitle }
            </Link>
        </li>
    );
};

const Navigation = ( { menuSlug = 'main-nav' } ) => {
    return (
        <SiteNav>
            <button
                className="menu-toggle"
                aria-controls="primary-menu"
                aria-expanded="false"
            >
                Primary Menu
            </button>
            <div className={ `menu-${menuSlug}-container` }>
                <ul
                    id="primary-menu"
                    className="menu nav-menu"
                    ari-expanded="false"
                >
                    <NavLink to="/" pageTitle="Home" />
                    <NavLink to="/about" pageTitle="About" />
                    <NavLink to="/contact" pageTitle="Contact" />
                </ul>
            </div>
        </SiteNav>
    )
}

export default Navigation;