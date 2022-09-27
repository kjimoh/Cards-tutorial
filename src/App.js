import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function App() {
  const [data, setData] = useState(CARDS_DATA);
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [position, setPosition] = useState();

  const handleEditCard = (id) => {
    // get card object
    const getCard = data.find((card) => card.id === id);
    // get position of the object in the array
    const position = data.findIndex((card) => card.id === id);
    setTitle(getCard.title);
    setSubtitle(getCard.subtitle);
    // set postion to state
    setPosition(position);
  };

  const handleSubmit = () => {
    // copy array
    const copiedArray = [...data];

    if (typeof position === "number") {
      // get Card Position in array to set title and subtitle
      copiedArray[position].title = title;
      copiedArray[position].subtitle = subtitle;
      // set array to updated array
      setData(copiedArray);
      //clear input field
      setTitle("");
      setSubtitle("");
      setPosition(null);
    } else {
      // create new object
      const newCard = {
        id: uid,
        title,
        subtitle,
      };
      // push new object to copied array
      copiedArray.push(newCard);

      // set data to new array
      setData(copiedArray);

      // clear state
      setTitle("");
      setSubtitle("");
    }
  };

  return (
    <div className="App">
      <input
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        placeholder="subtitle"
        onChange={(e) => setSubtitle(e.target.value)}
        value={subtitle}
      />
      <button onClick={handleSubmit}>
        {typeof position === "number" ? "Update Card" : "Create Card"}
      </button>

      <div style={{ display: "flex", gap: "20px", marginTop: "40px" }}>
        {data.map((card, idx) => {
          const { title, subtitle, id } = card;
          const checkIfItsOdd = idx % 2 === 0 ? true : false;
          return (
            <Card
              alt={checkIfItsOdd}
              title={title}
              subtitle={subtitle}
              onClickCard={() => handleEditCard(id)}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;

const CARDS_DATA = [
  {
    id: 101,
    title: "The Salafi Manager",
    subtitle: "I'm born a salafi model",
  },
  {
    id: 202,
    title: "Abu Hayraat",
    subtitle: "I'm born a salafi model confuser",
  },
  {
    id: 303,
    title: "The Salafi Developer",
    subtitle: "I'm Love to develope good app",
  },
];
