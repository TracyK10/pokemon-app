import { useQuery } from "@apollo/client";
import { Pokemon } from "../components/Pokemon";
import { GET_POKEMONS } from "../graphql/get-pokemons";

export function PokemonsContainer() {
  const { loading, error, data } = useQuery(GET_POKEMONS, {
    variables: { first: 9 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  return (
    <>
      <h1 className="text-3xl underline text-black font-bold text-center pt-6">
        Pokémon List
      </h1>
      <div className="w-full px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mx-auto">
          {data?.pokemons?.map((pokemon) => (
            <Pokemon key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      </div>
    </>
  );
}
