export interface IClient {
  id: string;
  name: string;
}

export interface IEmployee {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export interface IProject {
  id: string;
  clientId: string;
  employeeIds: string[];
  contract: {
    startDate: string;
    endDate: string;
    size: string;
  };
}

export interface IProjectProps {
  id: string;
  clientId: string;
  employeeIds: string[];
  startDate: string;
  endDate: string;
  size: string;
}

export interface APIResponse {
  data: any;
  error: any;
  loading: boolean;
}
