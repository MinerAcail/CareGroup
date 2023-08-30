"use client";

import * as React from "react";
// import Link from "next/link"

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const components: { title: string; to: string; description: string }[] = [
  {
    title: "Leader and Care",
    to: "/dashboard/formtable",
    description: "Tables that display Leader and Care persons.",
  },
  {
    title: "Current Week Registrations",
    to: "/dashboard/formtable/students/register/currentweekly",
    description: "Tables that display Leader and Care persons.",
  },
];
const componentInput: { title: string; to: string; description: string }[] = [
  {
    title: "Leader",
    to: "/dashboard/form/signleaderform",
    description: "Tables that display Leader and Care persons.",
  },
  {
    title: "Care Person",
    to: "/dashboard/signcareform",
    description: "Tables that display Leader and Care persons.",
  },
];
export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        
      <NavigationMenuItem>
          <Link to={"/"}>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Graph
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>


        <NavigationMenuItem>
          <NavigationMenuTrigger>Tables</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  to={component.to}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Create</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 ">
              {componentInput.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  to={component.to}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <Link to='/signin'>
                
              Sign In
          </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <Link to={"/signup"}>
            Sign Up
          </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>

       
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<"a"> & { to: string }
>(({ className, title, children,to, ...props }) => {
  return (
    <Link
    to={to}
      className={cn(
        "block select-none space-y-1 rounded-md p-5 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
        className
      )}
      {...props}
    >
      <div className="text-sm font-medium ">{title}</div>
      <p className=" text-sm  text-muted-foreground">{children}</p>
    </Link>
  );
});
ListItem.displayName = "ListItem";
