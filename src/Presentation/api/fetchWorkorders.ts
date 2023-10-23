import axios from "axios";

interface checklistData {
    completed: boolean;
    task: string;
}

interface workorders {
    id: string;
    assetsId: string;
    assignedUsersId: [string];
    checklist: [checklistData];
    description: string;
    priority: string;
    stuatus: string;
    title: string;
}

export function fetchWorkorders(): Promise<workorders[]> {
    return axios
      .get<workorders[]>(`${process.env.REACT_APP_API_URL}/workorders`)
      .then((response) => response.data)
  }
  