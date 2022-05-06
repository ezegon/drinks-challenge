import { SimpleGrid } from "@chakra-ui/react";
import { useContext } from "react";
import { Drink } from "../components/drink";
import { FavoritesContext } from "../contexts/FavoritesContext";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <SimpleGrid minW="100%" columns={4} spacing={10}>
      {favorites.map((fav) => (
        <Drink drink={fav} />
      ))}
    </SimpleGrid>
  );
};

export { Favorites };
