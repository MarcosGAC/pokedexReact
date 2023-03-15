import React from 'react'

export default function TypePokemon({pokemon,typeImages}) {
  return (
    <div className='flex'>
        {pokemon.types.map((type, index) => {
                  return (
                    <div key={index} className="pokemon-type ">
                      <div
                        className={`pokemon-type-${type.type.name} gap-1`}
                        style={{
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
  )
}
