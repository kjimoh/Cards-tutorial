import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [currentName, setName] = useState("Ridwan");
  const [data, setData] = useState(CARDS_DATA);
  const changeName = (name) => {
    setName(name);
  };

  const handleDeleteCard = (idNum) => {
    //copy array data
    const copiedData = [...data];
    //remove card by id
    // Filter removes card.id that is equal to the indentification number passed in
    const filteredData = copiedData.filter((item) => item.id !== idNum);
    console.log({ filteredData });
    //set data to new array
    setData(filteredData);
  };

  return (
    <div className="App">
      <h1>{currentName}</h1>
      {data.map((card, idx) => {
        const { title, subtitle, id } = card;
        const checkIfItsOdd = idx % 2 === 0 ? true : false;
        return (
          <Card
            alt={checkIfItsOdd}
            title={title}
            subtitle={subtitle}
            // title is passed into changeName function to set name to title
            onClickCard={() => handleDeleteCard(id)}
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
