import React, { createContext, useEffect, useState } from "react";
import { Drink } from "../interfaces/Drink";

const FavoritesContext = createContext<{
  favorites: Drink[];
  toggleFavorite: (drink: Drink) => void;
  isFavorite: (drink: Drink) => boolean;
}>({
  favorites: [],
  toggleFavorite: () => {},
  isFavorite: () => false,
});

const FavoritesConsumer = FavoritesContext.Consumer;

const FavoritesProvider: React.FC<React.ReactNode> = (props) => {
  const [favorites, setFavorites] = useState<Drink[]>(
    JSON.parse(localStorage.getItem("favorites") || "[]") as Drink[]
  );

  const isFavorite = (drink: Drink) =>
    Boolean(favorites.find((fav) => fav.idDrink === drink.idDrink));

  const toggleFavorite = (drink: Drink) => {
    if (!isFavorite(drink)) {
      setFavorites((prevFavs) => [...prevFavs, drink]);
    } else {
      setFavorites((prevFavs) =>
        prevFavs.filter((fav) => fav.idDrink !== drink.idDrink)
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {props.children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext, FavoritesConsumer, FavoritesProvider };
