import { useState } from "react";

import AddMovie from "./AddMovie";
import MovieList from "./MovieList";

const MoviePage = () => {

    const [movieState, setMovieState] = useState(() => {
        return {movieList: ["Die Hard", "Harry Potter"]};
    });

    function handleAddMovie(newMovieName) {
        setMovieState((prevState) => {
            return {
                movieList: prevState.movieList.concat([newMovieName])
            }
        });
    }

    return(
        <div className="container col-12 col-md-6 my-3 border">
            <AddMovie handleAddMovie={handleAddMovie}/>
            <MovieList movieList = {movieState.movieList} />
        </div>
    )
}
export default MoviePage;