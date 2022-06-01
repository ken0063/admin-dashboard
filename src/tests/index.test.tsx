import { render } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    const { getByText } = render(<Home />);
    const textEl = getByText("Hello World");
    expect(textEl).toBeInTheDocument();
  });
});
