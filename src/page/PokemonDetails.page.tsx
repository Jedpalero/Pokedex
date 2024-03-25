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
import { abilities, types } from "../shared/pokemon.type";
import usePokemonIdFetch from "../hooks/usePokemonIdFetch";

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
    PokemonSpecies?.flavor_text_entries[0].flavor_text;
  const moves = PokemonResult?.abilities;
  const habitat = PokemonSpecies?.habitat.name;
  const habitats = habitat?.charAt(0).toUpperCase() + habitat?.slice(1);
  const ids: string = PokemonResult?.id;
  // const stats = PokemonResult?.stats;

  const { data: PokemonId } = usePokemonIdFetch(ids);

  const weaknesses = PokemonId?.damage_relations.double_damage_from;

  return (
    <div className="md:grid grid-cols-2">
      <div className="p-3 ">
        <h1 className="flex gap-4 justify-center">
          {names?.toUpperCase()} <span className="text-slate-700">#{id}</span>
        </h1>
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}
          alt="pokemonPicture"
          className="size-[30rem] m-auto"
        />
      </div>
      <div className="space-y-6">
        <p className="text-xl w-[30rem]">{description}</p>
        <div
          className="border h-[15rem] w-[30rem] rounded-xl p-7 text-white text-xl flex flex-wrap flex-col"
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
            <h4 className="text-black">{habitats.toString()}</h4>
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
        <div className="space-y-4">
          <h2>Weaknesses</h2>
          <span className="flex gap-2 text-center">
            {weaknesses?.map((t: types, index: number) => (
              <div
                key={index}
                className="text-white p-4 w-[8rem] rounded-full drop-shadow-lg flex justify-center items-center text-md gap-2"
                style={{ backgroundColor: backgroundColors[t.name] }}
              >
                <h4>{t.name}</h4>
                {TypeIcon[t.name as keyof TypeIconProps]}
              </div>
            ))}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
