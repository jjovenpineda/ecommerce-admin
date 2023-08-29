"use client";

import { StoreModal } from "@/components/modals/store-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // only renders in client side
  }, []);

  if (!isMounted) {
    //this function will return null unless the Useeffect above was successfully rendered by the user.
    //this also prevent hydration error.
    // renders on server side
    return null;
  }

  return (
    <>
      {/* this will render once the user once isMounted is true */}
      <StoreModal />
    </>
  );
};
