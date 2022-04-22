export const getCountryData = async (name: string) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    return await res.json();
};

export const getWeatherData = (capital: string | undefined) => {
    return fetch(
        `http://api.weatherstack.com/current?access_key=ffc041176594e68c0555718e137dd165&query=${capital}`
    ).then((res) => res.json());
};
