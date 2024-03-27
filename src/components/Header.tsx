import { FaMagnifyingGlass } from "react-icons/fa6";
import pokeLogo from "../assets/pokeballwhite.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/${input}`);
    setInput("");
  };

  return (
    <div className="p-6 flex items-center justify-between">
      <Link
        to="/"
        className="flex items-center md:gap-5 gap-2 hover:scale-105 transition ease-in duration-300"
      >
        <img
          src={pokeLogo}
          alt="pokeball"
          className="md:size-[3rem] size-[2rem]"
        />
        <h3 className="text-white font-bold md:text-3xl text-xl">Pokédex</h3>
      </Link>
      <div className="flex items-center md:gap-3 gap-1">
        <input
          type="text"
          className="md:p-3 p-1 rounded-full md:w-[20rem] w-[9rem]"
          placeholder="Search Pokemon..."
          name="input-pokemon"
          value={input}
          onChange={(e) => setInput(e.target.value.toLowerCase())}
        />
        <FaMagnifyingGlass
          className="text-white md:size-6 cursor-pointer"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default Header;
