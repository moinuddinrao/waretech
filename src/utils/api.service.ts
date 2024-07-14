import axios from "axios";

// Define the API endpoints
export const endpoints = {
  customer: {
    get: {
      cacheKey: ["customers"],
      url: "/RetrieveAccounts/ReactCustomer",
    },
  },
};

// Define the API service using Axios
const apiService = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
});

// Define the GET function
export const GET = <Response>(url: string) => apiService.get<Response>(url);
