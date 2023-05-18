import { createAction } from 'redux-actions';
import { IMovie, IMovieStateContext } from './context';

export enum movieActionEnum {
  fetchMoviesRequest = 'GETALL',
}

export const fetchMoviesRequestAction = createAction<IMovieStateContext, IMovie[]>(movieActionEnum.fetchMoviesRequest,(FetchedMovies) => ({ FetchedMovies }));
