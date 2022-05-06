import { Drink as DrinkInterface } from "../../interfaces/Drink";
import { render, within } from "@testing-library/react";
import { Drink } from "./Drink";

test("Drink component should render", () => {
  const drink = {
    idDrink: "11410",
    strDrink: "Gin Fizz",
    strDrinkAlternate: null,
    strTags: "IBA,Classic",
    strVideo: "https://www.youtube.com/watch?v=obGhGNUKx30",
    strCategory: "Ordinary Drink",
    strIBA: "Unforgettables",
    strAlcoholic: "Alcoholic",
    strGlass: "Highball glass",
    strInstructions:
      "Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.",
    strInstructionsES: null,
    strInstructionsDE:
      "Alle Zutaten mit Eiswürfel schütteln, außer Sodawasser. In das Glas gießen. Mit Sodawasser auffüllen.",
    strInstructionsFR: null,
    strInstructionsIT:
      "Shakerare tutti gli ingredienti con cubetti di ghiaccio, tranne l'acqua gassata. Versare nel bicchiere. Completare con acqua gassata.",
    "strInstructionsZH-HANS": null,
    "strInstructionsZH-HANT": null,
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
    strIngredient1: "Gin",
    strIngredient2: "Lemon",
    strIngredient3: "Powdered sugar",
    strIngredient4: "Carbonated water",
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strMeasure1: "2 oz ",
    strMeasure2: "Juice of 1/2 ",
    strMeasure3: "1 tsp ",
    strMeasure4: null,
    strMeasure5: null,
    strMeasure6: null,
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strImageSource:
      "https://commons.wikimedia.org/wiki/File:15-09-26-RalfR-WLC-0032.jpg",
    strImageAttribution: null,
    strCreativeCommonsConfirmed: "Yes",
    dateModified: "2017-09-02 12:29:32",
  } as DrinkInterface;

  render(<Drink drink={drink} />);
});

test("Drink component should contain name, image and ingredients", () => {
  const drink = {
    idDrink: "11410",
    strDrink: "Gin Fizz",
    strDrinkAlternate: null,
    strTags: "IBA,Classic",
    strVideo: "https://www.youtube.com/watch?v=obGhGNUKx30",
    strCategory: "Ordinary Drink",
    strIBA: "Unforgettables",
    strAlcoholic: "Alcoholic",
    strGlass: "Highball glass",
    strInstructions:
      "Shake all ingredients with ice cubes, except soda water. Pour into glass. Top with soda water.",
    strInstructionsES: null,
    strInstructionsDE:
      "Alle Zutaten mit Eiswürfel schütteln, außer Sodawasser. In das Glas gießen. Mit Sodawasser auffüllen.",
    strInstructionsFR: null,
    strInstructionsIT:
      "Shakerare tutti gli ingredienti con cubetti di ghiaccio, tranne l'acqua gassata. Versare nel bicchiere. Completare con acqua gassata.",
    "strInstructionsZH-HANS": null,
    "strInstructionsZH-HANT": null,
    strDrinkThumb:
      "https://www.thecocktaildb.com/images/media/drink/drtihp1606768397.jpg",
    strIngredient1: "Gin",
    strIngredient2: "Lemon",
    strIngredient3: "Powdered sugar",
    strIngredient4: "Carbonated water",
    strIngredient5: null,
    strIngredient6: null,
    strIngredient7: null,
    strIngredient8: null,
    strIngredient9: null,
    strIngredient10: null,
    strIngredient11: null,
    strIngredient12: null,
    strIngredient13: null,
    strIngredient14: null,
    strIngredient15: null,
    strMeasure1: "2 oz ",
    strMeasure2: "Juice of 1/2 ",
    strMeasure3: "1 tsp ",
    strMeasure4: null,
    strMeasure5: null,
    strMeasure6: null,
    strMeasure7: null,
    strMeasure8: null,
    strMeasure9: null,
    strMeasure10: null,
    strMeasure11: null,
    strMeasure12: null,
    strMeasure13: null,
    strMeasure14: null,
    strMeasure15: null,
    strImageSource:
      "https://commons.wikimedia.org/wiki/File:15-09-26-RalfR-WLC-0032.jpg",
    strImageAttribution: null,
    strCreativeCommonsConfirmed: "Yes",
    dateModified: "2017-09-02 12:29:32",
  } as DrinkInterface;

  const ui = render(<Drink drink={drink} />);
  expect(ui.queryByText(new RegExp(drink.strDrink || "", "i"))).toBeTruthy();

  const list = ui.queryByTestId("drinkIngredients");

  expect(list).toBeDefined();

  Array.from(Array(10).keys()).forEach((i) => {
    const ingredient = drink[`strIngredient${i + 1}` as keyof DrinkInterface];

    if (ingredient && list) {
      expect(
        within(list).queryByText(new RegExp(ingredient || "", "i"))
      ).toBeTruthy();
    }
  });

  const img = ui.queryByTestId("drinkImg");

  expect(img).toBeTruthy();
});
