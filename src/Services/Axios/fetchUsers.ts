import axios from "axios";

export interface users{
    id: string;
    companyId: string;
    email: string;
    name: string;
    unitId: string;
}

export async function fetchUsers(): Promise<users[]> {
    return axios
      .get<users[]>(`${process.env.REACT_APP_API_URL}/users`)
      .then((response) => response.data)
  }
  