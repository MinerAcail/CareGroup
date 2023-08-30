import {  columns } from "./columns";
import { DataTable } from "./data-table";
/* 
async function getData(): Promise<dataType[]> {
  return [
    {
      id: "728ed52f",
      name: "John Doe",
      types: "admin",
      email: "john@example.com",
      location: "City A",
      phoneNumber: "123-456-7890",
      createdAt: "2023-01-20",
      day: "Monday",
    },
    {
      id: "82cde94a",
      name: "Jane Smith",
      types: "sub_leader",
      email: "jane@example.com",
      location: "City B",
      phoneNumber: "987-654-3210",
      createdAt: "2023-08-21",
      day: "Tuesday",
    },
    {
      id: "6f8ab123",
      name: "Alice Johnson",
      types: "care_person",
      email: "alice@example.com",
      location: "City C",
      phoneNumber: "555-123-4567",
      createdAt: "2023-08-21",
      day: "Wednesday",
    },
    {
      id: "91fgh456",
      name: "Bob Brown",
      types: "leader",
      email: "bob@example.com",
      location: "City D",
      phoneNumber: "888-987-6543",
      createdAt: "2023-08-21",
      day: "Thursday",
    },
    {
      id: "5kj7g8r9",
      name: "Eve Adams",
      types: "admin",
      email: "eve@example.com",
      location: "City E",
      phoneNumber: "444-567-8901",
      createdAt: "2023-08-21",
      day: "Friday",
    },
    {
      id: "4h5i6j7k",
      name: "Michael Johnson",
      types: "care_person",
      email: "michael@example.com",
      location: "City F",
      phoneNumber: "777-555-1234",
      createdAt: "2023-08-21",
      day: "Saturday",
    },
    {
      id: "3n2b1m0v",
      name: "Sarah Williams",
      types: "sub_leader",
      email: "sarah@example.com",
      location: "City G",
      phoneNumber: "222-333-4444",
      createdAt: "2023-08-21",
      day: "Sunday",
    },
    {
      id: "9p8o7i6u",
      name: "David Lee",
      types: "leader",
      email: "david@example.com",
      location: "City H",
      phoneNumber: "555-777-8888",
      createdAt: "2023-08-21",
      day: "Monday",
    },
    {
      id: "qazwsxed",
      name: "Emily Brown",
      types: "admin",
      email: "emily@example.com",
      location: "City I",
      phoneNumber: "777-888-9999",
      createdAt: "2023-08-21",
      day: "Tuesday",
    },
    {
      id: "1v2b3n4m",
      name: "Daniel Smith",
      types: "care_person",
      email: "daniel@example.com",
      location: "City J",
      phoneNumber: "333-444-5555",
      createdAt: "2023-08-21",
      day: "Wednesday",
    },
    {
      id: "5t6y7u8i",
      name: "Olivia Johnson",
      types: "sub_leader",
      email: "olivia@example.com",
      location: "City K",
      phoneNumber: "888-999-0000",
      createdAt: "2023-08-21",
      day: "Thursday",
    },
    {
      id: "mnbvcxza",
      name: "William Davis",
      types: "leader",
      email: "william@example.com",
      location: "City L",
      phoneNumber: "111-222-3333",
      createdAt: "2023-08-21",
      day: "Friday",
    },
    {
      id: "plmkonij",
      name: "Sophia Garcia",
      types: "admin",
      email: "sophia@example.com",
      location: "City M",
      phoneNumber: "444-555-6666",
      createdAt: "2023-08-21",
      day: "Saturday",
    },
    {
      id: "zaxscdvf",
      name: "James Rodriguez",
      types: "care_person",
      email: "james@example.com",
      location: "City N",
      phoneNumber: "999-888-7777",
      createdAt: "2023-08-21",
      day: "Sunday",
    },{
      id: "7u6i5y4t",
      name: "Liam Martin",
      types: "care_person",
      email: "liam@example.com",
      location: "City O",
      phoneNumber: "777-111-2222",
      createdAt: "2023-08-21",
      day: "Monday",
    },
    {
      id: "8i7u6y5t",
      name: "Ava Thompson",
      types: "sub_leader",
      email: "ava@example.com",
      location: "City P",
      phoneNumber: "555-222-3333",
      createdAt: "2023-08-21",
      day: "Tuesday",
    },
    {
      id: "9o8i7u6y",
      name: "Noah Anderson",
      types: "leader",
      email: "noah@example.com",
      location: "City Q",
      phoneNumber: "888-333-4444",
      createdAt: "2023-08-21",
      day: "Wednesday",
    },
    {
      id: "0p9o8i7u",
      name: "Isabella Wilson",
      types: "admin",
      email: "isabella@example.com",
      location: "City R",
      phoneNumber: "444-444-5555",
      createdAt: "2023-08-21",
      day: "Thursday",
    },
    {
      id: "y7t6r5e4",
      name: "Ethan Smith",
      types: "care_person",
      email: "ethan@example.com",
      location: "City S",
      phoneNumber: "999-555-6666",
      createdAt: "2023-08-21",
      day: "Friday",
    },
    {
      id: "v6b5n4m3",
      name: "Mia Garcia",
      types: "sub_leader",
      email: "mia@example.com",
      location: "City T",
      phoneNumber: "777-666-7777",
      createdAt: "2023-08-21",
      day: "Saturday",
    },
    {
      id: "c3x2z1a0",
      name: "Oliver Johnson",
      types: "leader",
      email: "oliver@example.com",
      location: "City U",
      phoneNumber: "111-777-8888",
      createdAt: "2023-08-21",
      day: "Sunday",
    },
    {
      id: "6m7n8b9v",
      name: "Emma Davis",
      types: "admin",
      email: "emma@example.com",
      location: "City V",
      phoneNumber: "888-888-9999",
      createdAt: "2023-08-21",
      day: "Monday",
    },
    {
      id: "3c4x5z6v",
      name: "Liam Hernandez",
      types: "care_person",
      email: "liamh@example.com",
      location: "City W",
      phoneNumber: "555-999-0000",
      createdAt: "2023-08-21",
      day: "Tuesday",
    },
    {
      id: "8b9n0m1v",
      name: "Sophia Clark",
      types: "sub_leader",
      email: "sophiac@example.com",
      location: "City X",
      phoneNumber: "999-000-1111",
      createdAt: "2023-08-21",
      day: "Wednesday",
    },


  ];
} */
import { gql, useQuery } from '@apollo/client';

const GET_LEADERS = gql`
  query GetLeaders{
    leaders{
      id
      name
      email
      phoneNumber
      createdAt
      location
      types
      day 
      students{
        id
      name
      email
      phoneNumber
      createdAt
      # location
      # types
      day 
      }

    }
  }
`;

// ...


function DemoPage() {
  const { loading, error, data: dataQuery } = useQuery(GET_LEADERS, {});
// console.log(dataQuery);
// const { id } = useParams()

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const data = dataQuery ? dataQuery.leaders : [];
 /*  console.log("Leaders with Students:");
data.forEach((leader: { name: any; students: any[]; }) => {
  console.log(`Leader Name: ${leader.name}`);
  console.log("Students:");
  leader.students.forEach(student => {
    console.log(`- Student Name: ${student.name}`);
    console.log(`  Student Email: ${student.email}`);
    console.log(`  Student Email: ${student.day}`);
  });
  console.log("-------------------");
}); */


  

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default DemoPage;

// variables: {
  // sort: {/* your sort options here */},
  // _GroupBy: {/* your group by options here */},
// },
