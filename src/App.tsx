import {
  ChakraProvider,
  VStack,
  theme,
  Heading,
  Button,
  Icon,
  HStack,
  Container,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/colorModeSwitcher";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { FaHeart, FaSearch } from "react-icons/fa";
import { useState } from "react";
import { Search, Favorites } from "./pages";

export const App = () => {
  const [selectedView, setSelectedView] = useState("search");

  const getSelectedViewComponent = (selectedView: string) => {
    switch (selectedView) {
      case "favorites":
        return <Favorites />;
      case "search":
      default:
        return <Search />;
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <FavoritesProvider>
        <Container minH="100vh" minW="container.lg" p={3}>
          <HStack>
            <Button
              leftIcon={<Icon as={FaHeart} />}
              size="sm"
              onClick={() => setSelectedView("favorites")}
            >
              Favorites
            </Button>
            <Button
              leftIcon={<Icon as={FaSearch} />}
              size="sm"
              onClick={() => setSelectedView("search")}
            >
              Search
            </Button>
            <ColorModeSwitcher />
          </HStack>
          <VStack spacing={8}>
            <Heading as="h1" size="lg">
              Drinks App
            </Heading>
            {getSelectedViewComponent(selectedView)}
          </VStack>
        </Container>
      </FavoritesProvider>
    </ChakraProvider>
  );
};
