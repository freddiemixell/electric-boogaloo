import { Link } from 'react-router-dom';
const formatDate = date => new Date( date ).toDateString();

const EntryMeta = ( { postedOn, author, permalink, siteUrl } ) => {
    return (
        <div className="entry-meta">
            <span className="posted-on">
                Posted On{ ' ' }
                <Link to={ `${permalink}` } rel="bookmark">
                    <time className="entry-date published updated" dateTime={ postedOn.toString() }>
                        { formatDate( postedOn ) }
                    </time>
                </Link>
            </span>
            <span className="byline">
                { ' ' }by{ ' ' }
                <span className="author vcard">
                    <a className="url fn n" href={ `${siteUrl}/author/${author}` } >
                        { author }
                    </a>
                </span>
            </span>
        </div>
    )
}

const EntryHeader = ( { isSingle, permalink, title, postType, postedOn, author } ) => {
    return (
        <header className="entry-header">
            {
                isSingle ?
                    <h1>{ title }</h1> :
                    <h2 className="entry-title">
                        <Link
                            to={ permalink }
                            rel="bookmark"
                        >
                            { title }
                        </Link>
                    </h2>
            }
            {
                'post' === postType &&
                    <EntryMeta
                        postedOn={ postedOn }
                        author={ author }
                        permalink={ permalink }
                    />
            }
        </header>
    );
}

const EntryFooter = ( { siteUrl, theID } ) => {
    return (
        <footer className="entry-footer">
		    <span className="cat-links">Posted in{ ' ' }
                <a href="http://one.wordpress.test/category/uncategorized/" rel="category tag">
                    Uncategorized
                </a>
            </span>
            <span className="edit-link">
                <a className="post-edit-link" href={ `${siteUrl}/wp-admin/post.php?post=${ theID }&amp;action=edit` }>
                    Edit
                    <span className="screen-reader-text">New Post</span>
                </a>
            </span>
        </footer>
    )
}

const EntryContent = ( { postRendered } ) => <div className="entry-content" dangerouslySetInnerHTML={{ __html: postRendered }} />

export {
    EntryMeta, EntryHeader, EntryContent, EntryFooter,
}
