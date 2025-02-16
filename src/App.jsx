import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import { PokemonsContainer } from "./containers/PokemonsContainer";

function App() {
  const client = new ApolloClient({
    uri: "https://graphql-pokemon2.vercel.app/",
    cache: new InMemoryCache(), // required to prevent caching errors
  });

  return (
    <>
      <ApolloProvider client={client}>
        <main>
          <PokemonsContainer />
        </main>
      </ApolloProvider>
    </>
  );
}

export default App;
