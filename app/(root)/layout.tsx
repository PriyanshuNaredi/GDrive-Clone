import React from "react";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

import { Toaster } from "@/components/ui/toaster";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return redirect("/sign-in");
  }
  return (
    <main className={"flex h-screen "}>
      {/* Sidebar */}
      <Sidebar {...currentUser} />
      <section className="flex h-full flex-1 flex-col">
        {/*  Mobile Navigation */}
        <MobileNavigation {...currentUser} />
        {/*  Header */}
        <Header userId={currentUser.$id} accountId={currentUser.accountId} />
        {/*  */}
        <div className={"main-content"}>{children}</div>
        <Toaster />
      </section>
    </main>
  );
};
export default Layout;
