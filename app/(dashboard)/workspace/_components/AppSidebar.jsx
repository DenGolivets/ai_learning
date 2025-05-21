"use client";

import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sidebarMenu } from "@/utils/sidebar";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AddNewCourseDialog from "./AddNewCourseDialog";

const AppSidebar = () => {
  const path = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className={"p-4"}>
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="size-9"
          />
          <h1 className="font-bold text-2xl font-jaro uppercase">Learning</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <AddNewCourseDialog>
            <Button>Create New Course</Button>
          </AddNewCourseDialog>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarMenu.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild className={"p-5"}>
                    <Link
                      href={item.path}
                      className={`text-[17px] ${
                        path.includes(item.path) &&
                        "text-primary bg-purple-50 font-semibold"
                      }`}
                    >
                      <item.icon className="mr-1 size-7" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
};

export default AppSidebar;
