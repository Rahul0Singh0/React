// import { useState } from "react";
import Modal from "./Modal";
import useModalDialog from "./hooks/useModalDialog";

export function ButtonWithModal() {
    // const [ isOpen, setIsOpen ] = useState(false);
    const { isOpen, open, close } = useModalDialog();
    return (
        <>
            {/* <button onClick={ () => setIsOpen(true) }>Open Modal</button> */}
            <button onClick={ open }>Open Modal</button>
            { isOpen && <Modal close={ close } /> } 
        </>
    );
}