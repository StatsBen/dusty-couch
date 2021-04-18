import React from "react";
import styled, { keyframes } from "styled-components";

const gigglingPusheenSrc = require("url:./pusheen-giggling.gif");
const gigglingPusheenGIF = (
  <img
    src={gigglingPusheenSrc}
    alt="giggling pusheen"
    style={{ width: "100px" }}
  />
);

const fuckinSpinAround = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const FloatingAnnoyingPusheenContainer = styled.div`
  animation: ${fuckinSpinAround} 3s linear infinite;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left};
  width: 100px;
  z-index: 6;
  overlow: hidden;
  user-select: none;
`;

class CrazyPusheens extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nPusheens: 20, coords: [] };
  }

  componentDidMount() {
    setTimeout(this.generateNewPusheenCoordinates, 1000);
  }

  generateNewPusheenCoordinates = () => {
    const { nPusheens } = this.state;
    const w = window.innerWidth - 200;
    const h = document.getElementsByTagName("body")[0].offsetHeight - 200;
    let coords = [];

    for (let i = 0; i < nPusheens; i++) {
      coords.push({
        top: Math.round(Math.random() * h) + "px",
        left: Math.round(Math.random() * w) + "px"
      });
    }

    this.setState({ coords });

    setTimeout(this.generateNewPusheenCoordinates, 3000);
  };

  render() {
    return this.state.coords.map((coord, i) => (
      <FloatingAnnoyingPusheenContainer
        key={`go-fuck-yourself-${i}`}
        top={coord.top}
        left={coord.left}
      >
        {gigglingPusheenGIF}
      </FloatingAnnoyingPusheenContainer>
    ));
  }
}

export default CrazyPusheens;
