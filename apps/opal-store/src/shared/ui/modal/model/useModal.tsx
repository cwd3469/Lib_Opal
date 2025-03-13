import { useState } from "react";

type Modals<T extends string> = {
  [K in T]: boolean;
};

function useModal<T extends string>() {
  const [modals, setModals] = useState<Modals<T>>({} as Modals<T>);

  const openModal = (key: T) => {
    setModals((prev) => ({ ...prev, [key]: true }));
  };

  const closeModal = (key: T) => {
    setModals((prev) => ({ ...prev, [key]: false }));
  };

  const isOpen = (key: T) => modals[key];

  return {
    isOpen,
    openModal,
    closeModal,
  };
}

export default useModal;
