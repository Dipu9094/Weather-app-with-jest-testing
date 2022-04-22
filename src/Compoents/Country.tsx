import {
    Box,
    Button,
    Card,
    CardMedia,
    CircularProgress,
    Link,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCountryData, getWeatherData } from "../Api/CountryApi";
import { InitCountryInfo, InitWeatherInfo } from "../Interfaces/Interface";

export interface params {
    name: string;
}
const Country = () => {
    const { name } = useParams<params>();

    const [loading, setLoading] = useState<boolean>(false);
    const [weatherLoading, setWeatherLoading] = useState<boolean>(false);

    const [countryInfo, setCountryInfo] = useState<InitCountryInfo>();
    const [weatherInfo, setWeatherInfo] = useState<InitWeatherInfo>();
    const [notFound, setnotFound] = useState<boolean>(false)

    useEffect(() => {
        getCountryInfo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getCountryInfo = async () => {
        try {
            setLoading(true);

            await getCountryData(name).then((data) => {
                setCountryInfo(data[0])
                if(data.status===404){
                    setnotFound(true)
                }
            

                
            });

            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log(e);
        }
    };
    const getWeatherInfo = async () => {
        try {
            setWeatherLoading(true);
            await getWeatherData(countryInfo?.capital[0]).then((data) =>
                setWeatherInfo(data.current)
            );

            setWeatherLoading(false);
        } catch (e) {
            setWeatherLoading(false);
            console.log(e);
        }
    };
    return (
        <div
            data-testid="countryInfo"
            style={{
                display: "grid",
                justifyContent: "center",
                alignContent: "center",
                height: "100vh",
                width: "100%",
                gap: "20px",
            }}
        >
            {loading ? (
                <CircularProgress />
            ) : countryInfo ? (
                <Card style={{ display: "flex", padding: "10px"}}>
                    <Box sx={{ mr: 2 }}>
                        <Typography>
                            {countryInfo?.name?.common} Information
                        </Typography>
                        <Typography
                            data-testid="capital"
                            variant="subtitle1"
                            component="div"
                        >
                            Capital: {countryInfo?.capital[0]}
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            Population: {countryInfo?.population}
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            Latitude: {countryInfo?.latlng[0]}
                            <sup>o</sup>
                        </Typography>
                        <Typography variant="subtitle1" component="div">
                            Langitude: {countryInfo?.latlng[1]}
                            <sup>o</sup>
                        </Typography>
                    </Box>
                    <CardMedia
                        component="img"
                        style={{ width: "300px" }}
                        image={countryInfo?.flags.svg}
                        alt="Live from Country Api"
                    />
                </Card>
            ) : 
            
                ''
            }

            {
                notFound &&
                <Box>
                    <Typography color="red">Country not Found!!</Typography>
                    <Link href="/" style={{ textDecoration: "none" }}>
                        <Button
                            data-testid="try_again"
                            variant="contained"
                            color="secondary"
                        >
                            Try Again
                        </Button>
                    </Link>
                </Box>
            }

            {countryInfo && (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={getWeatherInfo}
                >
                    Capital Weather
                </Button>
            )}
            {weatherLoading ? (
                <>
                    <CircularProgress />
                    <p>Loading capital weather info...</p>
                </>
            ) : (
                weatherInfo && (
                    <Card>
                        <Box style={{ padding: "10px" }}>
                            <Typography component="div" variant="h5">
                                {name}'s Capital {countryInfo?.capital[0]}{" "}
                                Weather Information
                            </Typography>
                            <CardMedia
                                component="img"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                }}
                                image={weatherInfo?.weather_icons[0]}
                                alt="Live from Country Api"
                            />
                            <Typography variant="subtitle1" component="div">
                                Temperature: {weatherInfo?.temperature}
                                <sup>o</sup> celcius
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                                Wind Speed: {weatherInfo?.wind_speed} km/h
                            </Typography>
                            <Typography variant="subtitle1" component="div">
                                Precipt: {weatherInfo?.precip}
                            </Typography>
                        </Box>
                    </Card>
                )
            )}
        </div>
    );
};

export default Country;
