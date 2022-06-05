
import classes from "./Modal.module.css";
import ReactDOM from "react-dom";

function Backdrop(props) {
    return <div className={classes.backdrop} onClick={props.hideCart}></div>

}

function ModalContent(props) {
    return <div className={classes.modalContent}>
        <div>{props.children}</div>
    </div>

}

const overlayPortal = document.querySelector("#overlays")

function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={props.hideCart} />, overlayPortal)}
            {ReactDOM.createPortal(<ModalContent>{props.children}</ModalContent>, overlayPortal)}
        </>
    )
}

export default Modal;