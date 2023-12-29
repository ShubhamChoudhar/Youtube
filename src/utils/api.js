import axios from "axios";
import { BASE_URL } from "../assets/constants.js";

const options = {
    params: {
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_YOUTUBE_API_KEY,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

export const fetchDataFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};