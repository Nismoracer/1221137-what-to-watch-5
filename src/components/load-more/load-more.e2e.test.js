import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import LoadMore from "./load-more";

configure({adapter: new Adapter()});

const mockEvent = {
  preventDefault() {}
};


it(`Click on Load more button calls callback`, () => {
  const handleLoadMoreClick = jest.fn();
  const wrapper = shallow(<LoadMore
    onLoadMoreClick={handleLoadMoreClick}>
  </LoadMore>);

  wrapper.find(`.catalog__button`).simulate(`click`, mockEvent);
  expect(handleLoadMoreClick).toHaveBeenCalledTimes(1);
});
