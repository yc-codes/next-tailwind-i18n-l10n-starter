import { useState } from "react";

export interface useModalInterface {

}

function useModal(): useModalInterface {

  const [isOpen, setIsOpen] = useState(false)

  return [
    isOpen,
    () => setIsOpen(true),
    () => setIsOpen(false),
  ]

}

export default useModal;