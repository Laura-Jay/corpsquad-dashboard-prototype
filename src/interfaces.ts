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
  teamData?: IEmployee[]
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
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  data: any;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  error: any;
  loading: boolean;
}



export interface TeamAPIResponse {
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  teamData: any;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  error: any;
  loading: boolean;
 
}
