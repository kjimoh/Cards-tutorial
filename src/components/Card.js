import React from "react";
import styled from "styled-components";

const Card = ({ title, subtitle, alt }) => {
  return (
    <CardContainer isBlackCard={alt}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 200px;
  height: 400px;
  border: 1px solid;
  border-radius: 10px;

  ${(props) =>
    props.isBlackCard
      ? "background-color: black; color: white;"
      : "background-color: white; color: black;"}
`;

export default Card;
