import App from './App';

/**
 * Application Root.
 */
document.addEventListener( 'DOMContentLoaded', () => {

    const rootElement = document.querySelector('#app');

	/**
	 * ReachDOM Render.
	 *
	 * @function external:ReactDOM#render
	 */
	ReactDOM.render( <App /> , rootElement);
} );