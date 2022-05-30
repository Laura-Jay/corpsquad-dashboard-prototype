import React, { Fragment, useState } from "react";
import useDataApi from "../api/useFetchExample";

export default function Posts() {
  const { data, isLoading, isError } = useDataApi(
    "https://consulting-projects.academy-faculty.repl.co/api/projects/",
    []
  );

  return (
    <Fragment>
      {isError && <div>Something went wrong ...</div>}

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.map(
            (item: {
              id: string;
              clientId: string;
              employeeIds: string[];
              contract: {
                startDate: string;
                endDate: string;
                size: string;
              };
            }) => (
              <li key={item.id}>
                <h3>{item.clientId}</h3>
                {item.employeeIds.map((employeeId) => (
                  <p key={employeeId}>{employeeId}</p>
                ))}
                <h3>Start Date: {item.contract.startDate}</h3>
                <h3>End Date: {item.contract.endDate}</h3>
                <h3>Size: {item.contract.size}</h3>
              </li>
            )
          )}
        </ul>
      )}
    </Fragment>
  );
}
