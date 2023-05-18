import { createContext } from 'react';

export interface IMovie {
  id?: string;
  title: string;
  starring: string;
  duration: string;
  categoryName: string;
}

export interface IMovieStateContext {
  readonly FetchedMovies?: IMovie[];
}

export const INITIAL_STATE: IMovieStateContext = {};

export interface IMovieActionsContext {
  fetchMovies: () => void;
}

export const MoviesStateContext = createContext<IMovieStateContext>(INITIAL_STATE);

export const MoviesActionContext = createContext<IMovieActionsContext>(undefined);
