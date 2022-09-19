import "./App.css";
import Card from "./components/Card";

function App() {
  let myName = "ridwan";
  const changeName = () => {
    myName = "Sherif";
    //name won't change
    console.log(myName);
  };

  return (
    <div className="App">
      <h1 onClick={changeName}>{myName}</h1>
      {CARDS_DATA.map((card, idx) => {
        const { title, subtitle } = card;
        const checkIfItsOdd = idx % 2 === 0 ? true : false;
        return (
          <Card
            alt={checkIfItsOdd}
            title={title}
            subtitle={subtitle}
            key={idx}
          />
        );
      })}
    </div>
  );
}

export default App;

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
