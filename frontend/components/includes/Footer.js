const Footer = ( { siteUrl = 'https://fredzoned.wordpress.com' } ) => {
    return (
      <footer id="colophon" className="site-footer">
        <div className="site-info">
          <a href="https://wordpress.org">Powered by WordPress</a>
          <span className="sep"> | </span>
          <a href={ siteUrl }>Built with ❤️ by Freddie Mixell</a>
        </div>
      </footer>
    );
}

export default Footer;
