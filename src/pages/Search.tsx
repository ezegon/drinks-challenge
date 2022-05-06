import { Input, SimpleGrid, Spinner, useToast, VStack } from "@chakra-ui/react";
import { useEffect, useMemo, useState } from "react";
import { Drink } from "../components/drink";
import { useCocktailDb } from "../hooks/useCocktailDb";
import { useDebounce } from "../hooks/useDebounce";
import { Drink as DrinkInterface } from "../interfaces/Drink";

const Search = () => {
  const [searchString, setSearchString] = useState<string>();
  const [searchResult, setSearchResult] = useState<DrinkInterface[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const cocktailDb = useMemo(useCocktailDb, []);
  const toast = useToast();

  const debouncedSearchString = useDebounce(searchString, 1000);

  useEffect(() => {
    const handleSearch = async () => {
      try {
        setIsLoading(true);
        const res = await cocktailDb.getByAny(debouncedSearchString);
        console.log(res);
        setSearchResult(res);
      } catch (e) {
        console.error(e);
        toast({
          title: "An error ocurred",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
      } finally {
        setIsLoading(false);
      }
    };
    if (debouncedSearchString) {
      handleSearch();
    }
  }, [debouncedSearchString, cocktailDb, setIsLoading, toast]);

  return (
    <VStack minW="100%">
      <Input
        placeholder="Search by name, ingredients, etc..."
        onChange={(e) => setSearchString(e.target.value)}
        disabled={isLoading}
      />
      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        <SimpleGrid columns={4} spacing={10}>
          {searchResult.map((drink: DrinkInterface) => (
            <Drink drink={drink} key={drink.idDrink} />
          ))}
        </SimpleGrid>
      )}
    </VStack>
  );
};
export { Search };
