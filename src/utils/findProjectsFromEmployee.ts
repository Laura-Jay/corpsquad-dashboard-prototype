import { IProject } from "../interfaces";

export default function findProjectsFromEmployee(
  id: string,
  projects: IProject[]
): IProject[] {
  const relevantProjects: IProject[] = [];

  for (const project of projects) {
    if (project.employeeIds.includes(id)) {
      relevantProjects.push(project);
    }
  }

  return relevantProjects;
}
