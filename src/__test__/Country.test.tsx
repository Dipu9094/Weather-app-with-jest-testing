import { act, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import React from "react";
import { MemoryRouter, Router } from "react-router-dom";
import { getCountryData, getWeatherData } from "../Api/CountryApi";
import Country from "../Compoents/Country";

describe("CountryInfo component and unit testing=>", () => {
    it("should render component", () => {
        const history = createMemoryHistory();
        render(
            <Router history={history}>
                <Country />
            </Router>
        );
        const countryInfo = screen.getByTestId("countryInfo");
        expect(countryInfo).toBeInTheDocument();
    });

    it("should load country data", async () => {
        return await getCountryData("Bangladesh").then((data) => {
            expect(data).toBeDefined();
            expect(data[0].capital[0]).toEqual("Dhaka");
        });
    });

    it("should load capital weather data", async () => {
        return await getWeatherData("Dhaka").then((data) => {
            expect(data).toBeDefined();
        });
    });

    test("button try again", async () => {
        // eslint-disable-next-line testing-library/no-unnecessary-act
        await act(async () => {
            render(
                <MemoryRouter initialEntries={["/country/bd"]}>
                    <Country/>
                </MemoryRouter>
            );
        });

        const buttonTest = await screen.findByTestId("try_again");
        expect(buttonTest).toBeInTheDocument();
    });
});
