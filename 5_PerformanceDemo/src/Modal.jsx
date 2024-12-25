export default function Modal({ close }) {
    return (
        <div className="modal">
            <h2>Modal</h2>
            <p>This is a modal</p>
            <button onClick={ close }>Close</button>
            {/* <button onClick={ () => setIsOpen(false) }>Close</button> */}
        </div>
    );
}