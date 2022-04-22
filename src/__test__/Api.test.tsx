import * as API from "../Api/CountryApi";
import { InitCountryInfo, InitWeatherInfo } from "../Interfaces/Interface";

const sampleData: InitCountryInfo[] =[ {
    capital: ["Delhi"],
    name: {
        common: "india",
    },
    latlng: [20, 77],
    population: 1380004385,
    flags: {
        svg: "https://dsfdsa.com/in.svg",
    },
}]

const weatherData: InitWeatherInfo = {
    temperature: 25,
    weather_icons: ["https://assets.png"],
    wind_speed: 20,
    precip: 0,
};

describe("Country api calling", () => {
    it("should render api calling", async() => {
        jest.spyOn(API, "getCountryData").mockImplementation(() => {
            return Promise.resolve(sampleData);
        });
        return await API.getCountryData("india").then((data) => {
            expect(data).toBeDefined();
            expect(data[0].capital[0]).toEqual("Delhi");
        });
    });
});

describe("Capital weather api", () => {
    it("should render capital weather", async() => {
        jest.spyOn(API, "getWeatherData").mockImplementation(() => {
            return Promise.resolve(weatherData);
        });
        return await API.getWeatherData("Delhi").then((data) => {
            expect(data).toBeDefined();
        });
    });
});
