import { useQuery } from "@tanstack/react-query";
import { EvolutionProps } from "../shared/pokemon.type";
import { useFormattedId } from "../hooks/useFormattedId";

const Evolution = ({ idChain }: EvolutionProps) => {
  const { data } = useQuery({
    queryKey: ["pokemon-id"],
    queryFn: async () => {
      const res = await fetch(idChain);
      const result = await res.json();
      return await result;
    },
  });

  // const evolve = [
  //   data?.chain?.species.url,
  //   data?.chain?.evolves_to[0]?.species.url,
  //   data?.chain?.evolves_to[0]?.evolves_to[0]?.species.url
  // ]

  const evolve1 = data?.chain?.species.url;
  const evolve2 = data?.chain?.evolves_to[0]?.species.url;
  const evolve3 = data?.chain?.evolves_to[0]?.evolves_to[0]?.species.url;

  // const id1 = evolve1?.split("/").filter(Boolean).pop();
  // const id2 = evolve2?.split("/").filter(Boolean).pop();
  // const id3 = evolve3?.split("/").filter(Boolean).pop();
  // // const str1 = "" + id1;
  // const str2 = "" + id2;
  // const str3 = "" + id3;
  // const pad = "000";
  // // const idNum1 = pad.substring(0, pad.length - str1.length) + str1;
  // const idNum2 = pad.substring(0, pad.length - str2.length) + str2;
  // const idNum3 = pad.substring(0, pad.length - str3.length) + str3;
  const idNum1 = useFormattedId(evolve1);
  const idNum2 = useFormattedId(evolve2);
  const idNum3 = useFormattedId(evolve3);

  // evolve.map((url) => {
  //   const id1 = url?.split("/").filter(Boolean).pop();
  //  const str1 = "" + id1;
  //  const pad = "000";
  //  const idNum1 = pad.substring(0, pad.length - str1.length) + str1;
  // }
  // )

  return (
    <div className="flex justify-center items-center">
      <>
        {evolve1 ? (
          <>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idNum1}.png`}
              alt="evolution"
            />
          </>
        ) : null}
        {evolve2 ? (
          <>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idNum2}.png`}
              alt="evolution"
            />
          </>
        ) : null}
        {evolve3 ? (
          <>
            <img
              src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idNum3}.png`}
              alt="evolution"
            />
          </>
        ) : null}
      </>
    </div>
  );
};

export default Evolution;
