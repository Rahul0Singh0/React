import { useState } from "react";
import Modal from "./Modal";

export function ButtonWithModal() {
    const [ isOpen, setIsOpen ] = useState(false);
    return (
        <>
            <button onClick={ () => setIsOpen(true) }>Open Modal</button>
            { isOpen && <Modal setIsOpen={setIsOpen} /> } 
        </>
    );
}