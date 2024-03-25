import { BsFillNutFill } from "react-icons/bs";
import {
  FaBug,
  FaDragon,
  FaFeather,
  FaFire,
  FaFistRaised,
  FaLeaf,
  FaRegCircle,
  FaSkull,
  FaSnowflake,
} from "react-icons/fa";
import {
  GiClayBrick,
  GiFairyWings,
  GiFluffySwirl,
  GiMountaintop,
} from "react-icons/gi";
import { IoWater } from "react-icons/io5";
import { LiaGhostSolid } from "react-icons/lia";
import { MdDarkMode, MdElectricBolt } from "react-icons/md";

export type ColorProps = {
  water: string;
  electric: string;
  fire: string;
  bug: string;
  dark: string;
  dragon: string;
  fairy: string;
  fighting: string;
  flying: string;
  ghost: string;
  normal: string;
  grass: string;
  ground: string;
  ice: string;
  poison: string;
  psychic: string;
  rock: string;
  steel: string;
  [key: string]: string;
};

export type TypeIconProps = {
  water: JSX.Element;
  electric: JSX.Element;
  fire: JSX.Element;
  bug: JSX.Element;
  dark: JSX.Element;
  dragon: JSX.Element;
  fairy: JSX.Element;
  fighting: JSX.Element;
  flying: JSX.Element;
  ghost: JSX.Element;
  normal: JSX.Element;
  grass: JSX.Element;
  ground: JSX.Element;
  ice: JSX.Element;
  poison: JSX.Element;
  psychic: JSX.Element;
  rock: JSX.Element;
  steel: JSX.Element;
};

export const backgroundColors: ColorProps = {
  water: "#6493eb",
  electric: "#f9cf30",
  fire: "#f57d31",
  bug: "#A7B723",
  dark: "#75574C",
  dragon: "#7037FF",
  fairy: "#E69EAC",
  fighting: "#C12239",
  flying: "#A891EC",
  ghost: "#70559B",
  normal: "#AAA67F",
  grass: "#74CB48",
  ground: "#DEC16B",
  ice: "#9AD6DF",
  poison: "#A43E9E",
  psychic: "#FB5584",
  rock: "#B69E31",
  steel: "#B7B9D0",
};

export const TypeIcon: TypeIconProps = {
  water: <IoWater />,
  electric: <MdElectricBolt />,
  fire: <FaFire />,
  bug: <FaBug />,
  dark: <MdDarkMode />,
  dragon: <FaDragon />,
  fairy: <GiFairyWings />,
  fighting: <FaFistRaised />,
  flying: <FaFeather />,
  ghost: <LiaGhostSolid />,
  normal: <FaRegCircle />,
  grass: <FaLeaf />,
  ground: <GiMountaintop />,
  ice: <FaSnowflake />,
  poison: <FaSkull />,
  psychic: <GiFluffySwirl />,
  rock: <GiClayBrick />,
  steel: <BsFillNutFill />,
};
