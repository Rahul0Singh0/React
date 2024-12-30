import { useState } from "react";

export default function RefactorComponent({ children }) {
    const [ x, setX ] = useState(0);
    console.log('called');
    return (
        <>
            <button onClick={() => setX(x + 1)}>Increment X</button>
            {x}
            {children}
        </>
    );
}