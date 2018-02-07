import axios from "axios";

export const client = axios.create({
  baseURL: "http://pagesmanagement.azurewebsites.net/api/ResponsivePages",
  headers: {
    "Content-Type": "application/json"
  }
})
