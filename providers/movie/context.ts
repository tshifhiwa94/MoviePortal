import { createContext } from 'react';
import { IMovie } from '../../interfaces';



export interface IMovieStateContext {
  readonly FetchedMovies?: IMovie[];
  readonly MovieId?: string;
  readonly MostRatedMovies?:IMovie[];
}

export const INITIAL_STATE: IMovieStateContext = {};

export interface IMovieActionsContext {
  fetchMovies: () => void;
  mostRatedMovies:()=>void;
}

export const MoviesStateContext = createContext<IMovieStateContext>(INITIAL_STATE);

export const MoviesActionContext = createContext<IMovieActionsContext>(undefined);


