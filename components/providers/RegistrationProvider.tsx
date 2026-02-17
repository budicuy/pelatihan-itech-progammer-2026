"use client";

import { createContext, useContext, useState } from "react";
import RegistrationModal from "@/components/sections/RegistrationModal";

interface RegistrationContextType {
  openModal: () => void;
  closeModal: () => void;
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

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <RegistrationContext.Provider value={{ openModal, closeModal }}>
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
