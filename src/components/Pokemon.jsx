import React from "react";

export function Pokemon({ pokemon }) {
  return (
    <div className="bg-white border border-black/10 rounded-md shadow-md p-4">
      {/* Pokémon Name */}
      <div className="bg-yellow-400 text-center p-2">
        <p className="uppercase font-bold text-white tracking-widest shadow-md">
          {pokemon.name}
        </p>
      </div>

      {/* Pokémon Image */}
      <div className="flex items-center justify-center p-5 min-h-[300px]">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="max-w-full h-auto"
        />
      </div>

      {/* Pokémon Meta Data */}
      <div className="flex justify-between mt-2 px-3 flex-wrap gap-2">
        <span className="text-white shadow-md bg-teal-400 font-bold px-5 py-1 rounded-md">
          {pokemon.maxHP}
        </span>
        <span className="text-white shadow-md bg-teal-400 font-bold px-5 py-1 rounded-md">
          {pokemon.maxCP}
        </span>
      </div>

      {/* Pokémon Attacks */}
      <div className="flex justify-between px-1 mt-3 flex-wrap gap-2">
        {pokemon.attacks.special.slice(0, 3).map((attack) => (
          <span
            key={`${attack.name}-${attack.damage}`}
            className="bg-orange-500 text-white font-bold text-xs p-2 rounded text-center w-[30%] sm:w-[45%] md:w-[30%] lg:w-[30%] min-w-0"
          >
            {attack.name}
          </span>
        ))}
      </div>
    </div>
  );
}
