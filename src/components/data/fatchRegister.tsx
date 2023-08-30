import { gql, useQuery } from "@apollo/client";
import { useLocation, useParams } from "react-router-dom";
import { DataTable } from "./data-table";
import { columnsRegistration } from "./columns";

const STUDENTS_REGISTRATION = gql`
  query GetStudentRegistrations($studentId: String!) {
  studentRegistrations(studentId: $studentId) {
    id
    lastComment
    absence
    present
    createdAt
  }
}

`;

function DemoFatchRegistration() {
  const { careid } = useParams();



  // Fetch students by leader using the leaderId from useParams
  const { loading, error, data } = useQuery(STUDENTS_REGISTRATION, {
    variables: { studentId: careid },
  });
  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const students = data.studentRegistrations;

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

export default DemoFatchRegistration;
