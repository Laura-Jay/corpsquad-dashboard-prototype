import { useState, useEffect } from "react";
import axios from "axios";
import { FetchEmployeeResponse, IEmployee, IProject } from "../interfaces";

export default function useFetchEmployee(id: string): FetchEmployeeResponse {
  const [employeeData, setEmployeeData] = useState<null | IEmployee>(null);
  const [projectData, setProjectData] = useState<null | IProject>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url1 = `https://consulting-projects.academy-faculty.repl.co/api/employees/${id}`;
    const url2 = `https://consulting-projects.academy-faculty.repl.co/api/projects`;

    const getEmployeeInfo = async (url: string) => {
      setLoading(true);
      const employeeInfo = await axios.get(url);
      const data = {
        name: employeeInfo.data.name,
        id: employeeInfo.data.id,
        role: employeeInfo.data.role,
        avatar: employeeInfo.data.avatar,
      };
      setEmployeeData(data);
    };

    const getProjectInfo = async (url: string) => {
      try {
        const response = await axios.get(url);
        setProjectData(response.data);
      } catch (error) {
        console.error(error);
        setError("unable to fetch project info");
      } finally {
        setLoading(false);
      }
    };

    getEmployeeInfo(url1);
    getProjectInfo(url2);
  }, [id]);

  return { employeeData, projectData, error, loading };
}
