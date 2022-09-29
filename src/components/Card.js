import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const Card = ({ title, subtitle, alt, onClickCard, onDelete, id }) => {
  return (
    <CardContainer isBlackCard={alt}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <DetailsButton to={"/" + id}>See Details</DetailsButton>
      <EditButton onClick={onClickCard}>Edit</EditButton>
      <DeleteButton onClick={onDelete}>Delete</DeleteButton>
    </CardContainer>
  );
};

const StyleGlobal = css`
  height: 30px;
  padding: 0 15px;
  display: grid;
  place-items: center;
  border-top: 1px solid;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
`;

const EditButton = styled.div`
  ${StyleGlobal}
  margin-bottom: 30px;
`;

const DetailsButton = styled(Link)`
  ${StyleGlobal}
  margin-bottom: 60px;
`;

const DeleteButton = styled.div`
  ${StyleGlobal}
`;

const CardContainer = styled.div`
  width: 200px;
  height: 400px;
  border: 1px solid;
  border-radius: 10px;
  position: relative;
  overflow: hidden;

  ${(props) =>
    props.isBlackCard
      ? "background-color: black; color: white;"
      : "background-color: white; color: black;"}
`;

export default Card;
