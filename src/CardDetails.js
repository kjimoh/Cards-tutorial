import { CARDS_DATA } from "./CARD_DATA";

import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { cardId } = useParams();
  const filteredCard = CARDS_DATA.find((card) => card.id === cardId);

  return filteredCard ? <div>{filteredCard.title}</div> : <h1>Hello</h1>;
};

export default CardDetails;
