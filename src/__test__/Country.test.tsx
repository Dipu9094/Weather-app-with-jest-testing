import { act, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { MemoryRouter, Router } from "react-router-dom";
import * as API from "../Api/CountryApi";
import { getCountryData, getWeatherData } from "../Api/CountryApi";
import Country from "../Compoents/Country";
import {
    InitCountryInfo,
    inItNotFound,
    InitWeatherInfo,
} from "../Interfaces/Interface";

const sampleData: InitCountryInfo[] = [
    {
        capital: ["Delhi"],
        name: {
            common: "india",
        },
        latlng: [20, 77],
        population: 1380004385,
        flags: {
            svg: "https://dsfdsa.com/in.svg",
        },
    },
];

const weatherData: InitWeatherInfo = {
    temperature: 25,
    weather_icons: ["https://assets.png"],
    wind_speed: 20,
    precip: 0,
};

const notFound: inItNotFound = {
    status: 404,
    message: "not found",
};

describe("CountryInfo component and unit testing=>", () => {
    beforeEach(() => {
        jest.spyOn(API, "getCountryData").mockImplementation(() => {
            return Promise.resolve(sampleData);
        });

        jest.spyOn(API, "getWeatherData").mockImplementation(() => {
            return Promise.resolve(weatherData);
        });
    });

    it("should render component", async () => {
        const history = createMemoryHistory();
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <Router history={history}>
                    <Country />
                </Router>
            );
        });
        const countryInfo = screen.getByTestId("countryInfo");
        expect(countryInfo).toBeInTheDocument();
    });

    it("should load country data", async () => {
        return await getCountryData("india").then((data) => {
            expect(data).toBeDefined();
            expect(data[0].capital[0]).toEqual("Delhi");
        });
    });

    it("should load capital weather data", async () => {
        return await getWeatherData("Delhi").then((data) => {
            expect(data).toBeDefined();
        });
    });

    test("button try again", async () => {
        jest.spyOn(API, "getCountryData").mockImplementation(() => {
            return Promise.resolve(notFound);
        });
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <MemoryRouter initialEntries={["/country/bd454"]}>
                    <Country />
                </MemoryRouter>
            );
        });

        const buttonTest = await screen.findByTestId("try_again");
        expect(buttonTest).toBeInTheDocument();
    });
});
