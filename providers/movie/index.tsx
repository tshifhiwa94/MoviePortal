import React, { useReducer, useContext ,useEffect} from "react";
import {MoviesStateContext,MoviesActionContext, INITIAL_STATE} from "./context";
import { fetchMoviesRequestAction, mostRatedMovieRequestAction} from "./action";
import { UserReducer } from "./reducer";
import { useGet } from "restful-react";

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);



  const { data: movieData, loading: movieLoading } = useGet({
    path: 'services/app/Movie/GetAll',
  });

  const { data: mostmovieData, loading: mostmovieLoading } = useGet({
    path: 'services/app/Movie/GetTopRatedMovies',
  });




  const fetchMovies = () => {
    if (movieData) {
      dispatch(fetchMoviesRequestAction(movieData.result));
    }
  };

  const mostRatedMovies = () => {
    if (mostmovieData) {
      // Dispatch action with mostmovieData.result
      // Replace `yourAction` with your actual action
      dispatch(mostRatedMovieRequestAction(mostmovieData.result));
    }
  };


  useEffect(() => {
    fetchMovies();
  }, [movieData, dispatch]);

  useEffect(() => {
    mostRatedMovies();
  }, [mostmovieData, dispatch]);

  if (movieLoading || mostmovieLoading) {
    return <div>Loading...</div>;
  }



 







  return (
    <>
      <MoviesStateContext.Provider value={state}>
        <MoviesActionContext.Provider value={{ fetchMovies, mostRatedMovies}}>
          {children}
        </MoviesActionContext.Provider>
      </MoviesStateContext.Provider>
    </>
  );
};

function useMovieState() {
  const context = useContext(MoviesStateContext);
  if (!context) {
    throw new Error("useMovieState must be used within a MovieProvider");
  }
  return context;
}

function useMovieAction() {
  const context = useContext(MoviesActionContext);
  if (context === undefined) {
    throw new Error("useMovieAction must be used within a MovieProvider");
  }
  return context;
}

function useMovie() {
  return {
    ...useMovieState(),
    ...useMovieAction(),
  };
}

export { useMovieState, useMovieAction, useMovie };
