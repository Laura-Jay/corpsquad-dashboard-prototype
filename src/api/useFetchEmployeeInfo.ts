import { useEffect, useState } from "react";
import axios from "axios";
import { TeamAPIResponse, IEmployee} from "../interfaces";

export default function useFetchEmployeeInfo(employeeIds: string[]):TeamAPIResponse  {
  const [teamData, setTeamData] = useState<IEmployee[] >([])
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState< string | null>(null);
  
  useEffect(() => {

    const getEmployeeInfo = async (url: string) => {
    const employeeInfo = await axios.get(url)
    return {
      name: employeeInfo.data.name,
      id: employeeInfo.data.id,
      role: employeeInfo.data.role,
      avatar: employeeInfo.data.avatar
    }
  }

  const getTeamInfo = async (ids: string[]) => {
    const requests = ids.map((id) => {
      const url = `https://consulting-projects.academy-faculty.repl.co/api/employees/${id}`
      return getEmployeeInfo(url)
        .then((res) => {
          return res
        })
    })
    return Promise.all(requests)
  }
  async function run(){
  try{
  await getTeamInfo(employeeIds)
    .then(a => setTeamData(a))
  } catch (error) { 
    console.log(error)
    setError("unable to fetch team info")
  }
  finally {
    setLoading(false)
  }
}

run()
    
  }, [employeeIds])
  
  return { teamData , loading, error }
}