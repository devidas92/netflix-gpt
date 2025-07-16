import { useMovies } from "../utils/hooks/useMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useMovies();

  return (
    <div className="bg-black text-white min-h-screen">
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
