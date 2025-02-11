import { useContext } from "react";
import { AlertContext } from "../ui/AlertModalProvider";

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (context === undefined)
    throw new Error("useAlert must be used within AlertProvider");
  return context;
};
