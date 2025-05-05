import { API_URL } from "../constants";
import { Category } from "../interfaces";

export const fetchByCategory = async (category: Category) => {
  const res = await fetch(`${API_URL}${category}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.results;

};