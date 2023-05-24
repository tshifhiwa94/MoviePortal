import { createContext } from 'react';
import { IMovie } from '../../interfaces';

export interface IWatchListStateContext {
  readonly Movie?: IMovie;
  readonly MovieId?: string;
}

export const INITIAL_STATE: IWatchListStateContext = {};

export interface IWatchListActionContext {
  addMovieToWatchlist?: (payload: IMovie) => void;
  removeMovieFromWatchlist?: (payload: string) => void;
  addMovieToWatched?: (payload: IMovie) => void;
  moveToWatchlist?: (payload: IMovie) => void;
  removeFromWatched?: (payload: string) => void;
}

export const WatchListContext = createContext<IWatchListStateContext>(INITIAL_STATE);
export const WatchListActionContext = createContext<IWatchListActionContext>({});
