import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [currentName, setName] = useState("Ridwan");
  const [data, setData] = useState(CARDS_DATA);
  const changeName = (name) => {
    setName(name);
  };

  const handleDeleteCard = () => {
    //copy array data
    const copiedData = [...data];
    //remove last data
    copiedData.pop();
    //set data to new array
    setData(copiedData);
  };

  return (
    <div className="App" onClick={handleDeleteCard}>
      <h1 onClick={changeName}>{currentName}</h1>
      {data.map((card, idx) => {
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
