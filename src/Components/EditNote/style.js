import styled from "styled-components"

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333ab;
  color: "#b0a8a8";
  text-decoration: "none";
`

const ModalContent = styled.div`
  background-color: #333;
  min-width: 25%;
  max-width: 35%;
  min-height: 25%;
  max-height: 50%;
  border-radius: 0.5em;
  z-index: 2;
  display: inherit;
  flex-direction: column;
  justify-content: inherit;
  align-items: center;
  padding: 2em;
  box-shadow: -0.05em 0.05em 0.2em #000;

  div,
  form,
  textarea {
    min-width: 50%;
    max-width: 100%;
    max-height: 100%;
  }

  input,
  textarea {
    background-color: #222;
    border-radius: 0.5em;
    border: none;
    color: #b0a8a8;
    font-size: 12pt;
  }
`

export { Modal, ModalContent }
