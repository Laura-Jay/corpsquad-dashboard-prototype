import useFetchEmployee from "../../api/useFetchEmployee";
import { IEmployee, IProject } from "../../interfaces";
import Employee from "./Components/Employee";
import findProjectsFromEmployee from "../../utils/findProjectsFromEmployee";
import Project from "./Components/Project";

export default function EmployeePage(): JSX.Element {
  const id = "5cdbf84f55cdc05e91607dcc"; // testing only
  let currentEmployeeData;
  let employeeProjects;
  let employeeProjectsData;

  const { employeeData, projectData, loading, error } = useFetchEmployee(
    `https://consulting-projects.academy-faculty.repl.co/api/employees/${id}`
  );

  if (loading) return <h1>loading...</h1>;
  if (error) console.log(error);

  if (employeeData) {
    currentEmployeeData = employeeData.map((employee: IEmployee) => (
      <Employee
        key={employee.id}
        id={employee.id}
        name={employee.name}
        role={employee.role}
        avatar={employee.avatar}
      />
    ));
  }


  if (projectData) {
    employeeProjectsData = findProjectsFromEmployee(id, projectData);
    employeeProjects = employeeProjectsData.map((project: IProject) => (
      <Project
        key={project.id}
        id={project.id}
        clientId={project.clientId}
        employeeIds={project.employeeIds}
        startDate={project.contract.startDate}
        endDate={project.contract.endDate}
        size={project.contract.size}
      />
    ));
  }

  return (
    <section className="responsive-wrapper">
    <h1>Employee Bio</h1>
    <div className="employee-data">{currentEmployeeData}</div>
    <div className="project-grid">{employeeProjects}</div>
  </section>
  );
}

