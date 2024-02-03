import axios from "axios";
import { Country } from "../database/conn.js";

export async function loader() {
  try {
    const countriesDB = await Country.count({});
    if (countriesDB === 0) {
      const { data } = await axios("http://localhost:5000/countries");
      const countries = data.map((country) => ({
        id: country.cca3,
        commonName: country.name.common,
        officialName: country.name.official,
        capital: country.capital ? country.capital[0] : "NO INFORMATION",
        continent: country.continents[0],
        flag: country.flags.svg,
        population: country.population,
        area: country.area,
        location: country.maps.openStreetMaps,
      }));

      await Country.bulkCreate(countries);
    }
  } catch (error) {
    console.log(error);
  }
}
