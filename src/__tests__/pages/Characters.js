import React from "react";
import axios from "axios";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Characters from "../../pages/Characters";

jest.mock("axios");

afterEach(cleanup);

const mockChars = {
  info: {
    count: 826,
    pages: 42,
    next: "https://rickandmortyapi.com/api/character/?page=2",
    prev: null,
  },
  results: [
    {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/42",
        "https://rickandmortyapi.com/api/episode/43",
        "https://rickandmortyapi.com/api/episode/44",
        "https://rickandmortyapi.com/api/episode/45",
        "https://rickandmortyapi.com/api/episode/46",
        "https://rickandmortyapi.com/api/episode/47",
        "https://rickandmortyapi.com/api/episode/48",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/50",
        "https://rickandmortyapi.com/api/episode/51",
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    },
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "unknown",
        url: "",
      },
      location: {
        name: "Citadel of Ricks",
        url: "https://rickandmortyapi.com/api/location/3",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
        "https://rickandmortyapi.com/api/episode/3",
        "https://rickandmortyapi.com/api/episode/4",
        "https://rickandmortyapi.com/api/episode/5",
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/13",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/37",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/42",
        "https://rickandmortyapi.com/api/episode/43",
        "https://rickandmortyapi.com/api/episode/44",
        "https://rickandmortyapi.com/api/episode/45",
        "https://rickandmortyapi.com/api/episode/46",
        "https://rickandmortyapi.com/api/episode/47",
        "https://rickandmortyapi.com/api/episode/48",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/50",
        "https://rickandmortyapi.com/api/episode/51",
      ],
      url: "https://rickandmortyapi.com/api/character/2",
      created: "2017-11-04T18:50:21.651Z",
    },
    {
      id: 3,
      name: "Summer Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/17",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/42",
        "https://rickandmortyapi.com/api/episode/43",
        "https://rickandmortyapi.com/api/episode/44",
        "https://rickandmortyapi.com/api/episode/45",
        "https://rickandmortyapi.com/api/episode/46",
        "https://rickandmortyapi.com/api/episode/47",
        "https://rickandmortyapi.com/api/episode/48",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/51",
      ],
      url: "https://rickandmortyapi.com/api/character/3",
      created: "2017-11-04T19:09:56.428Z",
    },
    {
      id: 4,
      name: "Beth Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/6",
        "https://rickandmortyapi.com/api/episode/7",
        "https://rickandmortyapi.com/api/episode/8",
        "https://rickandmortyapi.com/api/episode/9",
        "https://rickandmortyapi.com/api/episode/10",
        "https://rickandmortyapi.com/api/episode/11",
        "https://rickandmortyapi.com/api/episode/12",
        "https://rickandmortyapi.com/api/episode/14",
        "https://rickandmortyapi.com/api/episode/15",
        "https://rickandmortyapi.com/api/episode/16",
        "https://rickandmortyapi.com/api/episode/18",
        "https://rickandmortyapi.com/api/episode/19",
        "https://rickandmortyapi.com/api/episode/20",
        "https://rickandmortyapi.com/api/episode/21",
        "https://rickandmortyapi.com/api/episode/22",
        "https://rickandmortyapi.com/api/episode/23",
        "https://rickandmortyapi.com/api/episode/24",
        "https://rickandmortyapi.com/api/episode/25",
        "https://rickandmortyapi.com/api/episode/26",
        "https://rickandmortyapi.com/api/episode/27",
        "https://rickandmortyapi.com/api/episode/28",
        "https://rickandmortyapi.com/api/episode/29",
        "https://rickandmortyapi.com/api/episode/30",
        "https://rickandmortyapi.com/api/episode/31",
        "https://rickandmortyapi.com/api/episode/32",
        "https://rickandmortyapi.com/api/episode/33",
        "https://rickandmortyapi.com/api/episode/34",
        "https://rickandmortyapi.com/api/episode/35",
        "https://rickandmortyapi.com/api/episode/36",
        "https://rickandmortyapi.com/api/episode/38",
        "https://rickandmortyapi.com/api/episode/39",
        "https://rickandmortyapi.com/api/episode/40",
        "https://rickandmortyapi.com/api/episode/41",
        "https://rickandmortyapi.com/api/episode/42",
        "https://rickandmortyapi.com/api/episode/43",
        "https://rickandmortyapi.com/api/episode/44",
        "https://rickandmortyapi.com/api/episode/45",
        "https://rickandmortyapi.com/api/episode/46",
        "https://rickandmortyapi.com/api/episode/47",
        "https://rickandmortyapi.com/api/episode/48",
        "https://rickandmortyapi.com/api/episode/49",
        "https://rickandmortyapi.com/api/episode/51",
      ],
      url: "https://rickandmortyapi.com/api/character/4",
      created: "2017-11-04T19:22:43.665Z",
    },
  ],
};

describe("Characters", () => {
  test("Render characters page and cards", async () => {
    axios.get.mockResolvedValueOnce({ data: mockChars });

    render(
      <MemoryRouter initialEntries={["/chars"]}>
        <Characters
          favs={[]}
          setFavs={(favs) => favs}
          savedFavs={[
            {
              id: 1,
              name: "Rick Sanchez",
              status: "Alive",
              species: "Human",
              type: "",
              gender: "Male",
              origin: {
                name: "Earth (C-137)",
                url: "https://rickandmortyapi.com/api/location/1",
              },
              location: {
                name: "Citadel of Ricks",
                url: "https://rickandmortyapi.com/api/location/3",
              },
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              episode: [
                "https://rickandmortyapi.com/api/episode/1",
                "https://rickandmortyapi.com/api/episode/2",
                "https://rickandmortyapi.com/api/episode/3",
                "https://rickandmortyapi.com/api/episode/4",
                "https://rickandmortyapi.com/api/episode/5",
                "https://rickandmortyapi.com/api/episode/6",
                "https://rickandmortyapi.com/api/episode/7",
                "https://rickandmortyapi.com/api/episode/8",
                "https://rickandmortyapi.com/api/episode/9",
                "https://rickandmortyapi.com/api/episode/10",
                "https://rickandmortyapi.com/api/episode/11",
                "https://rickandmortyapi.com/api/episode/12",
                "https://rickandmortyapi.com/api/episode/13",
                "https://rickandmortyapi.com/api/episode/14",
                "https://rickandmortyapi.com/api/episode/15",
                "https://rickandmortyapi.com/api/episode/16",
                "https://rickandmortyapi.com/api/episode/17",
                "https://rickandmortyapi.com/api/episode/18",
                "https://rickandmortyapi.com/api/episode/19",
                "https://rickandmortyapi.com/api/episode/20",
                "https://rickandmortyapi.com/api/episode/21",
                "https://rickandmortyapi.com/api/episode/22",
                "https://rickandmortyapi.com/api/episode/23",
                "https://rickandmortyapi.com/api/episode/24",
                "https://rickandmortyapi.com/api/episode/25",
                "https://rickandmortyapi.com/api/episode/26",
                "https://rickandmortyapi.com/api/episode/27",
                "https://rickandmortyapi.com/api/episode/28",
                "https://rickandmortyapi.com/api/episode/29",
                "https://rickandmortyapi.com/api/episode/30",
                "https://rickandmortyapi.com/api/episode/31",
                "https://rickandmortyapi.com/api/episode/32",
                "https://rickandmortyapi.com/api/episode/33",
                "https://rickandmortyapi.com/api/episode/34",
                "https://rickandmortyapi.com/api/episode/35",
                "https://rickandmortyapi.com/api/episode/36",
                "https://rickandmortyapi.com/api/episode/37",
                "https://rickandmortyapi.com/api/episode/38",
                "https://rickandmortyapi.com/api/episode/39",
                "https://rickandmortyapi.com/api/episode/40",
                "https://rickandmortyapi.com/api/episode/41",
                "https://rickandmortyapi.com/api/episode/42",
                "https://rickandmortyapi.com/api/episode/43",
                "https://rickandmortyapi.com/api/episode/44",
                "https://rickandmortyapi.com/api/episode/45",
                "https://rickandmortyapi.com/api/episode/46",
                "https://rickandmortyapi.com/api/episode/47",
                "https://rickandmortyapi.com/api/episode/48",
                "https://rickandmortyapi.com/api/episode/49",
                "https://rickandmortyapi.com/api/episode/50",
                "https://rickandmortyapi.com/api/episode/51",
              ],
              url: "https://rickandmortyapi.com/api/character/1",
              created: "2017-11-04T18:48:46.250Z",
            },
          ]}
          setSavedFavs={(savedFavs) => savedFavs}
        ></Characters>
      </MemoryRouter>
    );

    //test if axios called
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(expect.stringContaining("rick"));

    //test if render one card for each char
    expect(await screen.findAllByTestId("itemSmall")).toHaveLength(4);

    // test if small item showing and big item not showing
    expect(await screen.findAllByTestId("img-item-small")).toHaveLength(4);
    expect(await screen.queryByTestId("img-item-big")).not.toBeInTheDocument();
    expect(await screen.queryByText("Rick Sanchez")).not.toBeInTheDocument();

    //test if favs btn rendering correctly
    expect(await screen.findAllByTestId("fav-btn")).toHaveLength(4);
    expect(await screen.findAllByTestId("favorite-border")).toHaveLength(3);
    expect(await screen.findAllByTestId("favorite")).toHaveLength(1);

    //test if click on char img open big item
    fireEvent.click(screen.queryAllByTestId("img-item-small")[0]);
    expect(await screen.findByText("Rick Sanchez")).toBeInTheDocument();
  });

  test("should navigate details page", async () => {
    axios.get.mockResolvedValueOnce({ data: mockChars });
    const history = createMemoryHistory({ initialEntries: ["/chars"] });
    render(
      <Router location={history.location} navigator={history}>
        <Characters
          favs={[]}
          setFavs={(favs) => favs}
          savedFavs={[]}
          setSavedFavs={(savedFavs) => savedFavs}
        ></Characters>
      </Router>
    );
    expect(await screen.findAllByTestId("img-item-small")).toHaveLength(4);
    fireEvent.click(screen.queryAllByTestId("img-item-small")[0]);
    expect(await screen.findByText("See complete info...")).toBeInTheDocument();
    fireEvent.click(screen.queryByText("See complete info..."));
    expect(history.location.pathname).toBe("/chars/1");
  });
});