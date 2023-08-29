import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  //check for the active user
  if (!userId) {
    //if no user, redirect to sign-in
    redirect("/sign-in");
  }
  //check if this user has any store created
  const store = await prismadb.store.findFirst({
    where: {
      userId: userId,
    },
  });
  // if it has a store, redirect to dashboard
  if (store) {
    redirect(`/${store.id}`);
  }
  return <>{children}</>;
}
