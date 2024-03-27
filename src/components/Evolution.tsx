import { useQuery } from "@tanstack/react-query";
import { EvolutionProps } from "../shared/pokemon.type";
import { useFormattedId } from "../hooks/useFormattedId";
import { FaGreaterThan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Evolution = ({ idChain }: EvolutionProps) => {
  const { data } = useQuery({
    queryKey: ["pokemon-id"],
    queryFn: async () => {
      const res = await fetch(idChain);
      const result = await res.json();
      return await result;
    },
  });

  const evolve1 = data?.chain?.species.url;
  const evolve2 = data?.chain?.evolves_to[0]?.species.url;
  const evolve3 = data?.chain?.evolves_to[0]?.evolves_to[0]?.species.url;
  const name1 = data?.chain?.species.name;
  const name2 = data?.chain?.evolves_to[0]?.species.name;
  const name3 = data?.chain?.evolves_to[0]?.evolves_to[0]?.species.name;

  const idNum1 = useFormattedId(evolve1);
  const idNum2 = useFormattedId(evolve2);
  const idNum3 = useFormattedId(evolve3);

  return (
    <>
      {evolve2 || evolve3 ? (
        <>
          <div className="flex flex-col justify-center items-center mt-[5rem] bg-slate-700 text-white w-[90rem] m-auto rounded-bl-3xl rounded-tr-3xl">
            <h2 className="text-center p-3">Evolutions</h2>
            <div className="flex gap-3 mt-5">
              {evolve1 ? (
                <Link to={`/${name1}`} className="evolutionClip">
                  <h3 className="nameClip">{name1.toUpperCase()}</h3>
                  <img
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idNum1}.png`}
                    alt="evolution"
                    className="imageClip"
                  />
                </Link>
              ) : null}
              {evolve2 ? (
                <>
                  <FaGreaterThan className="m-auto size-10" />
                  <Link to={`/${name2}`} className="evolutionClip">
                    <h3 className="nameClip">{name2.toUpperCase()}</h3>
                    <img
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idNum2}.png`}
                      alt="evolution"
                      className="imageClip"
                    />
                  </Link>
                </>
              ) : null}
              {evolve3 ? (
                <>
                  <FaGreaterThan className="m-auto size-10" />
                  <Link to={`/${name3}`} className="evolutionClip">
                    <h3 className="nameClip">{name3.toUpperCase()}</h3>
                    <img
                      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idNum3}.png`}
                      alt="evolution"
                      className="imageClip"
                    />
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Evolution;
