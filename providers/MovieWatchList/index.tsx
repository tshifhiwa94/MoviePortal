import React, { useContext, useEffect, useReducer } from 'react';
import  WatchReducer from './reducer';
import { INITIAL_STATE, WatchListActionContext, WatchListContext } from './context';
import {
  addMovieToWatchRequestAction,
  addMovieWatchedRequestAction,
  moveMovieToWatchListRequestAction,
  removeMovieFromWatchListRequestAction,
  removeMovieWatchedRequestAction
} from './action';

export const MovieWatchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(WatchReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("watched", JSON.stringify(state.watched));
  }, [state.watchlist, state.watched]);

  const addMovieToWatchlist = (movie) => {
    dispatch(addMovieToWatchRequestAction(movie));
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch(removeMovieFromWatchListRequestAction(id));
  };

  const addMovieToWatched = (movie) => {
    dispatch(addMovieWatchedRequestAction(movie));
  };

  const moveToWatchlist = (movie) => {
    dispatch(moveMovieToWatchListRequestAction(movie));
  };

  const removeFromWatched = (id) => {
    dispatch(removeMovieWatchedRequestAction(id));
  };

  return (
    <WatchListContext.Provider value={state}>
      <WatchListActionContext.Provider
        value={{
          addMovieToWatchlist,
          removeMovieFromWatchlist,
          addMovieToWatched,
          moveToWatchlist,
          removeFromWatched
        }}
      >
        {children}
      </WatchListActionContext.Provider>
    </WatchListContext.Provider>
  );
};

function useWatchListState() {
  const context = useContext(WatchListContext);
  if (!context) {
    throw new Error("useWatchListState must be used within a WatchListProvider");
  }
  return context;
}

function useWatchListAction() {
  const context = useContext(WatchListActionContext);
  if (!context) {
    throw new Error("useWatchListAction must be used within a WatchListProvider");
  }
  return context;
}

function useWatchList() {
  return {
    ...useWatchListState(),
    ...useWatchListAction()
  };
}

export { useWatchListState, useWatchListAction, useWatchList };
