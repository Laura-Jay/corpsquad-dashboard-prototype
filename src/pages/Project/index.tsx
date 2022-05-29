import { IEmployee, IProjectProps } from "../../interfaces";
import useFetchEmployeeInfo from "../../api/useFetchEmployeeInfo"
import useFetch from "../../api/useFetch";


export default function Project(): JSX.Element {


  const { data, loading, error } = useFetch(
    "https://consulting-projects.academy-faculty.repl.co/api/"
  );
  

  if (loading) return <h1>loading...</h1>;
  if (error) console.log(error);
  
  const  { teamData }  = useFetchEmployeeInfo(data.employeeIds)
  let teamMembers; 
   if (teamData){
     console.log(teamData)
    teamMembers = teamData.map((employee: IEmployee) => {
     return (
      <div key={employee.id}>
      <p>Name: {employee.name}</p>
      <p>Id: {employee.id}</p>
      <p>Role: {employee.role}</p>
      </div>
     )
  })
   } else console.log('no teamData')

  return (
    <section className="project">
      <p>Id: {data.id}</p>
      <p>Client id: {data.clientId}</p>
      {data.employeeIds}
      {teamMembers}
      <p>Start Date: {data.startDate}</p>
      <p>End Date: {data.endDate}</p>
      <p>Size: {data.size}</p>
    </section>
  );
}
