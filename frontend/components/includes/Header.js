import { SiteHeader } from './Headings';
import { SiteBranding } from './TemplateParts';
import Nav from './Nav';

const Header = () => {
    return (
        <SiteHeader top="32px">
            <SiteBranding/>
            <Nav/>
        </SiteHeader>
    );
}

export default Header;