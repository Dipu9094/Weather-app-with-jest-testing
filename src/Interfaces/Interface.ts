export interface InitCountryInfo {
    capital: string[];
    population: number;
    latlng: number[];
    flags: {
      svg: string;
    };
    name:{
      common:string
    }
  }
  
  export interface InitWeatherInfo {
    temperature: number;
    weather_icons: string[];
    wind_speed: number;
    precip: number;
  }
  

  export interface inItNotFound{
    status:number,
    message:string
  }

