export const baseUrl =
  process.env.REACT_APP_BASE_URL || "http://localhost:3000";
export const backendUrl =
  process.env.NODE_ENV === "production"
    ? "https://picarus.herokuapp.com"
    : "http://localhost:8080";
//   process.env.REACT_APP_BASE_URL || "http://localhost:8080";
