import axios from "axios";

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

export interface assets {
    data: any;
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
    unitId: number;
}

export function fetchAssets(): Promise<assets[]> {
    return axios
      .get<assets[]>(`${process.env.REACT_APP_API_URL}/assets`)
      .then((response) => response.data)
  }
  