"use client";

import { navMenu } from "@/data";
import Link from "next/link";
import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const NavItem = () => {
  return (
    <>
      {navMenu?.map((item) => {
        return item?.submenu ? (
          <NavigationMenu key={item.id}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="z-20 w-[150px] p-1 md:w-[180px] md:p-2">
                    {item?.submenu?.map((submenuItem) => (
                      <ListItem
                        key={submenuItem.path}
                        href={submenuItem.path}
                        title={submenuItem.name}
                      />
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ) : (
          <li key={item.path} className="text-nowrap">
            <Link href={item.path}>{item.name}</Link>
          </li>
        );
      })}
    </>
  );
};

export default NavItem;

const ListItem = React.forwardRef(({ className, title, href }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
        >
          <div className="leading-none">{title}</div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
