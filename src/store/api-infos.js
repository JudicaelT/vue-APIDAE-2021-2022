export const API_URL = "https://dsv-api-recipe.herokuapp.com/";

export function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.tokenJWT)
    return { Authorization: "Bearer " + user.tokenJWT };
  return {};
}
