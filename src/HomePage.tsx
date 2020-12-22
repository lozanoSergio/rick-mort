import React, { Fragment, Suspense, useContext } from "react";
import { IEpisodeProps } from "./interfaces";
import { Store } from "./Store";
import { fetchDataAction, toggleFavAction } from "./Actions";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function HomePage() {
  const { state, dispatch } = useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  return (
    <Fragment>
      <Suspense fallback={<div>loading...</div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </Suspense>
    </Fragment>
  );
}
