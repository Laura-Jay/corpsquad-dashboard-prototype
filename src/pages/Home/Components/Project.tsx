import { IProjectProps, IEmployee } from "../../../interfaces";
import useFetchEmployeeInfo from "../../../api/useFetchEmployeeInfo";

export default function Project(props: IProjectProps): JSX.Element {

  const  { teamData, loading, error }  = useFetchEmployeeInfo(props.employeeIds)

  if (loading) return <h1>loading...</h1>;
  if (error) console.log(error);

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
   } else {
     console.log('no teamData')
      teamMembers = props.employeeIds.map((employeeId) => (
    <li key={employeeId}>{employeeId}</li>
  ));
      
    }


  return (
   <section className="project">
      <p>Id: {props.id}</p>
      <p>Client id: {props.clientId}</p>
     { teamData ?  teamMembers : props.employeeIds }
      <p>Start Date: {props.startDate}</p>
      <p>End Date: {props.endDate}</p>
      <p>Size: {props.size}</p>
    </section> 
  )
}
