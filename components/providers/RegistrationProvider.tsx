"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getRegistrationStatus } from "@/app/actions/get-status";
import RegistrationModal from "@/components/sections/RegistrationModal";

interface RegistrationContextType {
  openModal: () => void;
  closeModal: () => void;
  isRegistrationOpen: boolean;
  isLoadingStatus: boolean;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(
  undefined,
);

export function RegistrationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(true);
  const [isLoadingStatus, setIsLoadingStatus] = useState(true);

  useEffect(() => {
    getRegistrationStatus().then((status) => {
      setIsRegistrationOpen(status);
      setIsLoadingStatus(false);
    });
  }, []);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <RegistrationContext.Provider
      value={{ openModal, closeModal, isRegistrationOpen, isLoadingStatus }}
    >
      {children}
      <RegistrationModal isOpen={isOpen} onClose={closeModal} />
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error(
      "useRegistration must be used within a RegistrationProvider",
    );
  }
  return context;
}
