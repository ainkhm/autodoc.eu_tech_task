import React from "react";
import { render } from "@testing-library/react";
import { HorizontalSlider } from "./HorizontalSlider.component";

jest.mock("react-slick", () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  };
});

const episodesMock = [
  { id: 1, name: "Episode 1", air_date: "2023-09-01" },
  { id: 2, name: "Episode 2", air_date: "2023-09-02" },
];

describe("HorizontalSlider", () => {
  it("renders without errors", () => {
    const { container } = render(
      <HorizontalSlider episodes={episodesMock} isMobileScreen={true} />
    );
    expect(container).toBeInTheDocument();
  });

  it("renders the correct number of episodes", () => {
    const { getAllByTestId } = render(
      <HorizontalSlider episodes={episodesMock} isMobileScreen={true} />
    );
    const episodeElements = getAllByTestId("episode");
    expect(episodeElements.length).toBe(episodesMock.length);
  });
});
