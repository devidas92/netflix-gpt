import { useMovies } from "../utils/hooks/useMovies";
import MainContainer from "./MainContainer";

const Browse = () => {
  useMovies();
  return (
    <div className="text-black">
      <MainContainer />
    </div>
  );
};

export default Browse;
