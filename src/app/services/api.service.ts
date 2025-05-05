import { API_URL } from "../constants";
import { Category } from "../interfaces";

export const fetchByCategory = async (category: Category) => {
  const res = await fetch(`${API_URL}/${category}`);
  if (!res.ok) {
    throw new Error("Failed to fetchByCategory data");
  }
  const data = await res.json();
  return data.results;

};

export const fetchById = async (category: Category, id: string) => {
  const res = await fetch(`${API_URL}/${category}/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetchById data");
  }
  const data = await res.json();
  return data;

};