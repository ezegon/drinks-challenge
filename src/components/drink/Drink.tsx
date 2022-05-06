import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  ListItem,
  Stack,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import { Drink as DrinkInterface } from "../../interfaces/Drink";

const Drink: React.FC<{ drink: DrinkInterface }> = ({ drink }) => {
  const { isFavorite, toggleFavorite } = useContext(FavoritesContext);

  const favorite = isFavorite(drink);

  return (
    <VStack spacing={4} borderWidth="1px" borderRadius="lg" p={4}>
      <Button
        leftIcon={
          <Icon
            as={favorite ? FaHeart : FaRegHeart}
            color={favorite ? "red" : undefined}
          />
        }
        onClick={() => toggleFavorite(drink)}
      >
        Favorite
      </Button>
      <Heading as="h5" size="md" data-testid="drinkName">
        {drink.strDrink}
      </Heading>
      <Image
        src={`${drink.strDrinkThumb}/preview` || undefined}
        alt={drink.strDrinkAlternate || undefined}
        height={150}
        width={150}
        data-testid="drinkImg"
      />
      <Heading as="h5" size="sm">
        Ingredients
      </Heading>
      <UnorderedList size="sm" styleType="none" data-testid="drinkIngredients">
        {Array.from(Array(10).keys()).map((i) => {
          const ingredient =
            drink[`strIngredient${i + 1}` as keyof DrinkInterface];

          if (ingredient) {
            return (
              <ListItem key={drink.idDrink + "-" + i}>{ingredient}</ListItem>
            );
          }

          return <div key={drink.idDrink + "-" + i}></div>;
        })}
      </UnorderedList>
    </VStack>
  );
};

export { Drink };
