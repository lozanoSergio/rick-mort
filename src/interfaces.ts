/**
 * All the interfaces
 */

export type Dispatch = React.Dispatch<IAction>

export interface IState {
  episodes: Array<IEpisode>;
  favourites: Array<IEpisode>;
}

export interface IAction {
  type: string;
  payload: Array<IEpisode> | any;
}

export interface IEpisode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: { medium: string; original: string };
  name: string;
  season: number;
  number: number;
  runtime: number;
  summary: string;
  url: string;
}

export interface IEpisodeProps {
  episodes: IEpisode[];
  store: { state: IState; dispatch: Dispatch };
  toggleFavAction: (state: IState, dispatch: Dispatch, episode: IEpisode) => IAction;
  favourites: Array<IEpisode>;
}
