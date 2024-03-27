import { Link } from "react-router-dom";
import { CardType, types } from "../shared/pokemon.type";
import usePokemonFetch from "../hooks/usePokemonFetch";
import { TypeIcon, TypeIconProps, backgroundColors } from "../hooks/colorType";
import pokeball from "../assets/Pokeball-128.png";
import "../index.css";

const Card = ({ name, url }: CardType) => {
  const ids = url.split("/").filter(Boolean).pop();
  const str = "" + ids;
  const pad = "000";
  const id = pad.substring(0, pad.length - str.length) + str;

  const { data } = usePokemonFetch(name);

  return (
    <>
      <Link to={`/${name}`}>
        <div className="top border h-[10rem] w-[20rem] flex items-center justify-center gap-2 rounded-md drop-shadow-lg bg-slate-200 hover:bg-slate-700 hover:text-white text-slate-600">
          <h4 className="absolute top-0 left-0 p-2 font-extrabold">
            #{data?.id}
          </h4>
          <img
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`}
            alt="pokemonPicture"
            className="size-[7rem]"
          />
          <div className="space-y-3">
            <h4 className="text-center font-extrabold text-md ">
              {name.toUpperCase()}
            </h4>
            <span className="flex gap-2 text-center">
              {data?.types.map((t: types, index: number) => (
                <div
                  key={index}
                  className="text-white p-1 w-[90px] rounded-full drop-shadow-lg flex justify-center items-center text-xs gap-2"
                  style={{ backgroundColor: backgroundColors[t.type.name] }}
                >
                  <h4>{t.type.name}</h4>
                  {TypeIcon[t.type.name as keyof TypeIconProps]}
                </div>
              ))}
            </span>
          </div>
          <div className="icon hidden absolute rounded-full drop-shadow-lg top-0 right-0 p-1">
            <img src={pokeball} alt="pokeball" className="size-[60px]" />
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
