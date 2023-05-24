import { IWatchListStateContext } from './context';
import { WatchListActionEnum } from './action';
import { Action } from 'redux-actions';

export default function WatchReducer(state, action) {


    switch (action.type) {
      case  WatchListActionEnum.addMovieToWatchRequest:
        return {
          ...state,
          Movie: {
            ...state.Movie,
            watchlist: [action.payload, ...state.Movie.watchlist],
          },
        };
      case WatchListActionEnum.removeMovieFromWatchRequest:
        return {
          ...state,
          Movie: {
            ...state.Movie,
            watchlist: state.Movie.watchlist.filter(
              (movie) => movie.id !== action.payload
            ),
          },
        };
      case WatchListActionEnum.addMovieWatchedRequest:
        return {
          ...state,
          Movie: {
            ...state.Movie,
            watchlist: state.Movie.watchlist.filter(
              (movie) => movie.id !== action.payload.id
            ),
            watched: [action.payload, ...state.Movie.watched],
          },
        };
      case WatchListActionEnum.moveMovieToWatchListRequest:
        return {
          ...state,
          Movie: {
            ...state.Movie,
            watched: state.Movie.watched.filter(
              (movie) => movie.id !== action.payload.id
            ),
            watchlist: [action.payload, ...state.Movie.watchlist],
          },
        };
      case WatchListActionEnum.removeMovieWatchedRequest:
        return {
          ...state,
          Movie: {
            ...state.Movie,
            watched: state.Movie.watched.filter(
              (movie) => movie.id !== action.payload
            ),
          },
        };
      default:
        return state;
    }
  }
  