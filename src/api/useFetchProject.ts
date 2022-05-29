import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { APIResponse, IProjectProps, IEmployee } from "../interfaces";
import { isTemplateSpan } from "typescript";

export default function useFetch(url1: string, url2: string, id: string): APIResponse {
  const [data, setData] = useState< IProjectProps | null>(null);
  const [teamData, setTeamData] = useState< IEmployee[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          url1 + id
        );
        const projectInfo = {
          id: response.data.results.id,
          clientId: response.data.results.clientId,
          employeeIds: response.data.results.employeeId,
          startDate: response.data.results.startDate,
          endDate: response.data.results.endDate,
          size: response.data.results.size
        }
        setData(projectInfo);
        const details = await Promise.all(projectInfo.employeeIds.map((id: string) => {
          const detailsResponse = axios.get(url2 + id) 
  }))
  console.log(details)
  setTeamData(null)
  } catch (error) {
    console.log(error)
      } finally {
        setLoading(false);
      }
    }

    getData();
  }, [ [url1, url2, id]]);
  
     
  return { data, loading, error };
}



// useEffect(() => {
//   setLoading(true);
//   const fetchProject = async () => {
//   const response = axios.get(url1 + id);
//   const details = await Promise.all(response.data.results.map((id) => {
//     return axios.get(url2 + id)
//   }))
//   }
//   fetchProject();
// }, [url1, url2, id])