import React, { Suspense, useContext } from "react";
import { IEpisodeProps } from "./interfaces";
import { Store } from "./Store";
import { toggleFavAction } from "./Actions";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </Suspense>
  );
}
