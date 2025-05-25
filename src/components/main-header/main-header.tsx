"use client";

import * as React from "react";
import Link from "next/link";

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
import { ArrowRight } from "lucide-react";
import Framer from "../Framer";
import { fadeInLetters } from "@/lib/animation";

export function MainHeader({ menu }: { menu: Record<string, any> }) {
  return (
    <NavigationMenu className="hidden xl:block">
      <NavigationMenuList>
        {menu?.map((item: any, index: number) => (
          <Framer animation={fadeInLetters(index)} key={index}>
            <div key={index}>
              {item?.subLinks ? (
                <Framer animation={fadeInLetters(index)} key={index}>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>{item?.text}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-4  w-full lg:w-[800px] max-w-[900px] lg:grid-cols-[.75fr_1fr]">
                        {item?.subLinks?.map((subItem: any, index: number) => (
                          <ListItem
                            key={index}
                            href={subItem?.link}
                            className="space-y-4 "
                          >
                            <div className="space-y-5">
                              <div
                                className={`text-[15px]  group flex transition-all duration-300  items-center gap-2    3xl:text-lg  leading-none ${
                                  subItem?.links?.length > 0
                                    ? "font-semibold"
                                    : "hover:font-bold cursor-pointer"
                                }`}
                              >
                                {subItem?.text}
                                {subItem?.links?.length == (0 || undefined) && (
                                  <ArrowRight
                                    size={20}
                                    className="group-hover:opacity-100 opacity-0 transition-all duration-300"
                                  />
                                )}
                              </div>
                              {subItem?.links?.map(
                                (res: any, index: number) => (
                                  <div className="" key={index}>
                                    {item?.links && item?.links?.length > 0 ? (
                                      <div className="">
                                        {item?.links?.map(
                                          (res: any, i: number) => (
                                            <div
                                              key={i}
                                            >
                                              {res.name}
                                            </div>
                                          )
                                        )}
                                      </div>
                                    ) : (
                                      <Link
                                        href={res?.link}
                                        className="flex group transition-all duration-300 hover:font-bold items-center gap-2 text-[15px] cursor-pointer 3xl:text-lg "
                                        key={index}
                                      >
                                        {res.name}
                                        <ArrowRight
                                          size={20}
                                          className="group-hover:opacity-100 opacity-0 transition-all duration-300"
                                        />
                                      </Link>
                                    )}
                                  </div>
                                )
                              )}
                            </div>
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </Framer>
              ) : (
                <NavigationMenuItem>
                  <Link href={item?.link} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {item?.text}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              )}
            </div>
          </Framer>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
