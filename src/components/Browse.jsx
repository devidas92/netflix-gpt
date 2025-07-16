import { useSelector } from "react-redux";
import { useMovies } from "../utils/hooks/useMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearchContainer from "./GptSearchContainer";

const Browse = () => {
  const gptSearchActive = useSelector(
    (state) => state.gptSearch.gptSearchActive
  );
  useMovies();

  return (
    <div className="bg-black text-white min-h-screen">
      {" "}
      {gptSearchActive ? (
        <GptSearchContainer />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
