import { jwtDecode } from "jwt-decode";

export function fetchDecodedToken() {
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  return decodedToken;
}
