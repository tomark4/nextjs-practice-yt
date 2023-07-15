import { Movie } from "@/interfaces/Movie";
import MovieCard from "./MovieCard";
import isEmpty from "lodash/isEmpty";

interface MovieListProps {
  data: Movie[];
  title: string;
  favorites?: string[];
}

const MovieList: React.FC<MovieListProps> = ({ data, title, favorites }) => {
  if (isEmpty(data)) {
    return null;
  }

  return (
    <div className="px-4 md:px-12 mt-4 space-y-8">
      <div>
        <p className="text-white text-md md:text-xl lg:text-2xl font-semibold mb-4">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {data.map((movie) => (
            <MovieCard key={movie._id} data={movie} userMovieList={favorites} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
