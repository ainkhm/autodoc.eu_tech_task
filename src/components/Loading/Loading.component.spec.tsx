import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Loading } from "./Loading.component";

describe("Loading Component", () => {
  it("renders the loading message", () => {
    const { getByText } = render(<Loading />);

    const loadingMessage = getByText("Loading data from the server...");
    expect(loadingMessage).toBeInTheDocument();
  });

  it("renders the Sentry loader", () => {
    const { container } = render(<Loading />);

    const sentryLoader = container.querySelector(".Sentry");
    expect(sentryLoader).toBeInTheDocument();
  });
});
