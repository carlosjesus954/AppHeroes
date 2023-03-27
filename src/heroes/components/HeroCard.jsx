import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

    const heroImageUrl = `/src/assets/${id}.jpg`
    // const charactersByHero = <p>{ characters }</p>
  return (
    <div className="Cards-hero">
        <img src={heroImageUrl} alt={superhero} className="Cards-img" />
        <div className="Cards-text">
            <h2 className="Cards-title">{superhero}</h2>
            <p className="Cards-p">{alter_ego}</p>
            {/* {
                (alter_ego !== characters) && charactersByHero
            } */}
            <p className="Cards-p"> {first_appearance} </p>
            <Link to={`/hero/${id}`} className="Cards-links">
                Ver mas..
            </Link>
        </div>
    </div>
  )
};
