import { useQuery } from "@tanstack/react-query";

const fetchPokemon = async (ids: string | undefined) => {
  const res = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${ids}`);
  const result = await res.json();
  return await result;
};

const usePokemonIdFetch = (ids: string | undefined) => {
  return useQuery({
    queryKey: ["pokemon-id", ids],
    queryFn: () => fetchPokemon(ids),
    enabled: false,
  })
};
export default usePokemonIdFetch;
