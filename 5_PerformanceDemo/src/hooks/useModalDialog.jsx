import { useState } from "react";
// custom hook
export default function useModalDialog() {
    const [ isOpen, setIsOpen ] = useState(false);
    return {
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false)
    };
}