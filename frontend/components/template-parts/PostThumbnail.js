const PostThumbnail = ( { postThumbnail } ) => {
    return postThumbnail ?
        <img
            width="50"
            height="50"
            src={ postThumbnail }
            className="attachment-post-thumbnail size-post-thumbnail wp-post-image"
            alt=""
            srcSet="http://one.wordpress.test/wp-content/uploads/2019/10/cartoon-electric-lightning-bolt-52967846.jpg 1300w, http://one.wordpress.test/wp-content/uploads/2019/10/cartoon-electric-lightning-bolt-52967846-281x300.jpg 281w, http://one.wordpress.test/wp-content/uploads/2019/10/cartoon-electric-lightning-bolt-52967846-768x821.jpg 768w, http://one.wordpress.test/wp-content/uploads/2019/10/cartoon-electric-lightning-bolt-52967846-958x1024.jpg 958w" sizes="(max-width: 1300px) 100vw, 1300px"
        /> :
        null
}

export {
    PostThumbnail,
}
