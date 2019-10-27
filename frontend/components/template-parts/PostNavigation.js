import { Link } from 'react-router-dom';

const PostNavigation = () => {
    const [ prevTitle, prevLink ] = ['Gatsby Tutorials', '/gatsby' ];
    const [ nextTitle, nextLink ] = [ 'React Tutorials', '/react' ];

    return (
        <nav className="navigation post-navigation" role="navigation">
            <h2 className="screen-reader-text">Post navigation</h2>
            <div className="nav-links">
                <div className="nav-previous">
                    <Link to={ prevLink } rel="prev">
                        { prevTitle }
                    </Link>
                </div>
                <div className="nav-next">
                    <Link to={ nextLink } rel="next">
                        { nextTitle }
                    </Link>
                </div>
            </div>
	    </nav>
    )
}

export {
    PostNavigation,
}