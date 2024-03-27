import { useParams } from "react-router-dom";
import usePokemonFetch from "../hooks/usePokemonFetch";
import {
  ColorProps,
  TypeIcon,
  TypeIconProps,
  backgroundColors,
} from "../hooks/colorType";
import usePokemonSpeciesFetch from "../hooks/usePokemonSpeciesFetch";
import { FaRuler, FaWeightHanging } from "react-icons/fa6";
import { abilities, statsProps, types } from "../shared/pokemon.type";
import Evolution from "../components/Evolution";

const PokemonDetails = () => {
  const { name } = useParams();
  const { data: PokemonResult } = usePokemonFetch(name);
  const { data: PokemonSpecies } = usePokemonSpeciesFetch(name);

  const str = "" + PokemonResult?.id;
  const pad = "000";
  const id = pad.substring(0, pad.length - str.length) + str;

  const names: string = PokemonResult?.name;
  const types = PokemonResult?.types[0].type.name as keyof ColorProps;
  const weight = PokemonResult?.weight;
  const height = PokemonResult?.height;
  const description: string =
    PokemonSpecies?.flavor_text_entries[3].flavor_text;
  const moves = PokemonResult?.abilities;
  const habitat = PokemonSpecies?.habitat?.name;
  const habitats = habitat?.charAt(0).toUpperCase() + habitat?.slice(1);
  const stats = PokemonResult?.stats;
  const idChain = PokemonSpecies?.evolution_chain.url;

  return (
    <>
      <div className="lg:grid lg:grid-cols-2 ">
        <div className="p-3 m-auto">
          <h1 className="flex gap-4 justify-center">
            {names?.toUpperCase()} <span className="text-slate-700">#{id}</span>
          </h1>
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}
            alt="pokemonPicture"
            className="size-[30rem] m-auto"
          />
        </div>
        <div className="space-y-6 w-[40rem] m-auto">
          <p className="text-xl">{description}</p>
          <div
            className="border h-[15rem] rounded-xl p-7 text-white text-xl flex flex-wrap flex-col"
            style={{ backgroundColor: backgroundColors[types] }}
          >
            <span>
              <h4 className="flex items-center gap-3">
                WEIGHT
                <FaWeightHanging />
              </h4>
              <h4 className="text-black">{weight} kg</h4>
            </span>
            <span>
              <h4 className="flex items-center gap-3">
                HEIGHT
                <FaRuler />
              </h4>
              <h4 className="text-black">{height * 10} cm</h4>
            </span>
            <span>
              <h4>HABITAT</h4>
              <h4 className="text-black">
                {habitats ? habitats.toString() : "Unknown"}
              </h4>
            </span>
            <span>
              <h4>ABILITIESS</h4>
              {moves?.map((move: abilities, index: number) => (
                <h4 key={index} className="text-black">
                  {move.ability.name?.charAt(0).toUpperCase() +
                    move.ability.name?.slice(1)}
                </h4>
              ))}
            </span>
          </div>
          <div className="space-y-4">
            <h2>Types</h2>
            <span className="flex gap-2 text-center">
              {PokemonResult?.types.map((t: types, index: number) => (
                <div
                  key={index}
                  className="text-white p-4 w-[8rem] rounded-full drop-shadow-lg flex justify-center items-center text-md gap-2"
                  style={{ backgroundColor: backgroundColors[t.type.name] }}
                >
                  <h4>{t.type.name}</h4>
                  {TypeIcon[t.type.name as keyof TypeIconProps]}
                </div>
              ))}
            </span>
          </div>
          <div className="space-y-2">
            {stats?.map((item: statsProps, index: number) => (
              <div key={index} className="flex items-center gap-3">
                <span className="text-gray-700">
                  {item.stat.name?.toUpperCase()}
                </span>
                <div className="flex-1 h-4 bg-gray-200">
                  <div
                    className="h-4 bg-orange-500 rounded-r-lg"
                    style={{
                      width: `${
                        item.base_stat > "100" ? "100" : item.base_stat
                      }%`,
                      backgroundColor: backgroundColors[types],
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {idChain ? <Evolution idChain={idChain} /> : null}
    </>
  );
};

export default PokemonDetails;
