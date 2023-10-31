import axios from "axios";

interface units {
    id: string;
    companyId: string;
    name: string;
}

export async function fetchUnits(): Promise<units[]> {
    return axios
      .get<units[]>(`${process.env.REACT_APP_API_URL}/units`)
      .then((response) => response.data)
  }
  