import { useEffect, useState } from "react";
import useFetch from "../../api/useFetch";
import Project from "./Components/Project";
import { IProject } from "../../interfaces";

export default function HomePage(): JSX.Element {
  const { data, loading, error } = useFetch(
    "https://consulting-projects.academy-faculty.repl.co/api/projects"
  );

  if (loading) return <h1>loading...</h1>;
  if (error) console.log(error);
  let allProjectData = []
    if (data) {
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

  return (
    <>
      <h1>Home Page</h1>
      { allProjectData }
    </>
  );
}
