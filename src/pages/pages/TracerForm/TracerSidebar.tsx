import { areEqual } from "@/lib/utils/areEqual";
import React, {ReactNode} from "react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader, 
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar.tsx";
import { Avatar, AvatarImage } from "@/components/ui/avatar.tsx";
import { Home, Users } from "lucide-react";
import { useLocation } from "react-router";
import { cn } from "@/lib/utils/cn.ts";
import { Link } from "react-router-dom"

type SidebarProps = {
    children: ReactNode
}
const root ="/tracer/"
const sidebar_menu = [
    { label: "Dashboard", link: `${root}/dashboard`, icon: <Home /> },
    { label: "Tracer", link: `${root}/tracer`, icon: <Users /> },
];

const TracerSidebar = React.memo(({ children }: SidebarProps): ReactNode => {
    const { pathname } = useLocation();
    return (
        <SidebarProvider className="overflow-hidden">
          <Sidebar className="fixed left-0 top-14 px-4 bg-gray-50">
            <SidebarHeader className="py-8">
              <div>
                <div className="flex justify-center">
                  <Avatar className="h-20 w-20">
                    <AvatarImage className="h-20 w-20" src={} />
                  </Avatar>
                </div>
                <div>
                  <p className="font-semibold text-lg text-center">Tracer</p>
                  <p className="text-xs text-center">Adamson University Tracer Survey Form</p>
                </div>
              </div>
            </SidebarHeader>
            <SidebarContent>
              {sidebar_menu.map((menu, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton asChild className={cn(pathname === menu.link ? "bg-gray-200" : "bg-transparent")}>
                    <Link to={menu.link}>
                      {menu.icon}
                      <span>{menu.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarContent>
            <SidebarFooter />
          </Sidebar>
          <main className="w-full">
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
      );
    }, areEqual);

    TracerSidebar.displayName = "Tracer_Sidebar";

    export default TracerSidebar;