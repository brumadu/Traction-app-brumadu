import axios from 'axios';

interface metricsData {
  lastUptimeAt: Date;
  totalCollectsUptime: number;
  totalUptime: number;
}

interface healthHistoryData {
  status: string;
  timeStamp: Date;
}

interface specificationsData {
  maxTemp: number;
  power: number;
  rpm: number;
}

export interface MyData {
    id: number;
    name: string;
    assignedUserIds: [string];
    companyId: string;
    healthHistory: [healthHistoryData];
    healthscore: number;
    image: string;
    metrics: metricsData;
    model: string;
    sensors: [string];
    specifications: specificationsData;
    status: string;
    unitId: number
   }

const API_BASE_URL = 'https://my-json-server.typicode.com/tractian/fake-api';

export function fetchAssets(): Promise<MyData[]> {
  return axios
    .get<MyData[]>(`${API_BASE_URL}/assets`)
    .then((response) => response.data);
}

export function createMyData(data: MyData): Promise<MyData> {
  return axios
    .post<MyData>(`${API_BASE_URL}/my-data`, data)
    .then((response) => response.data);
}
