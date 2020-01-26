import React from "react";
import styled from "styled-components";

const CoochContainer = styled.p`
  font-family: "Courier New", Courier, monospace;
`;

const cooch = () => {
  return (
    <CoochContainer>
      {` .-="""""""""""=-. `}
      <br />
      {` | . . . . . . . | `}
      <br />
      {` | .'.'.'.'.'.'. | `}
      <br />
      {`()_______________()`}
      <br />
      {`||_______________||`}
      <br />
      {`_W_______________W_ `}
      <br />
    </CoochContainer>
  );
};

export default cooch;
