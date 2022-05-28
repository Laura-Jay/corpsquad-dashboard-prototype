import { IProject } from "../interfaces";

export default function getAggregate(projects: IProject[]): number {
  let aggregate = 0;
  for (const project of projects) {
    aggregate += parseFloat(project.contract.size);
  }
  return Math.round(aggregate * 100) / 100;
}
