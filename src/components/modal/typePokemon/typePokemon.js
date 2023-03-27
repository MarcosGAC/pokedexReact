import React from 'react';
import { pokemonTypeColors } from '../../pokemonsStyles/typecolors';



export default function TypePokemon({pokemon,typeImages}) {
  return (
    <div className='flex'>
      {pokemon.types.map((type, index) => {
        const typeofpoke = type.type.name;
        return (
          <div key={index} className="pokemon-type">
            <div
              className={`justify-evenly uppercase max-[600px]:text-[15px] h-[50px] w-[100px] max-[600px]:w-[80px] p-auto mr-2 max-[600px]:h-[30px]`}
              style={{
                backgroundColor: pokemonTypeColors[typeofpoke],
                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
                borderRadius: "25px",
                alignItems: "center",
                textAlign: "center",
                display: "flex",
                color: "white",
              }}
            >
              <img
                src={
                  typeImages[typeofpoke]
                    ? typeImages[typeofpoke]
                    : null
                }
                alt={typeofpoke}
                className="h-[25px] w-[25px]  max-[600px]:w-[15px] "
              />
              {typeofpoke}
            </div>
          </div>
        );
      })}
    </div>
  );
}
