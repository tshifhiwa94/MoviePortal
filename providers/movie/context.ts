import { createContext } from 'react';
import { IMovie } from '../../interfaces';



export interface IMovieStateContext {
  readonly FetchedMovies?: IMovie[];
  readonly MovieId?: string;
}

export const INITIAL_STATE: IMovieStateContext = {};

export interface IMovieActionsContext {
  fetchMovies: () => void;
  getMovie: (payload:string) => void;
}

export const MoviesStateContext = createContext<IMovieStateContext>(INITIAL_STATE);

export const MoviesActionContext = createContext<IMovieActionsContext>(undefined);


