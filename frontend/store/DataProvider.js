import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
	// Change this to the URL of your WordPress site.
	uri: "http://react-theme.test/graphql"
});

/**
 * Data Context API.
 */
const AwesomeDataLayer = ( { children } ) => {

	return (
		<ApolloProvider client={client}>
			{ children }
		</ApolloProvider>
	);
}

export default AwesomeDataLayer;
