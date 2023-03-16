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
              className={`pokemon-type-${typeofpoke} gap-1`}
              style={{
                backgroundColor: pokemonTypeColors[typeofpoke],
                boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.5)",
                borderRadius: "25px",
                alignItems: "center",
                textAlign: "center",
                height: "45px",
                width: "100px",
                marginRight: "6px",
                display: "flex",
                justifyContent: "center",
                color: "white",
              }}
            >
              <img
                src={
                  typeImages[type.type.name]
                    ? typeImages[type.type.name]
                    : null
                }
                alt={type.type.name}
                className="h-[25px] w-[25px]"
              />
              {type.type.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
