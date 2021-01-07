import React from "react";
import {configure, mount} from "enzyme";
import {Link, MemoryRouter} from "react-router-dom";
import Adapter from "enzyme-adapter-react-16";
import Avatar from "./avatar";

configure({adapter: new Adapter()});

it(`Click on Avatar link routes to mylist`, () => {
  const wrapper = mount(<MemoryRouter>
    <Avatar />
  </MemoryRouter>);

  expect(wrapper.find(Link).props().to).toBe(`/mylist`);
});
