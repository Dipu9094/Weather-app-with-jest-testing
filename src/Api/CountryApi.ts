export const getCountryData = async (name: string) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    return await res.json();
};

export const getWeatherData = (capital: string | undefined) => {
    return fetch(
        `http://api.weatherstack.com/current?access_key=39ebf5f7a9365e8f8fd51d43b7922862&query=${capital}`
    ).then((res) => res.json());
};
