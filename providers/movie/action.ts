import { createAction } from 'redux-actions';
import { IMovieStateContext } from './context';
import { IMovie } from '../../interfaces';

export enum movieActionEnum {
  fetchMoviesRequest = 'GETALL',
  mostRatedMovies= "MOSTRATED"
}

export const fetchMoviesRequestAction = createAction<IMovieStateContext, IMovie[]>(movieActionEnum.fetchMoviesRequest,(FetchedMovies) => ({ FetchedMovies }));
export const mostRatedMovieRequestAction = createAction<IMovieStateContext, IMovie[]>(movieActionEnum.mostRatedMovies,(MostRatedMovies) => ({ MostRatedMovies}));



