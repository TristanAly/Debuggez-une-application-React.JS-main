import { render, screen } from "@testing-library/react";
import Slider from "./index";
import { api, DataProvider } from "../../contexts/DataContext";

const data = {
  focus: [
    {
      title: "World economic forum",
      description:
        "Oeuvre à la coopération entre le secteur public et le privé.",
      date: "2022-02-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Gaming Day",
      description: "Evenement mondial autour du gaming",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
    {
      title: "World Farming Day",
      description: "Evenement mondial autour de la ferme",
      date: "2022-01-29T20:28:45.744Z",
      cover: "/images/evangeline-shaw-nwLTVwb7DbU-unsplash1.png",
    },
  ],
};
const dataDate = {
  focus: [
    { date: "2023-01-01" },
    { date: "2022-06-15" },
    { date: "2023-05-20" },
  ],
};

describe("When slider is created", () => {
  it("a list card is displayed", async () => {
    window.console.error = jest.fn();
    api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Slider />
      </DataProvider>
    );
    await screen.findByText("World economic forum");
    await screen.findAllByText("janvier");
    await screen.findByText(
      "Oeuvre à la coopération entre le secteur public et le privé."
    );
  });
});

describe("byDateDesc", () => {
  it("should sort events from newest to oldest", () => {
    const result = dataDate?.focus.sort((evtA, evtB) =>
      new Date(evtB.date) > new Date(evtA.date) ? 1 : -1
    );

    expect(result).toEqual([
      { date: "2023-05-20" },
      { date: "2023-01-01" },
      { date: "2022-06-15" },
    ]);
  });
  it("should return an empty array if the data is empty", () => {
    const emptyDate = {
      focus: [],
    };
    const result = emptyDate?.focus.sort((evtA, evtB) =>
      new Date(evtB.date) > new Date(evtA.date) ? 1 : -1
    );

    expect(result).toEqual([]);
  });
});
