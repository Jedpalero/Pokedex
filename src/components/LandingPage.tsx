import { useState } from "react";
import "../index.css";
import { RootObject } from "../shared/pokemon.type";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import Loader from "./Loader";
import ErrorNotFound from "./ErrorNotFound";

const fetchPokemonData = async (offset: number) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
  );
  const result = await res.json();
  return await result;
};

const LandingPage = () => {
  const [offset, setOffset] = useState(0);

  const {
    data: pokemon,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pokemon", offset],
    queryFn: async (): Promise<RootObject> => fetchPokemonData(offset),
  });

  const names = pokemon?.results;

  return (
    <>
      {isError ? (
        <ErrorNotFound />
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {names?.map((pokemon) => (
                <Card
                  key={pokemon.name}
                  name={pokemon.name}
                  url={pokemon.url}
                />
              ))}
            </>
          )}
        </div>
      )}
      <div className="flex gap-3 justify-center p-3">
        <button
          disabled={offset === 0}
          onClick={() => setOffset((prev) => prev - 20)}
        >
          Prev
        </button>
        <button
          disabled={offset === 1020}
          onClick={() => setOffset((prev) => prev + 20)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default LandingPage;
