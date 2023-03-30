import React from "react";
import garchomp from "../../assets/garchomp.png";

export default function Header() {
  return (
    <div className="h-[100vh] w-full flex items-center justify-evenly bg-indigo-900">
      <div className="w-1/2">
        <div className=" text-white w-[80%]">
          <h1 className="text-[80px]">GARCHOMP</h1>
          <p className="text-[20px]">
            Garchomp (Japonês: ガブリアス Gaburias) é uma espécie de Pokémon dos
            tipos Dragon(Dragão) e Ground (Terrestre), introduzida na 4ª Geração
            e classificada oficialmente como Mach Pokémon. É a forma evoluída de
            Gabite e a forma final de Gible. Garchomp é considerado um Pokémon
            Pseudolendário. Garchomp tem a capacidade de Mega Evolução; quando
            exposto à Mega Stone Garchompite, assume sua forma Mega Garchomp.
            <p> Fonte:
              <a
                className="pt-10 text-5 text-indigo-500 p-2"
                href="https://victoryroad.fandom.com/wiki/Garchomp"
              >
                https://victoryroad.fandom.com/wiki/Garchomp
              </a>
            </p>
          </p>
        </div>
      </div>
      <img className="w- 1/2 h-[65%]" src={garchomp} alt="garchomp" />
    </div>
  );
}
