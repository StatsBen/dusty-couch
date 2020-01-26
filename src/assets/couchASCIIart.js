import React from "react";
import styled from "styled-components";

const CoochContainer = styled.p`
  font-family: "Courier New", Courier, monospace;
  font-weight: 900;
  font-size: 1.3em;
  min-width: 12em;
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
