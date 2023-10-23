import axios from "axios";

interface companies{ 
    id: string;
    name: string;
}

export function fetchCompanies(): Promise<companies[]> {
    return axios
      .get<companies[]>(`${process.env.REACT_APP_API_URL}/companies`)
      .then((response) => response.data)
  }