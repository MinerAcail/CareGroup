import { gql, useQuery } from "@apollo/client";
import {  useParams } from "react-router-dom";
import { DataTable } from "./data-table";
import { columnsRegistration } from "./columns";

const STUDENTS_REGISTRATION_CURRENT_WEEK = gql`
  query currentWeekRegistrations{
    currentWeekRegistrations{
    id
    lastComment
    absence
    present
    createdAt
  }
}

`;

function CurrentWeekRegistrations() {



  // Fetch students by leader using the leaderId from useParams
  const { loading, error, data } = useQuery(STUDENTS_REGISTRATION_CURRENT_WEEK);
  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const students = data.currentWeekRegistrations;

  // Render the list of students
  return (
    <div className="container mx-auto py-10">
      <div className="section">
        <div className="_divLg ">
          <DataTable columns={columnsRegistration} data={students} />
        </div>
      </div>
    </div>
  );
}

export default CurrentWeekRegistrations;
