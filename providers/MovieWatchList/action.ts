import { createAction } from 'redux-actions';
import { IWatchListStateContext } from './context';
import { IMovie } from '../../interfaces';


export enum WatchListActionEnum {
    addMovieToWatchRequest = 'ADD_MOVIE_TO_WATCHLIST',
    removeMovieFromWatchRequest= "REMOVE_MOVIE_FROM_WATCHLIST",
    addMovieWatchedRequest= "ADD_MOVIE_TO_WATCHED",
    moveMovieToWatchListRequest= "MOVE_TO_WATCHLIST",
    removeMovieWatchedRequest= "REMOVE_FROM_WATCHED"
  }
  export const addMovieToWatchRequestAction = createAction<IWatchListStateContext, IMovie>(WatchListActionEnum.addMovieToWatchRequest,(Movie) => ({ Movie}));
  export const removeMovieFromWatchListRequestAction = createAction<IWatchListStateContext, string>(WatchListActionEnum.removeMovieFromWatchRequest,(MovieId) => ({ MovieId}));
  export const addMovieWatchedRequestAction = createAction<IWatchListStateContext, IMovie>(WatchListActionEnum.addMovieWatchedRequest,(Movie) => ({ Movie}));
  export const moveMovieToWatchListRequestAction = createAction<IWatchListStateContext, IMovie>(WatchListActionEnum.moveMovieToWatchListRequest,(Movie) =>({ Movie}));
  export const removeMovieWatchedRequestAction = createAction<IWatchListStateContext, string>(WatchListActionEnum.removeMovieWatchedRequest,(MovieId) => ({MovieId}));
