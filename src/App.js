import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [currentName, setName] = useState("Ridwan");
  const changeName = (name) => {
    setName(name);
  };
  console.log(currentName);

  return (
    <div className="App">
      <h1 onClick={changeName}>{currentName}</h1>
      {CARDS_DATA.map((card, idx) => {
        const { title, subtitle } = card;
        const checkIfItsOdd = idx % 2 === 0 ? true : false;
        return (
          <Card
            alt={checkIfItsOdd}
            title={title}
            subtitle={subtitle}
            // title is passed into changeName function to set name to title
            onClickCard={() => changeName(title)}
            key={idx}
          />
        );
      })}
    </div>
  );
}

export default App;

// changeName

const CARDS_DATA = [
  {
    title: "The Salafi Manager",
    subtitle: "I'm born a salafi model",
  },
  {
    title: "Abu Hayraat",
    subtitle: "I'm born a salafi model confuser",
  },
  {
    title: "The Salafi Developer",
    subtitle: "I'm Love to develope good app",
  },
];
