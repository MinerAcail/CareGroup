'use client';

import { useForm } from 'react-hook-form';
import {
  Form,
 
} from '../ui/form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../ui/button';
import FormInput from './form';


const FormSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    location: z.string().min(1, 'Location is required'),
    types: z.string().min(1, 'types is required'),
    phoneNumber: z.string().min(1, 'phoneNumber is required'),
    day: z.string().min(1, 'Day is required'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(4, 'Password must have than 8 characters'),
      
  })
 


  /////////here leader/////////okey
const LeaderForm = () => {


  const form = useForm<z.infer<typeof FormSchema>>({resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      location: '',
      phoneNumber: '',
      types: '',
      day: '',


    },
  });
 
  
  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <main className='w-6/12 m-auto flex flex-col justify-center items-center'>
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
        <div className='space-y-3'>
         <FormInput control={form.control} name={"username"} placeholder={"John"} label={"User Name"} />
         <FormInput control={form.control} name={"email"} placeholder={"mail@example.com"} label={"Email"} />
         <FormInput control={form.control} name={"day"} placeholder={"Day"} label={"Monday Tuesday Wednesday Thursday Friday Saturday Sunday"}
     />
         <FormInput control={form.control} name={"phoneNumber"} placeholder={"Phone Number"} label={"Phone Number"} />
         <FormInput control={form.control} name={"location"} placeholder={"Location"} label={"Location"} />
         <FormInput control={form.control} name={"types"} placeholder={"admin  sub_leader  care_person  leader"} label={"Types"} />
         <FormInput control={form.control} name={"password"} placeholder={"Enter your password"} label={"Password"} type='password' />
         
        </div>
        <p className='text-center text-sm text-gray-600 mt-2'>
        If you don&apos;t have an account, please&nbsp;
        <Button className='flex justify-center items-center mt-6 p-6' type='submit'>
          Saver Leader
        </Button>
      </p>
        
      </form>
     
      
    </Form>
  </main>
  );
};

export default LeaderForm;



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