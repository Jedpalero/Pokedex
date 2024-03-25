import { useQuery } from "@tanstack/react-query";

const fetchPokemonSpecies = async (name: string | undefined) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${name}`
  );
  const result = await res.json();
  return await result;
};

const usePokemonSpeciesFetch = (name: string | undefined) => {
  return useQuery({
    queryKey: ['pokemon-species', name],
    queryFn: () => fetchPokemonSpecies(name)
  })
};
export default usePokemonSpeciesFetch;
