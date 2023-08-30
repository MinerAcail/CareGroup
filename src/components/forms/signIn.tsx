import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import FormInput from "./form";
import { ApolloError, gql, useMutation } from "@apollo/client";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

const SIGN_IN = gql`
  mutation loginLeader($login: LoginLeaderInput!) {
    loginLeader(input: $login) {
      id
      name
      email
      phoneNumber
      token
    }
  }
`;
const FormSchema = z.object({
  phoneNumber: z.string().min(1, "Phone Number is required").max(12),
  password: z
    .string()
    .min(1, "Password is required")
    .min(4, "Password must have than 8 characters"),
});

//////////////////
const SignIForm = () => {
  const [signInMutation, { loading }] = useMutation(SIGN_IN);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phoneNumber: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      setErrorMessages([]); // Clear error messages before making the mutation

      const { data, errors } = await signInMutation({
        variables: { login: values },
      });

      if (errors) {
        throw new ApolloError({
          graphQLErrors: errors,
        });
      }

      console.log(data);
    } catch (error) {
      if (error instanceof ApolloError) {
        // Handle ApolloError and display errors to the user
        const errorMessages = error.graphQLErrors.map((err) => err.message);
        setErrorMessages(errorMessages);

        console.error("GraphQL errors:", errorMessages);

        // Set error messages in your form state or display them to the user
      } else {
        console.error("Other error:", error);
      }
    }
  };

  return (
    <main className="w-6/12 m-auto flex flex-col justify-center items-center">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
          <div className="space-y-3">
            <FormInput
              control={form.control}
              name={"phoneNumber"}
              placeholder={"23444"}
              label={"User phone Number"}
            />
            <FormInput
              control={form.control}
              name={"password"}
              placeholder={"Enter your password"}
              label={"Password"}
              type="password"
            />
            {errorMessages.length > 0 && (
              <div className="mt-4 text-red-500">
                {errorMessages.map((Message, index) => (
                  <p key={index}>{Message}</p>
                ))}
              </div>
            )}
          </div>
          <Button
            disabled={loading}
            className="flex justify-center items-center mt-6 p-6 "
            type="submit"
          >
            {loading ? ( // Display the loading icon when loading
              <>
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              Sign In
              </>
            ) : (
              "Sign In"
            )}
           
          </Button>
        </form>
        <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
          or
        </div>
        <p className="text-center text-sm text-gray-600 mt-2">
          If you don&apos;t have an account, please&nbsp;
          <Button variant="link" className="text-blue-500 hover:underline">
            Sign Up
          </Button>
        </p>
      </Form>
    </main>
  );
};

export default SignIForm;

/* import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { HandMetal } from 'lucide-react';

const Navbar = () => {
  return (
    <div className=' bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <HandMetal />
        </Link>
        <Link className={buttonVariants()} href='/sign-in'>
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default Navbar; */
