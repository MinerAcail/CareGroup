import { gql, useQuery } from "@apollo/client";
import { useLocation, useParams } from "react-router-dom";
import { DataTable } from "./data-table";
import { columns } from "./columns";

const STUDENTS_BY_LEADER_QUERY = gql`
  query StudentsByLeader($leaderId: ID!) {
    studentsByLeader(leaderId: $leaderId) {
      id
      name
      email
      phoneNumber
      createdAt
      day
      leaderID
      registrations {
        id
        lastComment
      }
    }
  }
`;

function DemoFatch() {
  const { id } = useParams();
  const location = useLocation();

      console.log("Current Pathname:", location.pathname);
      // Check if "id" exists in the pathname
      const hasId = location.pathname.includes("/dashboard/formtable/");

  // Fetch students by leader using the leaderId from useParams
  const { loading, error, data } = useQuery(STUDENTS_BY_LEADER_QUERY, {
    variables: { leaderId: id },
  });
  // console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const students = data.studentsByLeader;

  // Render the list of students
  return (
    <div className="container mx-auto py-10">
      <div className="section">
        <div className="_divLg ">
          <DataTable columns={columns} data={students} />
        </div>
      </div>
    </div>
  );
}

export default DemoFatch;
