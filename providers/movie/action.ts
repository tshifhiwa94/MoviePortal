import { createAction } from 'redux-actions';
import { IMovieStateContext } from './context';
import { IMovie } from '../../interfaces';

export enum movieActionEnum {
  fetchMoviesRequest = 'GETALL',
  fetchMovieByIdRequest = 'GETMOVIEBYID',
}

export const fetchMoviesRequestAction = createAction<IMovieStateContext, IMovie[]>(movieActionEnum.fetchMoviesRequest,(FetchedMovies) => ({ FetchedMovies }));
export const fetchMovieByIdRequestAction = createAction<IMovieStateContext, string>(movieActionEnum.fetchMovieByIdRequest,(MovieId) => ({ MovieId }));


