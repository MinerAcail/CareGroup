import { setContext } from "@apollo/client/link/context";
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';


/* help to pass a webtoken to a header */
const authLink = setContext((_, { headers }) => {
    // get the authentication user token from local storage if it exists
    const TokenData = localStorage.getItem('token');
    // return the headers to the context so httpLink can read them
    
  return {
    headers: {
      ...headers,
      authorization:  TokenData ? `Bearer ${TokenData}` : "",
    }
  }
});




//authLink.concat(httpLink)
const httpLink = new HttpLink({
  uri: "http://localhost:9090/",

});
/* this is a place where you link authlink and the httplink into one  so the client or the forntend can use it for authorization*/
const Client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

/*you will send to the mian index file */
export default Client;