import { IMovieStateContext } from './context';
import { movieActionEnum } from './action';
import { Action } from 'redux-actions';

export function UserReducer(
  incomingState: IMovieStateContext,
  action: Action<IMovieStateContext>
): IMovieStateContext {
  const { type, payload } = action;

  switch (type) {
    case movieActionEnum.fetchMoviesRequest:
      return { ...incomingState, ...payload };
    default:
      return incomingState;
  }
}
