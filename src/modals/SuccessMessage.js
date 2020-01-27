import React from "react";
// import styled from "styled-components";
import {
  CloseButton,
  ModalBackdrop,
  ModalContainer,
  ModalHeader
} from "../modals/reusable-modal-components";

const SuccessMessage = props => {
  return (
    <ModalBackdrop>
      <ModalContainer>
        <CloseButton onClick={props.close}>X</CloseButton>
        <ModalHeader>Your Request Has Been Submitted Successfully</ModalHeader>
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default SuccessMessage;
