import React from "react";
import garchomp from "../../assets/garchomp.png";
import "./header.css";

export default function Header() {
  return (
    <div className="garchomp-container h-screen w-full flex items-center justify-evenly bg-indigo-900">
      <div className="w-[40%] garchomp-info">
        <div className="max-[600px]:text-green-800 ">
          <h1 className="titulo-garchomp text-white">GARCHOMP</h1>
          <p className=" garchomp-descricao text-xl  ">
            Garchomp (Japonês: ガブリアス Gaburias) é uma espécie de Pokémon dos
            tipos Dragon(Dragão) e Ground (Terrestre), introduzida na 4ª Geração
            e classificada oficialmente como Mach Pokémon. É a forma evoluída de
            Gabite e a forma final de Gible. Garchomp é considerado um Pokémon
            Pseudolendário. Garchomp tem a capacidade de Mega Evolução; quando
            exposto à Mega Stone Garchompite, assume sua forma Mega Garchomp.
          </p>
          <p className="pt-10 pl-[10%] pr-[10%] flex items-center">
            Fonte:
            <a
              className="link text-indigo-500 p-2 text-xl"
              href="https://victoryroad.fandom.com/wiki/Garchomp"
            >
              https://victoryroad.fandom.com/wiki/Garchomp{" "}
            </a>
          </p>
        </div>
      </div>
      <div className="w-[40%] garchomp-img-container">
        <img className="garchomp-img" src={garchomp} alt="garchomp" />
      </div>
    </div>
  );
}
