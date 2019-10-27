import { EntryHeader, EntryContent, EntryFooter } from './Entry';
import { PostThumbnail } from './PostThumbnail';

const Content = ( { post } ) => {
    const { postId, title, date, author, slug, featuredImage, content } = post;
    const { name: authorName } = author;
    return (
            <article id={ `post-${ postId }` }>
                <EntryHeader
                    title={ title }
                    author={ authorName }
                    postedOn={ date }
                    postType={ 'post' }
                    permalink={ slug }
                />
                {
                    featuredImage &&
                        <PostThumbnail postThumbnail={ featuredImage } />
                }
                <EntryContent postRendered={ content } />
                <EntryFooter siteUrl={ 'http://react-theme.test' } theID={ postId } />
            </article>
    )
}

export default Content;
