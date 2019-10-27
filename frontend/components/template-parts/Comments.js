const Comments = () => {
    return (
        <div id="comments" className="comments-area">
            <div id="respond" className="comment-respond">
            <h3 id="reply-title" className="comment-reply-title">
                Leave a Reply{ ' ' }
                <small>
                    <a rel="nofollow" id="cancel-comment-reply-link" href="/new-post/#respond" style={ { display: 'none' } }>Cancel reply</a>
                </small>
            </h3>
            <form action="http://one.wordpress.test/wp-comments-post.php" method="post" id="commentform" className="comment-form" noValidate="">
                <p className="logged-in-as">
                    <a href="http://one.wordpress.test/wp-admin/profile.php" aria-label="Logged in as admin. Edit your profile.">Logged in as admin</a>.{ ' ' }
                    <a href="http://one.wordpress.test/wp-login.php?action=logout&amp;redirect_to=http%3A%2F%2Fone.wordpress.test%2Fnew-post%2F&amp;_wpnonce=38ac73398c">Log out?</a>
                </p>
                <p className="comment-form-comment">
                    <label htmlFor="comment"> Comment </label>
                    <textarea id="comment" name="comment" cols="45" rows="8" maxLength="65525" required="required"></textarea>
                </p>
                <p className="form-submit">
                    <input name="submit" type="submit" id="submit" className="submit" value="Post Comment"/>
                    <input type="hidden" name="comment_post_ID" value="12" id="comment_post_ID"/>
                    <input type="hidden" name="comment_parent" id="comment_parent" value="0"/>
                </p>
            </form>
            </div>
        </div>
    )
}

export {
    Comments,
}