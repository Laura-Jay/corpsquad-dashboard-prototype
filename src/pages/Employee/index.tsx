import useFetchTwice from "../../api/useFetchTwice";
import { IProject } from "../../interfaces";
import Employee from "./Components/Employee";
import findProjectsFromEmployee from "../../utils/findProjectsFromEmployee";
import Project from "./Components/Project";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export default function EmployeePage(): JSX.Element {
  const { employeeId } = useParams() as { employeeId: string };

  let currentEmployeeData;
  let employeeProjects;
  let employeeProjectsData;

  const { data, isLoading, isError } = useFetchTwice(
    `https://consulting-projects.academy-faculty.repl.co/api/employees/${employeeId}`,
    `https://consulting-projects.academy-faculty.repl.co/api/projects`,
    []
  );

  const employeeData = data[0];
  const projectData = data[1];

  console.log(employeeData);
  console.log(projectData);

  if (isLoading) return <h1>loading...</h1>;
  if (isError) return <h1>Sorry, there was a problem loading this page</h1>;

  if (employeeData) {
    currentEmployeeData = (
      <Employee
        key={employeeData.id}
        id={employeeData.id}
        name={employeeData.name}
        role={employeeData.role}
        avatar={employeeData.avatar}
      />
    );
  }

  if (projectData && employeeId) {
    employeeProjectsData = findProjectsFromEmployee(employeeId, projectData);
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
    <>
      <nav>
      <button>
          <Link to="/" className="link-button">
            Dashboard Home
          </Link>
        </button>
      </nav>
      <section className="responsive-wrapper">
        <h1>Employee Bio</h1>
        <div className="employee-data">{currentEmployeeData}</div>
        <div className="project-grid">{employeeProjects}</div>
      </section>
    </>
  );
}
