import React from "react";
import renderer from "react-test-renderer";
import PlayerControls from "./player-controls";

const noop = () => {};

it(`Should render Player controls correctly`, () => {
  const tree = renderer
    .create(
        <PlayerControls
          name={`Aviator`}
          isPlaying={true}
          getTimeLeft={noop}
          getProgress={noop}
          onPlayPauseClick={noop}
          onFullscreenClick={noop}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
