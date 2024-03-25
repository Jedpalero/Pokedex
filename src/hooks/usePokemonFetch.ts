import { useQuery } from "@tanstack/react-query";

const fetchPokemon = async (name: string | undefined) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  const result = await res.json();
  return await result;
};

const usePokemonFetch = (name: string | undefined) => {
  return useQuery({
    queryKey: ['pokemon-result', name],
    queryFn: () => fetchPokemon(name)
  })
};
export default usePokemonFetch;
