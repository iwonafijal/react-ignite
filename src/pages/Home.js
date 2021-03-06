import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesAction";
import { useEffect } from "react";

// components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
// Styling and Animation
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { fadeIn } from "../animations";
import BeatLoader from "react-spinners/BeatLoader";

const Home = () => {
  // get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  // Fetch games
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);
  // Get that data back from the state
  const { popular, newGames, upcoming, searched, isLoading } = useSelector(
    (state) => state.games
  );

  console.log("isLoading", isLoading);

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      {pathId && <GameDetail pathId={pathId} />}
      {searched.length ? (
        <div className="searched">
          <h2>Searched Games</h2>
          <StyledSpinnerContainer>
            <BeatLoader color={"#ff7676"} loading={isLoading} />
          </StyledSpinnerContainer>
          <Games>
            {searched.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                id={game.id}
                image={game.background_image}
                key={game.id}
              />
            ))}
          </Games>
        </div>
      ) : (
        ""
      )}
      <h2>Upcoming Games</h2>
      <StyledSpinnerContainer>
        <BeatLoader color={"#ff7676"} loading={isLoading} />
      </StyledSpinnerContainer>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>Popular Games</h2>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
      <h2>New Games</h2>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
};

const GameList = styled.div`
  padding: 2rem 5rem;
  h2 {
    padding: 4rem 0rem;
  }
`;

const Games = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 5rem;
`;

const StyledSpinnerContainer = styled.div`
  margin: 25px;
  text-align: center;
`;

export default Home;
