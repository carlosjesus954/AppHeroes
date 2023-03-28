import React, { useMemo } from "react";
import { getHeroes } from "../helpers/getHeroes";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroes(publisher), [publisher]);
  return (
    <div className="Cards-container">
      {heroes.map((hero) => {
        return <HeroCard key={hero.id} {...hero} />;
      })}
    </div>
  );
};
