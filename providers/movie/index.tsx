import React, { useReducer, useContext ,useEffect} from "react";
import {MoviesStateContext,MoviesActionContext, INITIAL_STATE} from "./context";
import { fetchMoviesRequestAction} from "./action";
import { UserReducer } from "./reducer";
import { useGet } from "restful-react";

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, INITIAL_STATE);


  const { data: movieData } = useGet({
    path: "services/app/Movie/GetAll",
  });
  if (!movieData) {
    return <div>Loading...</div>;
    
  }
 
console.log(movieData.result);

  const fetchMovies = () => {

    dispatch(fetchMoviesRequestAction(movieData.result));
  };

  const  mostRatedMovies = (payload:string)=>{

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
