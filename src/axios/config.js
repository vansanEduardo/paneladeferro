import axios from "axios";

const recipesFetch = axios.create({
  baseURL: "https://dummyjson.com",
});

export default recipesFetch;