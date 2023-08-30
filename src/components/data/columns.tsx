import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation, useNavigate } from "react-router-dom";

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};
export type dataType = {
  id: string;
  name: string;
  types: "Admin" | "sub_leader" | "care_person" | "leader";
  email: string;
  location: string;
  phoneNumber: string;
  createdAt: string;
  leaderID: string;
  day:
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
    | "Sunday";
  students: Student[]; // Add the students property
};
export type Student = {
  id: string;
  email: string;
};

export const columns: ColumnDef<dataType>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const Person = row.original;
      const location = useLocation();

      console.log("Current Pathname:", location.pathname);
      // Check if "id" exists in the pathname
      const hasId = location.pathname.includes(
        "/dashboard/formtable/students/"
      );

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(Person.id);
                // setSelectedPersonId(Person.id);
                // console.log("Copied Person ID:", Person.id);
              }}
            >
              Copy Person ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              style={{
                color: "red",
              }}
            >
              Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>View leader details</DropdownMenuItem>
            <DropdownMenuItem></DropdownMenuItem>
            <DropdownMenuItem
            // disabled
            >
              {hasId ? (
                <Link
                to={`/dashboard/formtable/students/register/${Person.id}`}
               >
                  View care registrations
                </Link>
              ) : (
                <Link
                to={`/dashboard/formtable/students/${Person.id}`}
                >
                  View student students
                </Link>
              )}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  /* dashboard/formtable/students/registrations/ */
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const person = row.original;
      return (
        <>
          <h2 className={`font-extrabold `} key={row.id}>
            {person.name}
          </h2>
        </>
      );
    },
  },
  {
    accessorKey: "day",
    header: "day",
  },
  {
    accessorKey: "leaderID",
    header: "leaderID",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "types",
    header: "User Type",
    cell: ({ row }) => {
      const person = row.original;
      let bgColorClass = "";

      if (person.types === "Admin") {
        bgColorClass = "bg-red-500";
      } else if (person.types === "sub_leader") {
        bgColorClass = "bg-blue-500";
      } else if (person.types === "care_person") {
        bgColorClass = "bg-green-500";
      } else if (person.types === "leader") {
        bgColorClass = "bg-white";
      }

      return (
        <h2
          className={` p-2 m-0 text-center rounded-sm opacity-60 ${bgColorClass}`}
          key={row.id}
        >
          {person.types}
        </h2>
      );
    },
  },

  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "phoneNumber",
    header: "Phone Number",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const person = row.original;

      const date = new Date(person.createdAt);
      const day = date.getDate().toString().padStart(2, "0");
      const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
        date
      );
      const year = date.getFullYear();

      const formattedDate = `${day} ${month} ${year}`;

      return <h2 className="p-2">{formattedDate}</h2>;
    },
  },
];

export type dataTypeRegistration = {
  id: string;
  lastComment: string;
  absence: boolean;
  present: boolean;
  createdAt: string;
};

export const columnsRegistration: ColumnDef<dataTypeRegistration>[] = [
  {
    id: "actions",
    cell: ({ row }) => {
      const Person = row.original;

      // Check if "id" exists in the pathname

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              style={{
                color: "red",
              }}
            >
              Delete
            </DropdownMenuItem>
            <DropdownMenuSeparator />

            <DropdownMenuItem>View leader details</DropdownMenuItem>
            
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
  {
    accessorKey: "lastComment",
    header: "Last Comment",
    cell: ({ row }) => {
      const person = row.original;
      return (
        <h2 className={`font-extrabold max-w-lg lex items-center`} key={row.id}>
        {person.lastComment}
      </h2>

      );
    },
  },

  {
    accessorKey: "present",
    header: "Present",
    cell: ({ row }) => {
      const person = row.original;
      let bgColorClass = "";
  
      if (person.present === false) {
        bgColorClass = "bg-red-500";
      } else if (person.present === true) {
        bgColorClass = "bg-blue-500";
      }
      return (
        <h2
          className={` p-2 m-0 text-center rounded-sm opacity-60 ${bgColorClass}`}
          key={row.id}
        >
          {person.present ? "Present" : "Absent"}
        </h2>
      );
    },
  },
  

  {
    accessorKey: "createdAt",
    header: "Created At",
    cell: ({ row }) => {
      const person = row.original;

      const date = new Date(person.createdAt);
      const day = date.getDate().toString().padStart(2, "0");
      const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
        date
      );
      const year = date.getFullYear();

      const formattedDate = `${day} ${month} ${year}`;

      return <h2 className="p-2">{formattedDate}</h2>;
    },
  },
];
