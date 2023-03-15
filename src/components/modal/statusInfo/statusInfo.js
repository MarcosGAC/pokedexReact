import React from "react";

export default function StatusInfo({ pokemon }) {
  return (
    <div className="">
      <h1 className="text-center text-[30px] text-white">Status:</h1>
      {pokemon.stats.map((stats, index) => {
        const statBar = (stats.base_stat / 100) * 100;
        return (
          <div
            key={index}
            className="flex items-center "
            style={{ width: `${statBar}%` }}
          >
            <div
              className="bg-white h-[40px] p-2 m-2 rounded-xl flex justify-between min-w-[200px] max-w-[320px] sm:min-w-[180px] sm:max-w-[250px] md:min-w-[200px] md:max-w-[300px] lg:min-w-[300px] lg:max-w-[400px] flex-wrap"
              style={{ width: `${statBar}%` }}
            >
              <div
                className="bg-green-400 rounded-lg items-center flex"
                style={{ width: `${statBar}%` }}
              >
                <div className="absolute text-[22px] ">{stats.stat.name}</div>
              </div>
            </div>
            <div>{stats.base_stat}</div>
          </div>
        );
      })}
    </div>
  );
}
