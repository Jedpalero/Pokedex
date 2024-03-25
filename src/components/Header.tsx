import { FaMagnifyingGlass } from "react-icons/fa6";
import pokeLogo from "../assets/pokeballwhite.png";

const Header = () => {
  return (
    <div className="p-6 flex items-center justify-between">
      <div className="flex items-center gap-5">
        <img src={pokeLogo} alt="pokeball" className="size-[3rem]" />
        <h3 className="text-white font-bold text-3xl">Pokédex</h3>
      </div>
      <div className="md:flex hidden items-center gap-3">
        <input
          type="text"
          className="p-3 rounded-full w-[20rem]"
          placeholder="Search"
        />
        <FaMagnifyingGlass className="text-white size-6" />
      </div>
    </div>
  );
};

export default Header;
