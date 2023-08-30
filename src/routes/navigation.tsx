import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom";

//import Providers from "./component/providers/providers";
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
// import Client from "@/middleware/apolloClient";
import RootLayout from "./layout/rootLayout";
import Dashboard from "./pages/dashboard";
// import Graph from "./pages/tables";
import FormTable from "./pages/tables";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import SignCareForm from "./pages/formcareperson";
import DemoFatch from "@/components/data/any";
import DemoFatchRegistration from "@/components/data/fatchRegister";
import SignLeaderForm from "./pages/formleader";
import CurrentWeekRegistrations from "@/components/data/fatchCurrentRegister";


function Navigation() {

 
  /* this is a place where you link authlink and the httplink into one  so the client or the forntend can use it for authorization*/
  const Client = new ApolloClient({
    link: new HttpLink({
      uri: "http://localhost:9090/query",
    }),
    cache: new InMemoryCache()
  });
 
  const Router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route  path="dashboard/formtable" element={<FormTable />} />
        <Route path="dashboard/formtable/:id" element={<DemoFatch />} />
        <Route path="dashboard/formtable/students/:id" element={<DemoFatch />} />
        <Route path="dashboard/formtable/students/register/:careid" element={<DemoFatchRegistration />} />
        <Route path="dashboard/formtable/students/register/currentweekly" element={<CurrentWeekRegistrations />} />


        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard/form/signleaderform" element={<SignLeaderForm />} />

        <Route path="/dashboard/signcareform" element={<SignCareForm />} />

        {/* ... etc. */}
      </Route>
    )
  );


  return (
    <ApolloProvider client={Client}>
      <RouterProvider router={Router}/>
        
    </ApolloProvider>
  );

}

export default Navigation;
