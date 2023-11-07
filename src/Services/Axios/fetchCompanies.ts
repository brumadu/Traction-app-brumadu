import axios from "axios";

export interface companies{ 
    id: string;
    name: string;
}

export async function fetchCompanies(): Promise<companies[]> {
    return axios
      .get<companies[]>(`${process.env.REACT_APP_API_URL}/companies`)
      .then((response) => response.data)
  }