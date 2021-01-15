import React from "react";
import ReactDOMServer from "react-dom/server";
import HtmlEmojiCountryCodeSelector from "../../src";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

test("Snapshot test of the generated html code", () => {
  const component = (
    <HtmlEmojiCountryCodeSelector>
      <option>Default</option>
    </HtmlEmojiCountryCodeSelector>
  );
  const render = ReactDOMServer.renderToString(component);
  expect(render).toMatchSnapshot();
});

test("Events are called", () => {
  const mockCallback = jest.fn((e) => {});
  const component = shallow(
    <HtmlEmojiCountryCodeSelector onChange={mockCallback} />
  );
  component.simulate("change");
  expect(mockCallback).toBeCalledTimes(1);
});
