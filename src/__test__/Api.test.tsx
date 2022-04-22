import * as API from "../Api/CountryApi";

const sampleData: any = {
    name: {
        common: "India",
        official: "Republic of India",
        nativeName: {
            eng: {
                official: "Republic of India",
                common: "India",
            },
            hin: {
                official: "भारत गणराज्य",
                common: "भारत",
            },
            tam: {
                official: "இந்தியக் குடியரசு",
                common: "இந்தியா",
            },
        },
    },
    tld: [".in"],
    cca2: "IN",
    ccn3: "356",
    cca3: "IND",
    cioc: "IND",
    independent: true,
    status: "officially-assigned",
    unMember: true,
    currencies: {
        INR: {
            name: "Indian rupee",
            symbol: "₹",
        },
    },
    idd: {
        root: "+9",
        suffixes: ["1"],
    },
    capital: ["New Delhi"],
    altSpellings: [
        "IN",
        "Bhārat",
        "Republic of India",
        "Bharat Ganrajya",
        "இந்தியா",
    ],
    region: "Asia",
    subregion: "Southern Asia",
    languages: {
        eng: "English",
        hin: "Hindi",
        tam: "Tamil",
    },
    translations: {
        ara: {
            official: "جمهورية الهند",
            common: "الهند",
        },
        ces: {
            official: "Indická republika",
            common: "Indie",
        },
        cym: {
            official: "Republic of India",
            common: "India",
        },
        deu: {
            official: "Republik Indien",
            common: "Indien",
        },
        est: {
            official: "India Vabariik",
            common: "India",
        },
        fin: {
            official: "Intian tasavalta",
            common: "Intia",
        },
        fra: {
            official: "République de l'Inde",
            common: "Inde",
        },
        hrv: {
            official: "Republika Indija",
            common: "Indija",
        },
        hun: {
            official: "Indiai Köztársaság",
            common: "India",
        },
        ita: {
            official: "Repubblica dell'India",
            common: "India",
        },
        jpn: {
            official: "インド共和国",
            common: "インド",
        },
        kor: {
            official: "인도 공화국",
            common: "인도",
        },
        nld: {
            official: "Republiek India",
            common: "India",
        },
        per: {
            official: "جمهوری هندوستان",
            common: "هند",
        },
        pol: {
            official: "Republika Indii",
            common: "Indie",
        },
        por: {
            official: "República da Índia",
            common: "Índia",
        },
        rus: {
            official: "Республика Индия",
            common: "Индия",
        },
        slk: {
            official: "Indická republika",
            common: "India",
        },
        spa: {
            official: "República de la India",
            common: "India",
        },
        swe: {
            official: "Republiken Indien",
            common: "Indien",
        },
        urd: {
            official: "جمہوریہ بھارت",
            common: "بھارت",
        },
        zho: {
            official: "印度共和国",
            common: "印度",
        },
    },
    latlng: [20, 77],
    landlocked: false,
    borders: ["BGD", "BTN", "MMR", "CHN", "NPL", "PAK"],
    area: 3287590,
    demonyms: {
        eng: {
            f: "Indian",
            m: "Indian",
        },
        fra: {
            f: "Indienne",
            m: "Indien",
        },
    },
    flag: "🇮🇳",
    maps: {
        googleMaps: "https://goo.gl/maps/WSk3fLwG4vtPQetp7",
        openStreetMaps: "https://www.openstreetmap.org/relation/304716",
    },
    population: 1380004385,
    gini: {
        "2011": 35.7,
    },
    fifa: "IND",
    car: {
        signs: ["IND"],
        side: "left",
    },
    timezones: ["UTC+05:30"],
    continents: ["Asia"],
    flags: {
        png: "https://flagcdn.com/w320/in.png",
        svg: "https://flagcdn.com/in.svg",
    },
    coatOfArms: {
        png: "https://mainfacts.com/media/images/coats_of_arms/in.png",
        svg: "https://mainfacts.com/media/images/coats_of_arms/in.svg",
    },
    startOfWeek: "monday",
    capitalInfo: {
        latlng: [28.6, 77.2],
    },
    postalCode: {
        format: "######",
        regex: "^(\\d{6})$",
    },
};

const weatherData: any = {
    request: {
        type: "City",
        query: "New Delhi, India",
        language: "en",
        unit: "m",
    },
    location: {
        name: "New Delhi",
        country: "India",
        region: "Delhi",
        lat: "28.600",
        lon: "77.200",
        timezone_id: "Asia/Kolkata",
        localtime: "2022-04-22 02:06",
        localtime_epoch: 1650593160,
        utc_offset: "5.50",
    },
    current: {
        observation_time: "08:36 PM",
        temperature: 25,
        weather_code: 386,
        weather_icons: [
            "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0032_thundery_showers_night.png",
        ],
        weather_descriptions: [
            "Light Rain With Thunderstorm, Dust Storm, Thunderstorm",
        ],
        wind_speed: 19,
        wind_degree: 290,
        wind_dir: "WNW",
        pressure: 1010,
        precip: 0,
        humidity: 51,
        cloudcover: 75,
        feelslike: 25,
        uv_index: 1,
        visibility: 3,
        is_day: "no",
    },
};

describe("Country api calling", () => {
    it("should render api calling", () => {
        jest.spyOn(API, "getCountryData").mockImplementation(() => {
            return Promise.resolve(sampleData);
        });
    });
});

describe("Capital weather api", () => {
    it("should render capital weather", () => {
        jest.spyOn(API, "getWeatherData").mockImplementation(() => {
            return Promise.resolve(weatherData);
        });
    });
});
