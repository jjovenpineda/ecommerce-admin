import prismadb from "@/lib/prismadb";
import React from "react";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    //call the store using parameter "storeId"
    where: {
      id: params.storeId,
    },
  });

  return <div>{store?.name}</div>;
};

export default DashboardPage;
