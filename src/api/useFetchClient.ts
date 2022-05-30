import { useState, useEffect } from "react";
import axios from "axios";
import { FetchClientResponse, IClient, IProject } from "../interfaces";

export default function useFetchClient(id: string): FetchClientResponse {
  const [clientData, setClientData] = useState<null | IClient>(null);
  const [projectData, setProjectData] = useState<null | IProject>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url1 = `https://consulting-projects.academy-faculty.repl.co/api/clients/${id}`;
    const url2 = `https://consulting-projects.academy-faculty.repl.co/api/projects`;

    const getClientInfo = async (url: string) => {
      const clientInfo = await axios.get(url);
      const data = {
        name: clientInfo.data.name,
        id: clientInfo.data.id,
        role: clientInfo.data.role,
        avatar: clientInfo.data.avatar,
      };
      setClientData(data);
    };

    const getProjectInfo = async (url: string) => {
      setLoading(true);
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

    getClientInfo(url1);
    getProjectInfo(url2);
  }, [id]);

  return { clientData, projectData, error, loading };
}
