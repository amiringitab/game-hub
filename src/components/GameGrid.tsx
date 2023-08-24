import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          spacing={10}
          padding="10px"
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer>
                <GameCardSkeleton key={skeleton} />
              </GameCardContainer>
            ))}
          {data.map((game) => (
            <GameCardContainer>
              <GameCard key={game.id} game={game}></GameCard>
            </GameCardContainer>
          ))}
        </SimpleGrid>
      </ul>
    </>
  );
};
export default GameGrid;
