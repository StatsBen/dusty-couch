import React from "react";
// import styled from "styled-components";
import {
  CloseButton,
  ModalBackdrop,
  ModalContainer,
  ModalHeader
} from "../modals/reusable-modal-components";

const ErrorMessage = props => {
  return (
    <ModalBackdrop>
      <ModalContainer>
        <CloseButton onClick={props.close}>X</CloseButton>
        <ModalHeader>
          Uh oh! An error occurred. All your data is lost. Please try again some
          other time.
        </ModalHeader>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default ErrorMessage;
