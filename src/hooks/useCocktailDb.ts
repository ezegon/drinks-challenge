import axios from "axios";
import { Drink } from "../interfaces/Drink";

const cocktailAxios = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
});

const useCocktailDb = () => {
  return {
    getDrinksByName: async (name?: string) => {
      if (!name) {
        return [];
      }

      try {
        const { data } = await cocktailAxios.get<{ drinks: Drink[] }>(
          "/search.php",
          {
            params: { s: name },
          }
        );

        return data.drinks;
      } catch (e) {
        throw e;
      }
    },
    getByAny: async (searchString?: string) => {
      if (!searchString) {
        return [];
      }

      try {
        const [drinksByName, drinksByIngredient] = await Promise.all([
          cocktailAxios.get("/search.php", { params: { s: searchString } }),
          cocktailAxios.get("/filter.php", { params: { i: searchString } }),
        ]);

        const ids = drinksByName.data?.drinks?.map(
          (d: Drink) => d.idDrink
        ) as string[];

        for (let drink of drinksByIngredient.data?.drinks || []) {
          if (!ids.find((id) => id === drink.idDrink)) {
            ids.push(drink.idDrink);
          }
        }

        const drinks = await Promise.all(
          ids.map((id) =>
            cocktailAxios.get("/lookup.php", { params: { i: id } })
          )
        );

        return drinks.map((d) => d.data.drinks[0]) as Drink[];
      } catch (e) {
        throw e;
      }
    },
  };
};

export { useCocktailDb };
