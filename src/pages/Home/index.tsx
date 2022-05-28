// import { useEffect, useState } from "react";
import useFetch from "../../api/useFetch";
import Project from "./Components/Project";
import getAggregate from "../../utils/getAggregate";
import { IProject } from "../../interfaces";

export default function HomePage(): JSX.Element {
  const { data, loading, error } = useFetch(
    "https://consulting-projects.academy-faculty.repl.co/api/projects"
  );

  if (loading) return <h1>loading...</h1>;
  if (error) console.log(error);
  let projectDataArray = [];
  let allProjectData: IProject[] = [];

  if (data) {
    projectDataArray = data;
    allProjectData = data.map((project: IProject) => (
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

  const aggregateRevenue = getAggregate(projectDataArray);

  return (
    <>
      <h1>Home Page</h1>
      <h3>Aggregate Consultancy Project Revenue: £{aggregateRevenue}</h3>
      {allProjectData}
    </>
  );
}
