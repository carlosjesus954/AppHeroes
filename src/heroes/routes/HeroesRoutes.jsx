import React from "react";
import { Routes, Navigate, Route } from "react-router-dom";
import { NavBar } from "../../ui/components/NavBar";
import { MarvelPage, DcPage, Hero, Search } from "../index";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />

        <Route path="hero/:id" element={<Hero />} />
        <Route path="search" element={<Search />} />


        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </>
  );
};
