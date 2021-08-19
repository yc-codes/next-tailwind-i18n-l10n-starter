import { useState } from "react";

export type useModalType = [boolean, () => void, () => void]

function useModal(initialState: boolean = false): useModalType {

  const [isOpen, setIsOpen] = useState(initialState)

  return [
    isOpen,
    () => setIsOpen(true),
    () => setIsOpen(false),
  ]

}

export default useModal;