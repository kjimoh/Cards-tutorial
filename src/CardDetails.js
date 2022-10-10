import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CardDetails = () => {
  let { cardId } = useParams();
  const cards = useSelector((state) => state.cards);
  const filteredCard = cards.find((card) => card.id === cardId);

  return filteredCard ? <div>{filteredCard.title}</div> : <h1>Hello</h1>;
};

export default CardDetails;
