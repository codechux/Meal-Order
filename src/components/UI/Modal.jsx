import styled from "styled-components";
import ReactDOM from "react-dom";

const Back = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

const Mode = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: slide-down 300ms ease-out forwardMode;
  @media (min-width: 768px) {
    width: 40rem;
    left: calc(50% - 20rem);
  }
`;

const ModalContainer = styled.div`
  @keyframes slide-down {
    from {
      opacity: 0;
      transform: translateY(-3rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Backdrop = (props) => {
  return <Back className="backdrop" onClick={props.onClose} />;
};

const Overlays = (props) => {
  return (
    <Mode className="modal">
      <div className="content">{props.children}</div>
    </Mode>
  );
};

const portal = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <ModalContainer>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portal)}
      {ReactDOM.createPortal(<Overlays>{props.children}</Overlays>, portal)}
    </ModalContainer>
  );
};

export default Modal;
