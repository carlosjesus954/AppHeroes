import React from "react";
import queryString from "query-string";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../components/HeroCard";
import { getHeroByName } from "../helpers/getHeroByName";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroByName(q);
  const { searchText, onInputChange } = useForm({
    searchText: q,
  });
  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length < 1) return;
    navigate(`?q=${searchText}`);
  };
  return (
    <div className="Search">
      <div className="Search-global wrapper">
        <div className="Search-container">
          <h2 className="Search-title">Buscar Heroes</h2>
          <form className="Search-form" onSubmit={onSearchSubmit}>
            <input
              type="text"
              name="searchText"
              placeholder="Buscar heroe"
              autoComplete="off"
              className="Search-input"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="Search-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="Search-icon"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
        </div>
        <div className="Search-results">
          <h3 className="Search-title">Resultados</h3>
          <div className="Search-card">
            {heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
