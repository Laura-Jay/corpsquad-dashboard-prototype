import { useEffect, useState } from "react";
import useFetch from "../../api/useFetch";
import { IEmployee } from "../../interfaces";
import Employee from './Components/Employee'

export default function EmployeePage(): JSX.Element {
  const { data, loading, error } = useFetch(
    "https://consulting-projects.academy-faculty.repl.co/api/employees"
  );

  if (loading) return <h1>loading...</h1>;
  if (error) console.log(error);
  let allEmployeeData = []
    if (data) {
      allEmployeeData = data.map((employee: IEmployee) => (
        <Employee
        key={employee.id}
        id={employee.id}
        name={employee.name}
        role={employee.role}
        avatar={employee.avatar}
        />
      ))
    }

  return (
    <>
      <h1>Employee Page</h1>
      {allEmployeeData}
    </>
  );
}
