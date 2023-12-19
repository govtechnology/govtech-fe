/* eslint-disable react/prop-types */
import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/utils/cnc";

const VTabs = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Root
    ref={ref}
    className={cn("flex flex-col md:flex-row gap-6 w-full", className)}
    {...props}
  />
));
VTabs.displayName = TabsPrimitive.Root.displayName;

const VTabsList = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "flex flex-row md:flex-col overflow-x-auto overflow-y-hidden w-full md:w-[240px] h-full items-start p-1 text-gray-500 dark:bg-gray-800 dark:text-gray-400",
      className
    )}
    {...props}
  />
));
VTabsList.displayName = TabsPrimitive.List.displayName;

const VTabsTrigger = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "w-full text-start rounded-md py-[20px] px-[23px] whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-secondary data-[state=active]:text-gray-950 ",
      className
    )}
    {...props}
  />
));
VTabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const VTabsContent = React.forwardRef(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn("w-full border border-gray-100 rounded-lg p-8", className)}
    {...props}
  />
));
VTabsContent.displayName = TabsPrimitive.Content.displayName;

export { VTabs, VTabsList, VTabsTrigger, VTabsContent };
